export const NumberSourceSnippet = `struct NumberSource {
    virtual float evaluate(const State* state) = 0;

private:
    Stateful* const parent;
    std::vector<Stateful*> dependencies;
    std::vector<Stateful*> dependants;
};`;

export const NumberInputSnippet = `struct NumberInput {

    void setSource(NumberSource* _source);

    float getValue(const State* state, float default_value = 0) const;

private:
    NumberSource* source;
};`;

export const AddObjectSnippet = `struct Add {
    float evaluate(const State* state) override {
        return input1.getValue(state) + input2.getValue(state);
    }

    NumberInput input1, input2;
};`;

export const StatefulSnippet = `struct Stateful {
    virtual ~Stateful();

    virtual double getTimeSpeed(const State* state_chain) const;

    uint32_t getTime(const State* state_chain) const;

    virtual std::size_t numStates() const = 0;

    std::vector<Stateful*> dependencies;
    std::vector<Stateful*> dependants;
};`;

export const StateSnippet = `struct State {
    State(const State* _parent, const Stateful* _owner);
    virtual ~State();

    virtual void reset() = 0;

private:

    const State* const parent;
    const Stateful* const owner;
};`;

export const SoundSourceSnippet = `struct SoundSource : Stateful {

    virtual void getNextChunk(SoundChunk& chunk, const State* dependant_state, const Stateful* dst) = 0;

protected:
    std::vector<SoundInput*> destinations;
};`;

export const SoundSourceBaseSnippet = `template <class StateType>
struct SoundSourceBase : SoundSource {

    void getNextChunk(SoundChunk& chunk, const State* parent_state, const Stateful* dst) override {
        StateType& state = lookupState(parent_state, dst);
        renderChunk(chunk, state);
    }

    virtual void renderChunk(SoundChunk& chunk, StateType& state) = 0;

    template <typename SoundSourceType = SoundSource>
    struct StateNumberSource : NumberSource {

        float evaluate(const State* state) const override;

        virtual float getValue(const StateType& state, const State* context) const = 0;
    };

private:

    StateType& lookupState(const State* parent_state, const Stateful* dependant) {
        auto it = state_map.find(std::make_pair(parent_state, dependant));
        if (it == state_map.end()) {
            throw std::runtime_error("The parent state could not be found in the state map");
        } else {
            return it->second;
        }
    }

    std::unordered_map<std::pair<const State*, const Stateful*>, StateType> state_map;
};`;

export const AudioStateSnippet = `struct AudioState : State {

    void reset() override {
        pos = 0;
    }

    uint64_t pos;
};`;

export const AudioSnippet = `struct Audio : SoundSourceBase<AudioState> {

    void loadFromFile(std::string filename);

    void renderChunk(SoundChunk& chunk, AudioState& state) override;

    struct CurrentTime : StateNumberSource<Audio> {
        float getValue(const AudioState& state, const State* context) const override {
            return state->pos / (float)SAMPLE_FREQUENCY;
        }
    } current_time;

private:
    sf::SoundBuffer soundbuffer;
};`;

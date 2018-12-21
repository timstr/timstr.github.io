/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/AboutMe/AboutMe.tsx":
/*!********************************************!*\
  !*** ./src/components/AboutMe/AboutMe.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const TabMenu_1 = __webpack_require__(/*! ../Common/TabMenu */ "./src/components/Common/TabMenu.tsx");
const Color_1 = __webpack_require__(/*! ../../interfaces/Color */ "./src/interfaces/Color.ts");
const Intro_1 = __webpack_require__(/*! ./Intro */ "./src/components/AboutMe/Intro.tsx");
const MySkills_1 = __webpack_require__(/*! ./MySkills */ "./src/components/AboutMe/MySkills.tsx");
exports.AboutMe = () => (React.createElement(TabMenu_1.TabMenu, { contentColor: new Color_1.Color("#dddddd"), backgroundColor: new Color_1.Color("#ffffff") }, () => [
    {
        title: "Intro",
        render: () => React.createElement(Intro_1.Intro, null),
    },
    {
        title: "My Skills",
        render: () => React.createElement(MySkills_1.MySkills, null),
    },
]));


/***/ }),

/***/ "./src/components/AboutMe/Intro.tsx":
/*!******************************************!*\
  !*** ./src/components/AboutMe/Intro.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Section_1 = __webpack_require__(/*! ../Common/Section */ "./src/components/Common/Section.tsx");
const Link_1 = __webpack_require__(/*! ../Common/Link */ "./src/components/Common/Link.tsx");
const FaceIcon_1 = __webpack_require__(/*! ../FaceIcon */ "./src/components/FaceIcon.tsx");
/**
 * TODO:
 *  - bio
 *  - interests
 *  - skills
 *  - etc
 *  - links to other pages where relevant
 *  - pictures of me
 *  - drawings / random facts? I have regular lucid dreams
 */
exports.Intro = () => (React.createElement("div", null,
    React.createElement("div", { className: "intromain" },
        React.createElement("div", { className: "intromain-child" },
            React.createElement(FaceIcon_1.FaceIcon, null),
            React.createElement("h1", { className: "myname" }, "Tim Straubinger"))),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Bio") },
        React.createElement("p", null, "I'm currently finishing my bachelor's degree in Computer Science at UBC Vancouver. When I'm not biking or exploring nature, I like to create my own worlds, usually with software, sometimes with Lego. Most of my software projects revolve around trying to emulate organic chaos and complexity of one form or another."),
        React.createElement("p", null,
            "Take a look around. Please ",
            React.createElement("a", { href: "mailto:straubinger.tim@gmail.com" }, "ask me"),
            " any questions you have about my work.")),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Resume") },
        React.createElement("p", null,
            "Click ",
            React.createElement(Link_1.Link, { dst: "TimStraubingerCV.pdf" }, "here"),
            " for my resume.")),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Contact Me") },
        React.createElement("p", null,
            "Email: ",
            React.createElement("a", { href: "mailto:straubinger.tim@gmail.com" }, "straubinger.tim@gmail.com")))));


/***/ }),

/***/ "./src/components/AboutMe/MySkills.tsx":
/*!*********************************************!*\
  !*** ./src/components/AboutMe/MySkills.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Section_1 = __webpack_require__(/*! ../Common/Section */ "./src/components/Common/Section.tsx");
const Link_1 = __webpack_require__(/*! ../Common/Link */ "./src/components/Common/Link.tsx");
// TODO: pdf resume, skills, past work, personal projects, etc
exports.MySkills = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "My Skills"),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Curriculum Vitae") },
        "Click ",
        React.createElement(Link_1.Link, { dst: "TimStraubingerCV.pdf" }, "here for my CV")),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Skills") },
        React.createElement("h4", null, "Programming Languages"),
        React.createElement("p", null, "I'm proficient in C++. It's my favourite language by a large margin and I've been using it regularly for over 6 years. Given the number of times I've learned something new that made me rethink the language I thought I knew, I cannot claim to know the language through and through. But in addition the basics of C++98 like all the fun gadgets of the Standard Library, basic object oriented programming, templates, the quirky build model, and the constraints and capabilities of the hardware runtime environment, I've been internalizing the changes introduced in C++11 and make an effort to keep up to date with some of the more recent language features since then. I have a great respect for the language's power and it's dark side commonly known as Undefined Behavior. Some features of the language that I'm very familiar with include:"),
        React.createElement("ul", { className: "multicolumn" },
            React.createElement("li", null,
                "the ",
                React.createElement("code", null, "auto"),
                " keyword"),
            React.createElement("li", null, "move semantics"),
            React.createElement("li", null, "variadic templates"),
            React.createElement("li", null, "SFINAE techniques"),
            React.createElement("li", null, "lambda functions"),
            React.createElement("li", null, "smart pointers"),
            React.createElement("li", null,
                React.createElement("code", null, "const"),
                "-correctness"),
            React.createElement("li", null,
                React.createElement("code", null, "std::function")),
            React.createElement("li", null, "special member functions"),
            React.createElement("li", null, "operator overloading"),
            React.createElement("li", null,
                "the ",
                React.createElement("code", null, "noexcept"),
                " specifier"),
            React.createElement("li", null,
                "the ",
                React.createElement("code", null, "constexpr"),
                " keyword"),
            React.createElement("li", null, "uniform initialization"),
            React.createElement("li", null, "forwarding references"),
            React.createElement("li", null, "multiple inheritance")),
        React.createElement("p", null, "I also hope to learn more about atomics and using the standard libary's synchronization primitives. I eagerly await concepts, modules, and coroutines in C++20."),
        React.createElement("h4", null, "Other Programming Languages"),
        React.createElement("p", null, "I've also spent a lot of time with JavaScript (specifically, with TypeScript), and with C. Additional programming languages that I have a basic familiarity with include"),
        React.createElement("ul", { className: "multicolumn" },
            React.createElement("li", null, "Java"),
            React.createElement("li", null, "C#"),
            React.createElement("li", null, "Julia"),
            React.createElement("li", null, "Haskell"),
            React.createElement("li", null, "Prolog"),
            React.createElement("li", null, "CUDA C"),
            React.createElement("li", null, "GLSL"),
            React.createElement("li", null, "Erlang")),
        React.createElement(Section_1.SubSection, null,
            React.createElement("h4", null, "Frameworks, Environment, Libraries, Tools"),
            React.createElement("ul", { className: "multicolumn" },
                React.createElement("li", null,
                    React.createElement(Link_1.Link, { dst: "https://reactjs.org/" }, "React")),
                React.createElement("li", null,
                    React.createElement(Link_1.Link, { dst: "https://www.sfml-dev.org/" }, "SFML")),
                React.createElement("li", null,
                    React.createElement(Link_1.Link, { dst: "https://www.libsdl.org/" }, "SDL")),
                React.createElement("li", null,
                    React.createElement(Link_1.Link, { dst: "https://threejs.org/" }, "three.js")),
                React.createElement("li", null,
                    React.createElement(Link_1.Link, { dst: "https://www.boost.org/" }, "Boost")),
                React.createElement("li", null, "git"),
                React.createElement("li", null, "CMake"),
                React.createElement("li", null, "Visual Studio"),
                React.createElement("li", null, "Visual Studio Code"))),
        React.createElement(Section_1.SubSection, null,
            React.createElement("h4", null, "Human Languages"),
            React.createElement("ul", null,
                React.createElement("li", null, "English"),
                React.createElement("li", null, "German"))))));


/***/ }),

/***/ "./src/components/CellularAutomata/CellularAutomata.tsx":
/*!**************************************************************!*\
  !*** ./src/components/CellularAutomata/CellularAutomata.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const YouTubePlayer_1 = __webpack_require__(/*! ../Common/YouTubePlayer */ "./src/components/Common/YouTubePlayer.tsx");
// TODO: explanation, discrete, continuous, screenshots, videos
exports.CellularAutomata = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "Cellular Automata"),
    React.createElement("h4", null, "Coming soon"),
    React.createElement(YouTubePlayer_1.YouTubePlayer, { ytid: "JyjkAtQ-BkM", width: 686, height: 480 })));


/***/ }),

/***/ "./src/components/Common/BigImage.tsx":
/*!********************************************!*\
  !*** ./src/components/Common/BigImage.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
// All images will be looked for in the "img/" folder.
// If the image name does not contain a file extension, png will be added by default
exports.BigImage = (props) => {
    const path = "img/" + props.name + (props.name.includes(".") ? "" : ".png");
    return (React.createElement("div", { className: "bigimage" },
        React.createElement("img", { className: "bigimage-img", src: path })));
};


/***/ }),

/***/ "./src/components/Common/CodeSyntax.tsx":
/*!**********************************************!*\
  !*** ./src/components/Common/CodeSyntax.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.CodeSnippet = (props) => (React.createElement("div", { className: "codesnippet" },
    React.createElement("code", null,
        React.createElement("pre", null, props.children))));


/***/ }),

/***/ "./src/components/Common/ImageIcon.tsx":
/*!*********************************************!*\
  !*** ./src/components/Common/ImageIcon.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const LazyImage_1 = __webpack_require__(/*! ./LazyImage */ "./src/components/Common/LazyImage.tsx");
const Link_1 = __webpack_require__(/*! ./Link */ "./src/components/Common/Link.tsx");
/**
 * Requires both "img/{image}.png" and "img/{image}_small.png" to exist
 */
exports.ImageIcon = (props) => (React.createElement("div", { className: "pieceicon" },
    React.createElement(Link_1.Link, { dst: `img/${props.image}.png` },
        React.createElement(LazyImage_1.LazyImage, { className: "pieceicon-img", src: `${props.image}_small.png` }))));


/***/ }),

/***/ "./src/components/Common/LazyImage.tsx":
/*!*********************************************!*\
  !*** ./src/components/Common/LazyImage.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class LazyImage extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = () => {
            this.setState({ loaded: true });
        };
        this.state = {
            loaded: false,
        };
    }
    render() {
        const extraClass = this.props.className ? " " + this.props.className : "";
        return (React.createElement("div", { className: "lazyimage-container" },
            React.createElement("img", { key: this.props.src, className: "lazyimage" + extraClass, src: "img/" + this.props.src, width: this.props.width, height: this.props.height, onLoad: this.handleLoad, style: { opacity: this.state.loaded ? 1 : 0 } }),
            this.state.loaded ? null : React.createElement("div", { className: "lazyimage-loading" }, "Loading...")));
    }
}
exports.LazyImage = LazyImage;


/***/ }),

/***/ "./src/components/Common/Link.tsx":
/*!****************************************!*\
  !*** ./src/components/Common/Link.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Link = (props) => (React.createElement("a", { href: props.dst, target: "_blank", rel: "noopener noreferrer" }, props.children));


/***/ }),

/***/ "./src/components/Common/Section.tsx":
/*!*******************************************!*\
  !*** ./src/components/Common/Section.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Section = (props) => (React.createElement("div", { className: "section" },
    React.createElement("div", { className: "section-heading" },
        React.createElement("div", { className: "section-contents" }, props.header)),
    React.createElement("div", { className: "section-body" },
        React.createElement("div", { className: "section-contents" }, props.children))));
exports.SubSection = (props) => (React.createElement("div", { className: "subsection" }, props.children));


/***/ }),

/***/ "./src/components/Common/SoundCloudPlayer.tsx":
/*!****************************************************!*\
  !*** ./src/components/Common/SoundCloudPlayer.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
/**
 * Wraps an embedded SoundCloud song player
 */
exports.SoundCloudPlayer = (props) => (React.createElement("iframe", { className: "soundcloudplayer", width: props.width, height: props.height, scrolling: "no", frameBorder: "no", allow: "autoplay", src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${props.trackid}&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true` }));


/***/ }),

/***/ "./src/components/Common/TabMenu.tsx":
/*!*******************************************!*\
  !*** ./src/components/Common/TabMenu.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Color_1 = __webpack_require__(/*! ../../interfaces/Color */ "./src/interfaces/Color.ts");
class TabItem extends React.Component {
    constructor(props) {
        super(props);
        this.startHover = () => {
            this.setState({ hover: true });
        };
        this.stopHover = () => {
            this.setState({ hover: false });
        };
        this.state = {
            hover: false,
        };
    }
    render() {
        let color = this.props.color;
        if (this.props.active && this.props.activeColor) {
            color = this.props.activeColor;
        }
        else if (this.state.hover && this.props.hoverColor) {
            color = this.props.hoverColor;
        }
        const style = {
            backgroundColor: color.toHexString(),
        };
        return (React.createElement("div", { className: this.props.active ? "tabmenuitem-active" : "tabmenuitem", style: style, onClick: this.props.onClick, onMouseEnter: this.startHover, onMouseLeave: this.stopHover },
            React.createElement("span", { className: "tabmenuitem-title" }, this.props.title)));
    }
}
class TabMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectTab = (tab) => {
            const theTab = this.state.tabs.find(t => t.title === tab);
            if (theTab === undefined) {
                this.setState({ title: null, content: null });
            }
            else {
                this.setState({ title: theTab.title, content: theTab.render() });
            }
        };
        let currentTab = null;
        let tabs = props.children(this.onSelectTab);
        if (tabs.length > 0) {
            currentTab = tabs[0];
        }
        this.state = {
            title: currentTab.title,
            content: currentTab.render(),
            tabs,
        };
    }
    render() {
        const tabColor = Color_1.linearMix(this.props.backgroundColor, this.props.contentColor, 0.5);
        const lighter = Color_1.linearMix(tabColor, new Color_1.Color("#fff"), 0.5);
        return (React.createElement("div", { className: "tabmenu", style: {
                backgroundColor: this.props.backgroundColor.toHexString(),
            } },
            React.createElement("div", { className: "tabmenu-list" }, this.state.tabs.map(t => (React.createElement(TabItem, { key: t.title, active: t.title === this.state.title, title: t.title, color: tabColor, hoverColor: lighter, activeColor: this.props.contentColor, onClick: () => this.onSelectTab(t.title) })))),
            React.createElement("div", { key: this.state.title, className: "tab-content", style: {
                    backgroundColor: this.props.contentColor.toHexString(),
                } }, this.state.content || "Please select a tab")));
    }
}
exports.TabMenu = TabMenu;


/***/ }),

/***/ "./src/components/Common/YouTubePlayer.tsx":
/*!*************************************************!*\
  !*** ./src/components/Common/YouTubePlayer.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
/**
 * Wraps a YouTube embedded video player
 */
exports.YouTubePlayer = (props) => (React.createElement("iframe", { className: "youtubeplayer", width: props.width, height: props.height, src: `https://www.youtube.com/embed/${props.ytid}?autoplay=1&origin=http://timstr.github.io&rel=0`, frameBorder: 0 }));


/***/ }),

/***/ "./src/components/CoolGifs.tsx":
/*!*************************************!*\
  !*** ./src/components/CoolGifs.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const TabMenu_1 = __webpack_require__(/*! ./Common/TabMenu */ "./src/components/Common/TabMenu.tsx");
const Color_1 = __webpack_require__(/*! ../interfaces/Color */ "./src/interfaces/Color.ts");
const LazyImage_1 = __webpack_require__(/*! ./Common/LazyImage */ "./src/components/Common/LazyImage.tsx");
const Link_1 = __webpack_require__(/*! ./Common/Link */ "./src/components/Common/Link.tsx");
const GifList = [
    { name: "flying", title: "Flying" },
    { name: "gooflow", title: "Flowing Goo" },
    { name: "fovsilliness", title: "Negative Field-of-View" },
    { name: "orbit", title: "Orbit" },
];
const GifImage = (props) => (React.createElement(Link_1.Link, { dst: `img/fractals/${props.image}.gif` },
    React.createElement(LazyImage_1.LazyImage, { className: "coolgif", src: `fractals/${props.image}.gif` })));
exports.CoolGifs = () => (React.createElement(TabMenu_1.TabMenu, { contentColor: new Color_1.Color("#cccccc"), backgroundColor: new Color_1.Color("#dddddd") }, () => GifList.map(gif => ({
    title: gif.title,
    render: () => React.createElement(GifImage, { image: gif.name }),
}))));


/***/ }),

/***/ "./src/components/FaceIcon.tsx":
/*!*************************************!*\
  !*** ./src/components/FaceIcon.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.FaceIcon = () => (React.createElement("div", { className: "faceicon" },
    React.createElement("img", { className: "faceicon-img", src: "img/face.jpg" })));


/***/ }),

/***/ "./src/components/Flosion/AboutFlosion.tsx":
/*!*************************************************!*\
  !*** ./src/components/Flosion/AboutFlosion.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Section_1 = __webpack_require__(/*! ../Common/Section */ "./src/components/Common/Section.tsx");
const BigImage_1 = __webpack_require__(/*! ../Common/BigImage */ "./src/components/Common/BigImage.tsx");
exports.AboutFlosion = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "About Flosion"),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "What is it?") },
        React.createElement("p", null, "Flosion is the tentative name for sound editing software that I've been working on in one form or another for a handful of years. Briefly put, it's a visual programming language for creating, modifying, and listening to streams of sound. It allows the user to compose various effects by building a network, and to listen to the results in real-time. Every effect is highly configurable, and can be parameterized by nearly anything else in the network."),
        React.createElement(BigImage_1.BigImage, { name: "flosion/simplesong" })),
    React.createElement("p", null),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Motivation") },
        React.createElement("p", null, "I began dreaming about this project when I was trying to use existing digital audio workstations like Apple's Logic Pro to create my own synthesizers, effects and melodies and put together songs. I had a great deal of fun with these, but many out-of-the-box synths and effects are complicated and have limited degrees of freedom, which can be overwhelming for a beginner and restrictive for the experienced user who wants to change something fundamental. It also seemed impossible to make one effect depend on properties of another effect, which was something I regularly wanted. Lots of existing music software that I've seen provides the user with a timeline, a list of audio tracks to layer over one another on this timeline, and a chain of effects to be applied to each track. These effects themselves are modular and range from simple, with one or two parameters, to walls of buttons, knobs, and detailed graphics. This works well for creating compositions and using effects that one already likes, but I wanted to be able to lift the hood and re-wire things as I desired."),
        React.createElement("p", null, "Thus I slowly began developing my own audio software. The beginnings were very slow and I'll skip the details by saying that I learned intimately how many things you can do wrong in C++. But over time, the more I learned and the more I developed, my software took shape and the first few interesting-sounding glitches were then followed by recognizable melodies and recreations of effects that I was familiar with from elsewhere. There's still a lot I plan to do, but with the foundations already in place, I'm hoping Flosion will eventually be good enough to create freely with and to share with the community."),
        React.createElement("p", null, "The end goal is to have software that allows users to play with sounds and create music, working at the level of abstraction they desire, and while having the freedom to configure anything they wish, all while remaining very expressive, intuitive, and unique in its approach."))));


/***/ }),

/***/ "./src/components/Flosion/Examples.tsx":
/*!*********************************************!*\
  !*** ./src/components/Flosion/Examples.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Section_1 = __webpack_require__(/*! ../Common/Section */ "./src/components/Common/Section.tsx");
const BigImage_1 = __webpack_require__(/*! ../Common/BigImage */ "./src/components/Common/BigImage.tsx");
const Link_1 = __webpack_require__(/*! ../Common/Link */ "./src/components/Common/Link.tsx");
const SoundCloudPlayer_1 = __webpack_require__(/*! ../Common/SoundCloudPlayer */ "./src/components/Common/SoundCloudPlayer.tsx");
exports.Examples = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "Examples"),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Preamble") },
        React.createElement("p", null, "Flosion is an ongoing project, and has been for a few years now. Consequently, the code base has been through many major overhauls, and the user interface has also changed a number of times, and is changing yet again as part of a current code update. The abstract structure has remained the same for a long time though, and so the various screenshots here are still very relevant.")),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Basic Setups") },
        React.createElement("p", null, "This screenshot is of an early version of Flosion, and shows, at the top, two numeric constants, X and Y, being passed to an \"Add\" number object, which can be seen computing their sum. Below that is another variable, \"X Domain,\" being passed through a \"Sine\" object, and into a graphing object. Graphing objects were a very useful feature that unfortunately were implemented in a very unsafe and messy way, and ways to reintroduce them are under investigation. At the bottom of the image, there is the object labeled \"Aaah.wav,\" which is simply a sound object that plays a sound file. This object is fed into the \"PlayBack\" object, which simply takes the sound stream entering its input and plays the stream to the computer's speakers. The result is that one can physically hear a recording of myself shouting."),
        React.createElement("p", null, "If the font looks weird, it's probably because the glyphs were hand drawn by myself, using a pixel art program that I also wrote myself to animate video game characters, all because I couldn't figure out how to use standard text rendering APIs. But that's a different story from my earlier days as a programmer."),
        React.createElement(BigImage_1.BigImage, { name: "flosion/demo1" }),
        React.createElement(Section_1.SubSection, null,
            React.createElement("p", null,
                "In this example, a Filter object is used, which computes a",
                " ",
                React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Fast_Fourier_transform" }, "fast Fourier transform"),
                " ",
                "of its input sound to create a",
                " ",
                React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Spectrogram" }, "spectrogram"),
                ". This spectrogram can be used to see how the sound is composed of a distribution of waves of different frequencies and amplitudes. The Filter object can be used to amplify or attenuate these frequencies selectively. It exposes a \"frequency\" number source at its top, which it can change to select a frequency, and it provides an \"amplitude\" number input, which it multiplies individual frequencies by. To modify individual frequencies, one simply needs to define a function of the Filter's frequency and pass it into the \"amplitude\" input. In this screenshot, a bell curve, or Gaussian distribution, is used to silence all but a narrow range of frequency components. The overall result is that a",
                " ",
                React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Band-pass_filter" }, "band-pass filter"),
                " ",
                "is applied to the sound stream. Band-pass filters are a fairly common effect in digital music production, and can be used for things like isolating vocals or bass from a larger piece of audio."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/demo2" })),
        React.createElement(Section_1.SubSection, null,
            React.createElement("p", null,
                "Here, we see a NoteGen object being used. This object is essentially a",
                " ",
                React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Function_generator" }, "function generator"),
                ", which produces some periodic signal at a specified frequency. The NoteGen object exposes a \"phase\" number output, visible on its top edge, and accepts a \"wave function\" input. By defining the wave function input to be any desirable function of the phase, the user can create any wave form they choose. The wave function chose here is the canonical sine wave."),
            React.createElement("p", null, "The frequency at which this wave form is played in the output sound is determined by the \"frequency\" number input, which is being given the constant value of 250 Hz here. The end result of this setup is a simple sine-wave tone of 250 Hz."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/demo3" })),
        React.createElement(Section_1.SubSection, null,
            React.createElement("p", null, "Here, the NoteGen object is used in tandem with the Sampler object. The Sampler object is used to define a melody. The vertical axis denotes note pitch, and the horizontal axis denotes time. Essentially, it represents sheet music, but without all the swirls and lines and other complex rules. The Sampler uses a multi-input so that it can call upon its input many times in parallel, which it needs to do when its notes overlap in time. The Sampler object also exposes a \"note frequency\" number output, which simply yields the value of the current note's frequency. By plugging this into the NoteGen's frequency input, it produces a note of the desired pitch. This example thus plays a sine-wave melody which is defined by the notes drawn on the Sampler object."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/demo4" }))),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "More Complicated Examples") },
        React.createElement("p", null, "Here's what it can look like when bigger networks of sounds and numbers are put together. It can get messy quickly, which is why the next major version of Flosion will include new ways to encapsulate sub-networks and hide the small details when needed."),
        React.createElement(BigImage_1.BigImage, { name: "flosion/franklyamess" }),
        React.createElement(Section_1.SubSection, null,
            React.createElement("p", null, "The following setup was used as-is to create a pair of recorded songs. The songs themselves can be listened to below the screenshot."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/simplesong" }),
            React.createElement(SoundCloudPlayer_1.SoundCloudPlayer, { trackid: "275870851", width: 300, height: 300 }),
            React.createElement(SoundCloudPlayer_1.SoundCloudPlayer, { trackid: "275870658", width: 300, height: 300 }))),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "More Graphing Objects") },
        React.createElement("p", null, "In previous versions where graphing objects still existed, 2D graphing objects could also be used, and were very useful for visualizing multi-dimensional things like filter functions that changed over time."),
        React.createElement(BigImage_1.BigImage, { name: "flosion/2dgraph" })),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "A Quick Note on the Sampler") },
        React.createElement("p", null, "In more recent versions of Flosion, I've been working to allow the notes of a Sampler object to be far more customizable than those of comparable note sequencers in other music software. Firstly, notes can change frequency on the fly, as shown in the first example. Second, notes can be parameterized by adding any number of numeric values that change as desired over the course of the note's lifetime. These parameters are very useful for creating truly customized melodies and effects, and help to give back some creative freedoms, like dynamically modifying the timbre of instrument, which is otherwise lost when making music on a computer."),
        React.createElement(BigImage_1.BigImage, { name: "flosion/sampler1" }),
        React.createElement(BigImage_1.BigImage, { name: "flosion/sampler2" }),
        React.createElement(BigImage_1.BigImage, { name: "flosion/sampler3" }))));


/***/ }),

/***/ "./src/components/Flosion/Flosion.tsx":
/*!********************************************!*\
  !*** ./src/components/Flosion/Flosion.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const TabMenu_1 = __webpack_require__(/*! ../Common/TabMenu */ "./src/components/Common/TabMenu.tsx");
const Color_1 = __webpack_require__(/*! ../../interfaces/Color */ "./src/interfaces/Color.ts");
const AboutFlosion_1 = __webpack_require__(/*! ./AboutFlosion */ "./src/components/Flosion/AboutFlosion.tsx");
const HowItWorks_1 = __webpack_require__(/*! ./HowItWorks */ "./src/components/Flosion/HowItWorks.tsx");
const Examples_1 = __webpack_require__(/*! ./Examples */ "./src/components/Flosion/Examples.tsx");
const Implementation_1 = __webpack_require__(/*! ./Implementation */ "./src/components/Flosion/Implementation.tsx");
const SongGallery_1 = __webpack_require__(/*! ./SongGallery */ "./src/components/Flosion/SongGallery.tsx");
exports.Flosion = () => (React.createElement(TabMenu_1.TabMenu, { backgroundColor: new Color_1.Color("#fff"), contentColor: new Color_1.Color("#dddddd") }, () => [
    { title: "About", render: () => React.createElement(AboutFlosion_1.AboutFlosion, null) },
    { title: "How It Works", render: () => React.createElement(HowItWorks_1.HowItWorks, null) },
    { title: "Implementation", render: () => React.createElement(Implementation_1.Implementation, null) },
    { title: "Examples", render: () => React.createElement(Examples_1.Examples, null) },
    { title: "Song Gallery", render: () => React.createElement(SongGallery_1.SongGallery, null) },
]));


/***/ }),

/***/ "./src/components/Flosion/HowItWorks.tsx":
/*!***********************************************!*\
  !*** ./src/components/Flosion/HowItWorks.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Section_1 = __webpack_require__(/*! ../Common/Section */ "./src/components/Common/Section.tsx");
const BigImage_1 = __webpack_require__(/*! ../Common/BigImage */ "./src/components/Common/BigImage.tsx");
const Link_1 = __webpack_require__(/*! ../Common/Link */ "./src/components/Common/Link.tsx");
exports.HowItWorks = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "How Flosion Works"),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Overview") },
        React.createElement("h4", null, "Data Types and Objects"),
        React.createElement("p", null, "In Flosion, there are two data types: sound streams and numbers. There are also objects, which produce and consume this data. The two types, naturally, are sound objects and number objects."),
        React.createElement(BigImage_1.BigImage, { name: "flosion/numbersandsounds" }),
        React.createElement("h4", null, "Number Objects"),
        React.createElement("p", null, "Number objects have no state. They can only accept numbers as inputs and always produce numbers as outputs. These act just familiar mathematical functions. Examples of number objects include addition, multiplication, trigonometric functions, and numeric constants."),
        React.createElement(BigImage_1.BigImage, { name: "flosion/numberobjects" }),
        React.createElement("h4", null, "Sound Objects"),
        React.createElement("p", null, "Sound objects produce a stream of sound that can be listened to or given to other objects as input. Sound objects can also take sound streams as inputs, modifying them according to their design, and returning the result as their output. Sound objects can additionally accept numbers as inputs, which may control various behaviors of the sound object. Sound objects are allowed to have stateful information that changes over time as it produces sound. Many sound objects also expose some of their stateful information in the form of number outputs. Some examples include an amplifier, an echo effect, or a sound clip."),
        React.createElement(BigImage_1.BigImage, { name: "flosion/soundobjects" }),
        React.createElement(Section_1.SubSection, null,
            React.createElement("h4", null, "Flow Networks"),
            React.createElement("p", null, "Sound objects and number objects can be wired together ad hoc to create a network. This is done simply by connecting number outputs with number inputs, and sound outputs with sound inputs. In these networks, sound is always flowing in one direction and numbers are flowing in the opposite direction. Why this is so is explained further down. The output of these networks is a sound that can be listened to. For example, one can attach the output of a sound clip object to the input of an amplifier object, to define a network which produces a louder or quieter version of the original sound clip."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/ampnetwork" }),
            React.createElement("p", null, "Of course, these networks can get far more interesting."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/morecomplicated" })),
        React.createElement(Section_1.SubSection, null,
            React.createElement("h4", null, "Inputs and Outputs"),
            React.createElement("p", null,
                "For sending and receiving numbers, there are of number inputs and number outputs. There are also sound ouputs, which produce streams of sound, and sound inputs, which consume them. There are two types of sound inputs, single-inputs and multi-inputs. A sound output that is connected to a single-input always produces a single stream of sound for that input. But a sound output that is connected to a multi-input can produce multiple streams, at the same time. A multi-input always has some known",
                " ",
                React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Arity" }, "arity"),
                ", which is a number that generalizes the number of streams it can receive in parallel. A single-input is essentially a special case of a multi-input, with a fixed arity of 1."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/inputsandoutputs" })),
        React.createElement(Section_1.SubSection, null,
            React.createElement("h4", null, "Parallelism"),
            React.createElement("p", null,
                "Recall that sound objects are allowed to have state. Actually, sound objects can have ",
                React.createElement("i", null, "multiple"),
                " states at the same time. This is one case where Flosion departs from the physical realm a bit. The reason for this is that sometimes the same sound stream needs to be used in multiple places, and the results want to be heard in real-time. Another reason is the existence of sound multi-inputs, which call upon their inputs multiple times in parallel. Multi-inputs are very useful for creating certain types of sound objects. For example, a synthesizer can be plugged into the multi-input of a sound object that generates a melody from some number of notes notes. The result is that if the melody has n notes, then for every state of the melody generator, there will be an additional n states in the synthesizer. This way, the melody can use the same synthesizer multiple times in parallel to play overlapping notes, without any distortions or conflict from shared state."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/parallelsynth" }),
            React.createElement("h4", null, "Relativism"),
            React.createElement("p", null, "Another quirk of Flosion is that time is very relative. Some sound objects create delays in the sounds they draw upon, and other sound objects change the speed of time coming from their inputs. This means that when one sound object queries the current time of another sound object, it might see different value and a different speed of time from what it knows. This isn't as big of a problem as it might sound. In practice, it just works out."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/timestretchdelay" })),
        React.createElement(Section_1.SubSection, null,
            React.createElement("h4", null, "The Flow of Information"),
            React.createElement("p", null, "In Flosion, sound streams always flow in one direction, and numbers always flow in the opposite direction. This is necessary because of multi-inputs, which allow one sound object to call upon an input many times in parallel. This means that the parent sound object sees many states in the child sound object, while the child object only ever sees one parent state. Thus it's a bit meaningless for the parent object to ask for stateful information from the child, while it always makes sense for a child to ask for stateful information from a parent. Of course, this restriction doesn't apply for constants and numbers that don't depend on state, but those never change and are a bit boring anyway. Thus, sounds flow up the network, and numbers flow down the network. With both numbers and sound streams, closed loops would cause an infinite recursion, and so are not allowed."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/goodbadconnections" }),
            React.createElement("h4", null, "Stateful and Stateless numbers"),
            React.createElement("p", null, "Some numbers in Flosion come from sources that have no state, such as constants, or functions whose inputs are all constants. These can be referred to as global, and they can be used as inputs anywhere. But some numbers come for sources that are stateful, and these are usually sound objects. To preserve the flow of information, stateful number sources cannot be connected to number inputs that don't have access to that state. Again, the flow of numbers needs to be in the direction opposite to the flow of sound. The way that sound is flowing is what decides whose state is visible to which other sound objects."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/inaccessible" }),
            React.createElement("p", null, "Finally, an output can be connected to any number of inputs, but every input can have at most one output."),
            React.createElement(BigImage_1.BigImage, { name: "flosion/oneinputmanyoutputs" }))),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Abstract Structure") },
        React.createElement("p", null,
            "The networks of sound objects in Flosion always form a",
            " ",
            React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Directed_acyclic_graph" }, "directed acyclic graph (DAG)"),
            ". Number objects also always connect to form a DAG, though, as discussed above, the flow of sound and numbers is always in the opposite direction."),
        React.createElement(BigImage_1.BigImage, { name: "flosion/subgraphs" }),
        React.createElement("p", null, "The states of sound objects are a bit special. Every state has a parent state, and every state can have multiple child states. The states of the sound objects thus form a tree, and this tree has a similar structure to the overall sound object network. Given any sound object, it has one state for each state of every sound single-input it is connected to, and n states for each state of every n-adic multi-input it is connected to."),
        React.createElement(BigImage_1.BigImage, { name: "flosion/statetree" }))));


/***/ }),

/***/ "./src/components/Flosion/Implementation.tsx":
/*!***************************************************!*\
  !*** ./src/components/Flosion/Implementation.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Section_1 = __webpack_require__(/*! ../Common/Section */ "./src/components/Common/Section.tsx");
const Link_1 = __webpack_require__(/*! ../Common/Link */ "./src/components/Common/Link.tsx");
const CodeSyntax_1 = __webpack_require__(/*! ../Common/CodeSyntax */ "./src/components/Common/CodeSyntax.tsx");
const Snippets_1 = __webpack_require__(/*! ./Snippets */ "./src/components/Flosion/Snippets.ts");
exports.Implementation = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "How Flosion Is Written"),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Implementation") },
        React.createElement("h4", null,
            React.createElement("code", null, "NumberSource"),
            " and ",
            React.createElement("code", null, "NumberInput")),
        React.createElement("p", null,
            "Flosion is written in C++ and uses ",
            React.createElement(Link_1.Link, { dst: "https://www.sfml-dev.org/" }, "SFML"),
            " ",
            "for drawing, playing sounds, handling user input and managing windows. Additionally, Flosion uses a GUI library that I wrote myself and have used for other projects, which is very much inspired by HTML and its JavaScript interface. The GUI is also written in modern C++ and uses SFML."),
        React.createElement("p", null, "The source code makes heavy use of inheritance and templates. Inheritance is used to provide a generic interface for sound and number objects to communicate, while templates are used to avoid boilerplate and preserve type-safety. The code shown here is stripped down significantly, and in the actual source code, a lot of book-keeping methods are necessary, which are not needed to understand the basics."),
        React.createElement("p", null,
            "Here are the essentials details of the ",
            React.createElement("code", null, "NumberSource"),
            " class, which every number object inherits from. ",
            React.createElement("code", null, "evaluate()"),
            " is a polymorphic function that number objects override to compute whatever they like. ",
            React.createElement("code", null, "dependencies"),
            " and",
            " ",
            React.createElement("code", null, "dependants"),
            " represent the objects that are directly connected as inputs and outputs."),
        React.createElement(CodeSyntax_1.CodeSnippet, null, Snippets_1.NumberSourceSnippet),
        React.createElement("p", null,
            "Another class, called ",
            React.createElement("code", null, "NumberInput"),
            ", is used to connect to any number object and get its value, or some default value if nothing is connected."),
        React.createElement(CodeSyntax_1.CodeSnippet, null, Snippets_1.NumberInputSnippet),
        React.createElement("p", null, "Using both of these classes, the 'Add' number object can be now implemented like this:"),
        React.createElement(CodeSyntax_1.CodeSnippet, null, Snippets_1.AddObjectSnippet),
        React.createElement(Section_1.SubSection, null,
            React.createElement("h4", null,
                React.createElement("code", null, "State"),
                " and ",
                React.createElement("code", null, "Stateful")),
            React.createElement("p", null,
                "The ",
                React.createElement("code", null, "state"),
                " parameter is used to record the current context, and represents a path in the state tree. It can be used to get the (relative) current time, and is needed by stateful number sources (which live inside sound objects) to retrieve the correct stateful information."),
            React.createElement("p", null,
                "Below is the ",
                React.createElement("code", null, "State"),
                " class, which is the base class of every type of state. It simply stores a pointer to its parent state, and a pointer to the",
                " ",
                React.createElement("code", null, "Stateful"),
                "object that owns this state. A polymorphic",
                " ",
                React.createElement("code", null, "reset()"),
                " function is used to restore states to their original condition. Derived ",
                React.createElement("code", null, "State"),
                " types are used to hold whatever time-sensitive information that ",
                React.createElement("code", null, "Stateful"),
                " objects need to store. Rather than storing stateful data through instance members,",
                " ",
                React.createElement("code", null, "Stateful"),
                " objects will use many instances of a custom",
                " ",
                React.createElement("code", null, "State"),
                " type."),
            React.createElement(CodeSyntax_1.CodeSnippet, null, Snippets_1.StateSnippet),
            React.createElement("p", null,
                "And here is the ",
                React.createElement("code", null, "Stateful"),
                " base class, which represents any type that stores stateful information in some collection of ",
                React.createElement("code", null, "State"),
                " objects. The details of how this is done varies by sub-class. For example,",
                " ",
                React.createElement("code", null, "SoundSource"),
                ", ",
                React.createElement("code", null, "SingleInput"),
                " and ",
                React.createElement("code", null, "MultiInput"),
                " ",
                "all store states slightly differently, but the ",
                React.createElement("code", null, "Stateful"),
                " class is common interface shared by all, which makes sorting out dependencies much simpler."),
            React.createElement(CodeSyntax_1.CodeSnippet, null, Snippets_1.StatefulSnippet)),
        React.createElement(Section_1.SubSection, null,
            React.createElement("h4", null,
                "The ",
                React.createElement("code", null, "SoundSource"),
                " Base Class"),
            React.createElement("p", null,
                "Every type of sound object is represented by a basic ",
                React.createElement("code", null, "SoundSource"),
                " ",
                "base class. Since every sound object needs to manage stateful information,",
                " ",
                React.createElement("code", null, "SoundSource"),
                " derives from ",
                React.createElement("code", null, "Stateful"),
                ". The",
                " ",
                React.createElement("code", null, "getNextChunk"),
                " method is used to fetch up-to-date snippets of sound information from the sound object, and by calling this method rapidly and regularly, a stream is created which contains real-time audio information."),
            React.createElement(CodeSyntax_1.CodeSnippet, null, Snippets_1.SoundSourceSnippet),
            React.createElement("p", null,
                "While the ",
                React.createElement("code", null, "SoundSource"),
                " class is simple enough to be used generically by any kind of sound input, it doesn't concern itself with how it stores states or even what kind of state it works with. This is where",
                " ",
                React.createElement("code", null, "SoundSourceBase"),
                " comes in. ",
                React.createElement("code", null, "SoundSourceBase"),
                " exists to automatically manage creating, updating, and retrieving states of any type. This class exists for the convenience and safety of not having to do this tedious work for each new sound object type. The class overrides",
                " ",
                React.createElement("code", null, "SoundSource::getNextChunk()"),
                ", which provides only weakly-typed state information, and retrieves its own, strongly-typed internal state, which is provided to the new ",
                React.createElement("code", null, "renderChunk()"),
                ", which, in derived sound object classes, does the actual work of producing sound."),
            React.createElement(CodeSyntax_1.CodeSnippet, null, Snippets_1.SoundSourceBaseSnippet)),
        React.createElement(Section_1.SubSection, null,
            React.createElement("h4", null, "Concrete Example"),
            React.createElement("p", null,
                "All the above code, and much more code that isn't being shown, exist to make implementing new sound object far simpler and less error-prone than it otherwise would be. In this example, the ",
                React.createElement("code", null, "Audio"),
                " class is implemented, which is a sound object that simply loads a sound from a file and produces this sound as its output. To make do this, only two things are needed. One needs to define what information it stores as part of its state, which is done here in the",
                " ",
                React.createElement("code", null, "AudioState"),
                " class. In this case, the only state that's needed is an index into where in the audio file we're currently listening from, which shall be called ",
                React.createElement("code", null, "pos"),
                "."),
            React.createElement(CodeSyntax_1.CodeSnippet, null, Snippets_1.AudioStateSnippet),
            React.createElement("p", null,
                "Finally, one needs to define the ",
                React.createElement("code", null, "Audio"),
                " class itself, which derives from ",
                React.createElement("code", null, "SoundSourceBase<AudioState>"),
                ", so that all stateful information and dependencies and so on are perfectly and implicitly managed. The",
                " ",
                React.createElement("code", null, "SoundSourceBase<AudioState>::renderChunk()"),
                " method is overridden to do the actual work of playing the sound. The implementation isn't shown here, since it's mostly ",
                React.createElement("code", null, "for"),
                "-loops and and sample frequency calculations and audio channel checks, but all it does is copy the current part of the audio clip into the current ",
                React.createElement("code", null, "SoundChunk"),
                " of the stream, using",
                " ",
                React.createElement("code", null, "state.pos"),
                " for book-keeping. This audio clip itself is stored in the",
                " ",
                React.createElement("code", null, "soundbuffer"),
                " member. Note that this piece of sound information will always be the same, no matter who's listening to this ",
                React.createElement("code", null, "Audio"),
                " object, and therefore, it is not stored in the ",
                React.createElement("code", null, "AudioState"),
                " type. As an extra, this class also defines and exposes a ",
                React.createElement("code", null, "current_time"),
                " member, which is a special kind of number source that is associated with the state of the ",
                React.createElement("code", null, "Audio"),
                " object. This number source can be used to query the (subjective) current time of the ",
                React.createElement("code", null, "Audio"),
                " object. As you can see, this work, which is complicated and delicate at heart, is handled well by templates and inheritance, and the code needed to implement new and interesting features is minimal."),
            React.createElement(CodeSyntax_1.CodeSnippet, null, Snippets_1.AudioSnippet))),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Full Source Code") },
        React.createElement("p", null,
            "The Flosion source code is stored on github, and can be found",
            " ",
            React.createElement(Link_1.Link, { dst: "https://github.com/timstr/Flosion" }, "here"),
            "."))));


/***/ }),

/***/ "./src/components/Flosion/Snippets.ts":
/*!********************************************!*\
  !*** ./src/components/Flosion/Snippets.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberSourceSnippet = `struct NumberSource {
    virtual float evaluate(const State* state) = 0;

private:
    Stateful* const parent;
    std::vector<Stateful*> dependencies;
    std::vector<Stateful*> dependants;
};`;
exports.NumberInputSnippet = `struct NumberInput {

    void setSource(NumberSource* _source);

    float getValue(const State* state, float default_value = 0) const;

private:
    NumberSource* source;
};`;
exports.AddObjectSnippet = `struct Add {
    float evaluate(const State* state) override {
        return input1.getValue(state) + input2.getValue(state);
    }

    NumberInput input1, input2;
};`;
exports.StatefulSnippet = `struct Stateful {
    virtual ~Stateful();

    virtual double getTimeSpeed(const State* state_chain) const;

    uint32_t getTime(const State* state_chain) const;

    virtual std::size_t numStates() const = 0;

    std::vector<Stateful*> dependencies;
    std::vector<Stateful*> dependants;
};`;
exports.StateSnippet = `struct State {
    State(const State* _parent, const Stateful* _owner);
    virtual ~State();

    virtual void reset() = 0;

private:

    const State* const parent;
    const Stateful* const owner;
};`;
exports.SoundSourceSnippet = `struct SoundSource : Stateful {

    virtual void getNextChunk(SoundChunk& chunk, const State* dependant_state, const Stateful* dst) = 0;

protected:
    std::vector<SoundInput*> destinations;
};`;
exports.SoundSourceBaseSnippet = `template <class StateType>
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
exports.AudioStateSnippet = `struct AudioState : State {

    void reset() override {
        pos = 0;
    }

    uint64_t pos;
};`;
exports.AudioSnippet = `struct Audio : SoundSourceBase<AudioState> {

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


/***/ }),

/***/ "./src/components/Flosion/SongGallery.tsx":
/*!************************************************!*\
  !*** ./src/components/Flosion/SongGallery.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const SoundCloudPlayer_1 = __webpack_require__(/*! ../Common/SoundCloudPlayer */ "./src/components/Common/SoundCloudPlayer.tsx");
const Link_1 = __webpack_require__(/*! ../Common/Link */ "./src/components/Common/Link.tsx");
const PlayList = [
    {
        id: "362396984",
        info: () => (React.createElement(React.Fragment, null,
            "This piece was created using the",
            " ",
            React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Phase_vocoder" }, "Phase Vocoder"),
            " object. The original sound is a 5-second exerpt from \"Black Sands\" by Bonobo, which has been stretched in time to nearly 15 minutes, while preserving frequencies.")),
    },
    { id: "352281611" },
    { id: "352281068" },
    { id: "275723029" },
    {
        id: "317720529",
        info: () => (React.createElement(React.Fragment, null,
            "This piece demonstrates the use of the Resampler object, which performs",
            " ",
            React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Sample-rate_conversion" }, "sample-rate conversion"),
            " ",
            "to change the speed and frequency of an audio stream. The Resampler object exposes a \"speed\" number input, which in this example, is being changed by a simpler slider control.")),
    },
    {
        id: "293278142",
        info: () => (React.createElement(React.Fragment, null,
            "Here, the FeedBack object was used, which was an experimental attempt to introduce a closed loop into the audio rendering network. This can be used to allow methods like",
            " ",
            React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Karplus%E2%80%93Strong_string_synthesis" }, "Karplus-Strong synthesis"),
            ", and other effects like echoes and reverberations, as heard here. The original song is \"Sprout and the Bean\" by Joanna Newsom.")),
    },
    {
        id: "275870851",
        info: () => (React.createElement(React.Fragment, null,
            "To see a screenshot from the recording of this song, click",
            " ",
            React.createElement(Link_1.Link, { dst: "img/flosion/simplesong.png" }, "here"))),
    },
    {
        id: "275870658",
        info: () => (React.createElement(React.Fragment, null,
            "To see a screenshot from the recording of this song, click",
            " ",
            React.createElement(Link_1.Link, { dst: "img/flosion/simplesong.png" }, "here"))),
    },
    {
        id: "271523671",
        info: () => (React.createElement(React.Fragment, null,
            "Aptly named, this song demonstrates",
            " ",
            React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Frequency_modulation_synthesis" }, "frequency modulation synthesis"),
            ". In FM synthesis, the frequency of a waveform being played is modulated at a speed comparable to that of the waveform's original frequency. This method can achieve a variety of glassy, metallic and ceramic sounds by changing the waveform and frequencies involved. The creation of this sound involved only a Sampler object and a NoteGen object, plus a variety of number objects to compute the waveforms and modulating functions.")),
    },
    {
        id: "315647927",
        info: () => (React.createElement(React.Fragment, null,
            "Here, a NoteGen object is used in conjunction with a hand-drawn waveform to implement a",
            " ",
            React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Wavetable_synthesis" }, "wavetable synthesizer."),
            ". The timbre of the sound changing is due to the waveform being redrawn, freehandedly, at runtime, by the user. Hand-drawn waveforms turn out to be a very effective way of introducing unique timbres and harmonics. In most off-the-shelf synthesizers, the waveform is typically selected from an immutable list of predefined shapes, but in Flosion, there is no such restriction.")),
    },
    {
        id: "267075861",
        info: () => (React.createElement(React.Fragment, null,
            "This piece was also made with a hand-drawn wavetable synthesizer. The output of this single-wave synthesizer is then passed to an Ensemble object, which samples its input many times in parallel while providing a random distribution of similar frequencies, and mixes the resulting streams into a single output stream. This adds a tremendous amount of character and spatial immersion to the synthesizer. The resulting sound stream is then passed through a Filter object which applies a band-pass filter. At the start of every note, the filter permits most frequencies through, before descending quickly to allow only bass frequencies. This changes the otherwise rather static sound into something resembling a plucked or struck instrument. In other synthesizers, this is commonly achieved by customizing something called the",
            " ",
            React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Synthesizer#Attack_Decay_Sustain_Release_(ADSR)_envelope" }, "Attack Decay Sustain Release envelope"),
            " ",
            "and a filter which is built in to the synth. In Flosion, this is instead achieved by defining arbitrary functions and wiring them together with Filter objects.")),
    },
];
exports.SongGallery = () => (React.createElement(React.Fragment, null,
    React.createElement("h2", null, "Songs Made using Flosion"),
    React.createElement("div", { className: "songlist" }, PlayList.map(song => (React.createElement("div", { className: "songbox", key: song.id },
        React.createElement(SoundCloudPlayer_1.SoundCloudPlayer, { trackid: song.id, width: 500, height: 200 }),
        song.info !== undefined ? (React.createElement("p", null, typeof song.info === "string" ? song.info : song.info())) : null)))),
    React.createElement("div", null,
        "More songs at",
        " ",
        React.createElement(Link_1.Link, { dst: "https://soundcloud.com/timstraubinger" }, "soundcloud.com/timstraubinger"))));


/***/ }),

/***/ "./src/components/Fractals/AboutFractals.tsx":
/*!***************************************************!*\
  !*** ./src/components/Fractals/AboutFractals.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Section_1 = __webpack_require__(/*! ../Common/Section */ "./src/components/Common/Section.tsx");
const ImageIcon_1 = __webpack_require__(/*! ../Common/ImageIcon */ "./src/components/Common/ImageIcon.tsx");
const Link_1 = __webpack_require__(/*! ../Common/Link */ "./src/components/Common/Link.tsx");
const YouTubePlayer_1 = __webpack_require__(/*! ../Common/YouTubePlayer */ "./src/components/Common/YouTubePlayer.tsx");
const CoolGifs_1 = __webpack_require__(/*! ../CoolGifs */ "./src/components/CoolGifs.tsx");
const FractalImages = (props) => (React.createElement("div", null, props.names.map(str => (React.createElement(ImageIcon_1.ImageIcon, { image: "fractals/" + str, key: str })))));
exports.AboutFractals = (props) => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "About my fractals"),
    React.createElement("p", null,
        "More images are available in the ",
        React.createElement("button", { onClick: props.gotoGallery }, "gallery")),
    React.createElement(Section_1.Section, { header: React.createElement(React.Fragment, null,
            React.createElement("h2", null, "How They're Made"),
            React.createElement("p", null,
                "The fractals shown here were rendered by an evolving lineage of various programs that I've refined and re-implemented over the course of many years. My favourite of these renderers is shown here, which includes a gradient editor and lots of customizable sliders and options that determine the fractal algorithm being used. The fading effect when zooming and rerendering is due to the pixels being rendered in a randomized order. This renderer is multi-threaded and uses ",
                React.createElement(Link_1.Link, { dst: "https://www.libsdl.org/" }, "SDL"),
                ".")) },
        React.createElement("h4", null, "Fractals in Action"),
        React.createElement(YouTubePlayer_1.YouTubePlayer, { ytid: "u90snpqoBxA", width: 600, height: 450 }),
        React.createElement("p", null, "A fractal that was saved during this screen recording is available below."),
        React.createElement(ImageIcon_1.ImageIcon, { image: "fractals/examplemandelbox" }),
        React.createElement(ImageIcon_1.ImageIcon, { image: "fractals/fractalui" })),
    React.createElement(Section_1.Section, { header: React.createElement(React.Fragment, null,
            React.createElement("h2", null, "2D Fractals (in Colour)"),
            React.createElement("p", null,
                "The fractals here are various hybrids of",
                " ",
                React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Mandelbrot_set" }, "Mandelbrot"),
                " ",
                "and ",
                React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Mandelbox" }, "mandelbox"),
                " ",
                "fractals, with a variety of other transformations thrown into the fractal algorithm. To produce these, a simple function is defined that maps points in 2D space to other points. For every point in the image, this function is applied iteratively, until either its value grows too large or some maximum number of iterations is reached (it can go on infinitely, for some points). The number of iterations is then used to choose a colour from gradient. While the exact choice of transformations and colours allows for an enormous amount of customizability, the results are often very unpredictable.")) },
        React.createElement(FractalImages, { names: [
                "particleaccelerator",
                "tree",
                "berryshake",
                "rose",
                "eye",
                "toroidalvortex",
            ] })),
    React.createElement(Section_1.Section, { header: React.createElement(React.Fragment, null,
            React.createElement("h2", null, "2D Fractals (With Texture)"),
            React.createElement("p", null, "For these images, the usual escape-time Mandelbrot rendering algorithm was used to create a local estimate of curvature. This curvate value was then used in addition to the escape time to perform colour computations, simple shading, and texture mapping. Two of the fractals here are textured using the following image of seaweed at low tide."),
            React.createElement(ImageIcon_1.ImageIcon, { image: "fractals/seaweed" })) },
        React.createElement(FractalImages, { names: ["algae", "cauliflower", "oilfilm", "saturn"] })),
    React.createElement(Section_1.Section, { header: React.createElement(React.Fragment, null,
            React.createElement("h2", null, "3D Fractals"),
            React.createElement("p", null,
                "Here, I implemented a CPU-based",
                " ",
                React.createElement(Link_1.Link, { dst: "https://en.wikipedia.org/wiki/Ray_tracing_(graphics)" }, "ray-tracer"),
                " ",
                "in C++, which simulates paths of light through space as they collide with the computed fractal geometry. For 3D fractals, whose shape is complicated and chaotic, these light paths need to take lots of very small steps to avoid skipping right through parts of the fractal. These small step sizes make this kind of ray tracing computationally expensive, especially when done many times per pixel, for a million pixels, just for a single image. Multi-threading can reduce the time significantly, though the rendering time of these fractals ranged from 2 minutes to 30 minutes.")) },
        React.createElement(FractalImages, { names: ["mandelbox4", "mandelbox3", "mandelbox1", "mandelbox2"] }),
        React.createElement(Section_1.SubSection, null,
            React.createElement("p", null, "I've also used the same ray-tracing algorithm to render other things, like voxel clouds and octrees."),
            React.createElement(FractalImages, { names: ["cubes1", "cubes2", "octree", "voxelplanet"] }))),
    React.createElement(Section_1.Section, { header: React.createElement(React.Fragment, null,
            React.createElement("h2", null, "3D Fractals (GLSL)"),
            React.createElement("p", null, "These fractals were implemented using a similar ray tracing algorithm to that described above, though instead of running on the CPU, these ones were implemented in GLSL and ran on the GPU. The lighting is done using the Blinn-Phong shading model, for which a local estimate of curvate was computed to generate a surface normal."),
            React.createElement("p", null, "Note: while this renderer ran significantly faster than the CPU-based ray-tracer, the FPS counter in the top-left corner is rounded up. In actuality, the speed was about 5 to 10 seconds per frame at full-screen.")) },
        React.createElement(FractalImages, { names: ["glbox1", "glbox2"] })),
    React.createElement(Section_1.Section, { header: React.createElement("h2", null, "Animated") },
        React.createElement(CoolGifs_1.CoolGifs, null))));


/***/ }),

/***/ "./src/components/Fractals/FractalGallery.tsx":
/*!****************************************************!*\
  !*** ./src/components/Fractals/FractalGallery.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ImageIcon_1 = __webpack_require__(/*! ../Common/ImageIcon */ "./src/components/Common/ImageIcon.tsx");
const Link_1 = __webpack_require__(/*! ../Common/Link */ "./src/components/Common/Link.tsx");
/**
 * TODO:
 *  - explanation
 *  - organize by topic
 *  - talk about software used
 *  - screenshots
 *  - include gifs
 */
const Pictures = [
    "algae",
    "alveoli",
    "berryshake",
    "box",
    "buddha",
    "cauliflower",
    "clockwork",
    "contrail",
    "cubes1",
    "cubes2",
    "eye",
    "flyingmountains",
    "gasbox",
    "glbox1",
    "glbox2",
    "greensponge",
    "hydra",
    "ironsprout",
    "mandelbox1",
    "mandelbox2",
    "mandelbox3",
    "mandelbox4",
    "map",
    "mau5",
    "octree",
    "oilfilm",
    "particleaccelerator",
    "rose",
    "sand",
    "saturn",
    "skullraa",
    "spongeheirarchy",
    "teddytoast",
    "toroidalvortex",
    "tree",
    "voxelplanet",
];
exports.FractalGallery = () => (React.createElement(React.Fragment, null,
    React.createElement("div", { className: "fractals" }, Pictures.map(img => (React.createElement(ImageIcon_1.ImageIcon, { key: img, image: "fractals/" + img })))),
    React.createElement("div", null,
        "More images at",
        " ",
        React.createElement(Link_1.Link, { dst: "https://timstraubinger.tumblr.com/" }, "timstraubinger.tumblr.com/"))));


/***/ }),

/***/ "./src/components/Fractals/Fractals.tsx":
/*!**********************************************!*\
  !*** ./src/components/Fractals/Fractals.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const TabMenu_1 = __webpack_require__(/*! ../Common/TabMenu */ "./src/components/Common/TabMenu.tsx");
const Color_1 = __webpack_require__(/*! ../../interfaces/Color */ "./src/interfaces/Color.ts");
const AboutFractals_1 = __webpack_require__(/*! ./AboutFractals */ "./src/components/Fractals/AboutFractals.tsx");
const FractalGallery_1 = __webpack_require__(/*! ./FractalGallery */ "./src/components/Fractals/FractalGallery.tsx");
exports.Fractals = () => (React.createElement(TabMenu_1.TabMenu, { contentColor: new Color_1.Color("#dddddd"), backgroundColor: new Color_1.Color("#FFFFFF") }, gotoTab => [
    {
        title: "About",
        render: () => React.createElement(AboutFractals_1.AboutFractals, { gotoGallery: () => gotoTab("Gallery") }),
    },
    {
        title: "Gallery",
        render: () => React.createElement(FractalGallery_1.FractalGallery, null),
    },
]));


/***/ }),

/***/ "./src/components/Main.tsx":
/*!*********************************!*\
  !*** ./src/components/Main.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Color_1 = __webpack_require__(/*! ../interfaces/Color */ "./src/interfaces/Color.ts");
const Flosion_1 = __webpack_require__(/*! ./Flosion/Flosion */ "./src/components/Flosion/Flosion.tsx");
const RigidBodyDynamics_1 = __webpack_require__(/*! ./RigidBodyDynamics/RigidBodyDynamics */ "./src/components/RigidBodyDynamics/RigidBodyDynamics.tsx");
const CellularAutomata_1 = __webpack_require__(/*! ./CellularAutomata/CellularAutomata */ "./src/components/CellularAutomata/CellularAutomata.tsx");
const OtherProjects_1 = __webpack_require__(/*! ./OtherProjects/OtherProjects */ "./src/components/OtherProjects/OtherProjects.tsx");
const TabMenu_1 = __webpack_require__(/*! ./Common/TabMenu */ "./src/components/Common/TabMenu.tsx");
const Fractals_1 = __webpack_require__(/*! ./Fractals/Fractals */ "./src/components/Fractals/Fractals.tsx");
const AboutMe_1 = __webpack_require__(/*! ./AboutMe/AboutMe */ "./src/components/AboutMe/AboutMe.tsx");
exports.Main = () => (React.createElement(React.Fragment, null,
    React.createElement("div", { className: "backdrop" }),
    React.createElement("div", { className: "maincontainer" },
        React.createElement("div", { className: "mainbody" },
            React.createElement("h1", { className: "mainheader" }, "Tim's Portfolio"),
            React.createElement(TabMenu_1.TabMenu, { contentColor: new Color_1.Color("#ffffff"), backgroundColor: new Color_1.Color("#626289") }, () => [
                {
                    title: "About Me",
                    render: () => React.createElement(AboutMe_1.AboutMe, null),
                },
                {
                    title: "Flosion",
                    render: () => React.createElement(Flosion_1.Flosion, null),
                },
                {
                    title: "Fractals",
                    render: () => React.createElement(Fractals_1.Fractals, null),
                },
                {
                    title: "Rigid Body Dynamics",
                    render: () => React.createElement(RigidBodyDynamics_1.RigidBodyDynamics, null),
                },
                {
                    title: "Cellular Automata",
                    render: () => React.createElement(CellularAutomata_1.CellularAutomata, null),
                },
                {
                    title: "Other Projects",
                    render: () => React.createElement(OtherProjects_1.OtherProjects, null),
                },
            ])))));


/***/ }),

/***/ "./src/components/OtherProjects/GibberishGenerators.tsx":
/*!**************************************************************!*\
  !*** ./src/components/OtherProjects/GibberishGenerators.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
// TODO: explain, include samples
exports.GibberishGenerators = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "Gibberish generators"),
    "Coming soon"));


/***/ }),

/***/ "./src/components/OtherProjects/OtherProjects.tsx":
/*!********************************************************!*\
  !*** ./src/components/OtherProjects/OtherProjects.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const TabMenu_1 = __webpack_require__(/*! ../Common/TabMenu */ "./src/components/Common/TabMenu.tsx");
const Color_1 = __webpack_require__(/*! ../../interfaces/Color */ "./src/interfaces/Color.ts");
const TimsGUI_1 = __webpack_require__(/*! ./TimsGUI */ "./src/components/OtherProjects/TimsGUI.tsx");
const GibberishGenerators_1 = __webpack_require__(/*! ./GibberishGenerators */ "./src/components/OtherProjects/GibberishGenerators.tsx");
const RandomThings_1 = __webpack_require__(/*! ./RandomThings */ "./src/components/OtherProjects/RandomThings.tsx");
const PlatformerGame_1 = __webpack_require__(/*! ./PlatformerGame */ "./src/components/OtherProjects/PlatformerGame.tsx");
exports.OtherProjects = () => (React.createElement(TabMenu_1.TabMenu, { contentColor: new Color_1.Color("#dddddd"), backgroundColor: new Color_1.Color("#FFFFFF") }, () => [
    {
        title: "Tim's GUI",
        render: () => React.createElement(TimsGUI_1.TimsGUI, null),
    },
    {
        title: "Platformer Game",
        render: () => React.createElement(PlatformerGame_1.PlatformerGame, null),
    },
    {
        title: "Gibberish Generators",
        render: () => React.createElement(GibberishGenerators_1.GibberishGenerators, null),
    },
    {
        title: "Random Things",
        render: () => React.createElement(RandomThings_1.RandomThings, null),
    },
]));


/***/ }),

/***/ "./src/components/OtherProjects/PlatformerGame.tsx":
/*!*********************************************************!*\
  !*** ./src/components/OtherProjects/PlatformerGame.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
/**
 * TODO:
 *  - brief history, motivation
 *  - design goals (rigid body physics, FSA creature AI)
 *  - implementation details
 *  - screenshots, videos
 *  - github link
 */
exports.PlatformerGame = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "Platformer Game"),
    "Coming soon"));


/***/ }),

/***/ "./src/components/OtherProjects/RandomThings.tsx":
/*!*******************************************************!*\
  !*** ./src/components/OtherProjects/RandomThings.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
// TODO: screenshots / videos of random fun things with some explanation
exports.RandomThings = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "Random things"),
    "Coming soon"));


/***/ }),

/***/ "./src/components/OtherProjects/TimsGUI.tsx":
/*!**************************************************!*\
  !*** ./src/components/OtherProjects/TimsGUI.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ImageIcon_1 = __webpack_require__(/*! ../Common/ImageIcon */ "./src/components/Common/ImageIcon.tsx");
/**
 * TODO:
 *  - explanation, design overview
 *  - brief history
 *  - inspiration from HTML / CSS
 *  - github link
 */
exports.TimsGUI = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "Tim's GUI"),
    React.createElement("h4", null, "Coming soon"),
    React.createElement("p", null, "The first image is Wikipedia's article on Confucius, as viewed in Google Chrome. The right image is my recreation of the article using my Tim's GUI library, which uses a similar box model and flow algorithm to HTML and CSS. Spot the difference!"),
    React.createElement(ImageIcon_1.ImageIcon, { image: "confuciuswikipedia" }),
    React.createElement(ImageIcon_1.ImageIcon, { image: "confuciustimsgui" })));


/***/ }),

/***/ "./src/components/RigidBodyDynamics/RigidBodyDynamics.tsx":
/*!****************************************************************!*\
  !*** ./src/components/RigidBodyDynamics/RigidBodyDynamics.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const YouTubePlayer_1 = __webpack_require__(/*! ../Common/YouTubePlayer */ "./src/components/Common/YouTubePlayer.tsx");
/**
 * TODO:
 *  - explanation, organize into sections
 *  - cite papers
 *  - platformer game
 *  - screenshots
 *  - videos
 *  - implementation details
 *  - github link
 */
exports.RigidBodyDynamics = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "Rigid Body Dynamics"),
    React.createElement("h4", null, "Coming soon"),
    React.createElement(YouTubePlayer_1.YouTubePlayer, { ytid: "EKUq4lLoQlI", width: 686, height: 480 })));


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
const Main_1 = __webpack_require__(/*! ./components/Main */ "./src/components/Main.tsx");
ReactDom.render(React.createElement(Main_1.Main, null), document.getElementById("main"));


/***/ }),

/***/ "./src/interfaces/Color.ts":
/*!*********************************!*\
  !*** ./src/interfaces/Color.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(x1, x2, x3, x4) {
        this._r = 0;
        this._g = 0;
        this._b = 0;
        this._a = 1;
        if (typeof x1 === "string") {
            this.parseHexString(x1);
        }
        else if (typeof x1 === "number") {
            this._r = x1;
            this._g = x2;
            this._b = x3;
            this._a = x4 === undefined ? 1 : x4;
        }
    }
    get red() {
        return this._r;
    }
    get green() {
        return this._g;
    }
    get blue() {
        return this._b;
    }
    get alpha() {
        return this._a;
    }
    set red(val) {
        this._r = Math.min(Math.max(val, 0), 1);
    }
    set green(val) {
        this._g = Math.min(Math.max(val, 0), 1);
    }
    set blue(val) {
        this._b = Math.min(Math.max(val, 0), 1);
    }
    set alpha(val) {
        this._a = Math.min(Math.max(val, 0), 1);
    }
    toHexString() {
        return ("#" +
            this.toHexByte(this._r) +
            this.toHexByte(this._g) +
            this.toHexByte(this._b) +
            this.toHexByte(this._a));
    }
    clone() {
        return new Color(this._r, this._g, this._b, this._a);
    }
    parseHexString(str) {
        const regex = /^#[0-9a-fA-F]*$/;
        if (regex.test(str)) {
            if (str.length === 4) {
                // #RGB
                this._r = parseInt(str.slice(1, 2), 16) / 15;
                this._g = parseInt(str.slice(2, 3), 16) / 15;
                this._b = parseInt(str.slice(3, 4), 16) / 15;
                this._a = 1;
                return;
            }
            else if (str.length === 5) {
                // #RGBA
                this._r = parseInt(str.slice(1, 2), 16) / 15;
                this._g = parseInt(str.slice(2, 3), 16) / 15;
                this._b = parseInt(str.slice(3, 4), 16) / 15;
                this._a = parseInt(str.slice(4, 5), 16) / 15;
                return;
            }
            if (str.length === 7) {
                // #RRGGBB
                this._r = parseInt(str.slice(1, 3), 16) / 255;
                this._g = parseInt(str.slice(3, 5), 16) / 255;
                this._b = parseInt(str.slice(5, 7), 16) / 255;
                this._a = 1;
                return;
            }
            else if (str.length === 9) {
                // #RRGGBBAA
                this._r = parseInt(str.slice(1, 3), 16) / 255;
                this._g = parseInt(str.slice(3, 5), 16) / 255;
                this._b = parseInt(str.slice(5, 7), 16) / 255;
                this._a = parseInt(str.slice(7, 9), 16) / 255;
                return;
            }
        }
        throw Error("Invalid hexadecimal color string");
    }
    toHexByte(val) {
        const res = Math.min(Math.max(Math.round(val * 255), 0), 255).toString(16);
        if (res.length == 1)
            return "0" + res;
        return res;
    }
}
exports.Color = Color;
// linearly mixes all components (included alpha) according to:
// outcolor = color1 * (1 - ratio) + color2 * ratio
function linearMix(color1, color2, ratio) {
    const r = ratio === undefined ? 0.5 : ratio;
    const i = 1 - r;
    return new Color(color1.red * i + color2.red * r, color1.green * i + color2.green * r, color1.blue * i + color2.blue * r, color1.alpha * i + color2.alpha * r);
}
exports.linearMix = linearMix;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
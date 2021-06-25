import * as React from "react";
import { BigImage } from "../../components/BigImage";
import { ImageIcon } from "../../components/ImageIcon";
import { Link } from "../../components/Link";
import { Section, SubSection } from "../../components/Section";
import { renderPage } from "../../renderpage";

renderPage(
    ["personal", "taipan"],
    <>
        <h1>Tai Pan Server</h1>
        <BigImage name="timstaipanserver.png" />
        <p>
            Please visit{" "}
            <Link dst="https://timstaipanserver.ca">timstaipanserver.ca</Link>{" "}
            to play (if you know the password).
        </p>
        <Section header={<h2>Overview</h2>}>
            <p>
                Before the Covid-19 pandemic, my friends and I would often get
                together to play{" "}
                <Link dst="https://en.wikipedia.org/wiki/Tichu">Ti Chu</Link>,
                or Tai Pan, which is my favourite card game that I've ever
                played. When the pandemic came, we suddenly had no way to play
                anymore. We had heard of various platforms for playing card
                games online, but they seemed expensive or unsatisfactory.
            </p>
            <p>
                So, drawing upon my experience in Full-Stack Web Development, I
                created a web-app from scratch so we could keep playing cards.
                The web-app lives at{" "}
                <Link dst="https://timstaipanserver.ca">
                    timstaipanserver.ca
                </Link>
                , but is password-protected.
            </p>
            <p>
                <ImageIcon image="taipan1" />
                <ImageIcon image="taipan2" />
            </p>
            <p>
                Both the front-end and back-end are written TypeScript. The
                front-end uses React for rendering the user interface, and the
                back-end runs on Node. The two ends communicate using websockets
                for maximum interactivity. The server is hosted using Amazon Web
                Services and HTTPS certification is kindly provided by{" "}
                <Link dst="https://letsencrypt.org/">Let's Encrypt</Link>.
            </p>
            <p>
                The full source code is available on{" "}
                <Link dst="https://github.com/timstr/taipan-webapp">
                    GitHub
                </Link>
                . You are welcome to fork the project and make your own card
                games.
            </p>
            <SubSection>
                <h4>Design Considerations</h4>
                <p>
                    The web-app has a fairly minimal understanding of the rules
                    of gameplay, and relies on the players being able to hear
                    each others' voices over a separate phone call. This was a
                    deliberate choice. Putting the players' voices first rather
                    than the controls of the UI keeps the gameplay natural and
                    social, especially when we lose several minutes at a time to
                    story-telling and jokes.
                </p>
            </SubSection>
        </Section>
    </>
);

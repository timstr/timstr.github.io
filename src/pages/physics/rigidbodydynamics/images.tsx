import * as React from "react";
import { BigImage } from "../../../components/BigImage";
import { SubSection } from "../../../components/Section";
import { renderPage } from "../../../renderpage";

renderPage(
    ["physics", "rigidbodydynamics", "images"],
    <>
        <BigImage name="physics/bods" />
        <SubSection>
            <BigImage name="physics/convexbods" />
        </SubSection>
        <SubSection>
            <BigImage name="physics/stackingboxes" />
        </SubSection>
    </>
);

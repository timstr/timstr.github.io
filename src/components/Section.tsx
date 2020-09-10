import * as React from "react";

interface SectionProps {
    header: React.ReactNode;
    children: React.ReactNode;
}

export const Section = (props: SectionProps) => (
    <div className="section">
        <div className="section-heading">
            <div className="section-contents">{props.header}</div>
        </div>
        <div className="section-body">
            <div className="section-contents">{props.children}</div>
        </div>
    </div>
);

export const SubSection = (props: { children: React.ReactNode }) => (
    <div className="subsection">{props.children}</div>
);

import * as React from "react";
import { Section } from "../Common/Section";

// TODO: pdf resume, skills, past work, personal projects, etc

export const CurriculumVitae = () => (
    <>
        <h1>Curriculum Vitae</h1>
        <Section header={<h2>Skills</h2>}>Many</Section>
        <Section header={<h2>Past Work</h2>}>A couple jobs</Section>
        <Section header={<h2>Education</h2>}>School</Section>
        <Section header={<h2>Download PDF</h2>}>Ohi</Section>
    </>
);

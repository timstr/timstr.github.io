import * as React from "react";
import { BigImage } from "../../components/BigImage";
import { Link } from "../../components/Link";
import { Section } from "../../components/Section";
import { renderPage } from "../../renderpage";

renderPage(
    ["machine_learning", "graph_merging"],
    <>
        <h1>Learning to Reduce Graphs with Differentiable Merging</h1>
        <h2>Tim Straubinger - April 2021</h2>
        <h3>
            <em>CPSC 532S Course Project</em>
        </h3>
        <BigImage name="ml/graph_merging_1.png" />
        <BigImage name="ml/graph_merging_2.png" />
        <Section
            header={
                <h3>
                    <em>Abstract</em>
                </h3>
            }
        >
            <p>
                Many neural network models have been proposed that operate
                directly on graph data structures. Existing methods are able to
                produce per-node feature embeddings for classification and
                regression and differ mainly in the methods by which they pass
                messages and gather features from node neighbourhoods. While
                learning from graph topology in this way has been explored well,
                the process of learning to modify graph topology in a
                semantically meaningful manner has received less attention. This
                work explores learnable reductions of graph topology by
                augmenting conventional graph representations and graph network
                models with the ability to merges together, while remaining
                fully-differentiable. The resulting framework is able to learn
                image segmentation using only merge operations, and is
                theoretically applicable to a large variety of problem domains
                where semantic reduction of graph data is desired.
            </p>
        </Section>
        <Section header={<h3>Read the Paper</h3>}>
            <Link dst="/static/papers/differentiable_graph_merging.pdf">
                Link to paper (.pdf - 257 KB)
            </Link>
        </Section>
    </>
);

import * as React from "react";
import { Section } from "../../components/Section";
import { renderPage } from "../../renderpage";

renderPage(
    ["personal", "recipes"],
    <>
        <h1>Recipes</h1>
        <Section
            header={
                <>
                    <h2>Pancakes</h2>
                </>
            }
        >
            <h3>What</h3>
            <ul>
                <li>2 cups flour</li>
                <li>0.5 tsp salt</li>
                <li>4 tsp baking powder</li>
                <li>2 cups milk</li>
                <li>2 eggs</li>
                <li>2 tbsp maple syrup</li>
                <li>2 tbsp molten butter</li>
                <li>0.5 tsp vanilla extract (optional)</li>
            </ul>
            <h3>How</h3>
            <ol>
                <li>Combine flour, salt, and baking powder in a large bowl.</li>
                <li>
                    Whisk together milk, eggs, maple syrup, and optional vanilla
                    extract in a medium bowl.
                </li>
                <li>
                    Pour liquid mixture into powder mixture and gently whisk
                    until smooth.
                </li>
                <li>
                    Heat a large flat pan or gridle on medium-high heat and
                    grease with butter.
                </li>
                <li>
                    When pan is hot, pour out batter in approximately 1/4 cup
                    scoops onto hot surface. Pour the batter onto the same spot
                    without moving to create nice round pancakes.
                </li>
                <li>
                    Once the surface of each pancake has produced small bubbles
                    and those bubbles begin to stay open instead of closing
                    over, flip the pancakes and fry for another minute or two.
                </li>
                <li>
                    Remove the pancakes from the pan and keep warm. Continue to
                    fry the rest of the batter using the same method.
                    Periodically add butter to the pan between batches. If the
                    pan fills with crumbs or burnt butter, very carefully wipe
                    out the pan with a paper towel and add fresh butter before
                    frying the next batch. If the pan begins to smoke, lower the
                    heat.
                </li>
                <li>
                    Serve the pancakes warm with your choice of maple syrup,
                    nutella, fresh fruit, jam, compote, cinnamon sugar, apple
                    sauce, or whatever you prefer.
                </li>
            </ol>
        </Section>
    </>
);

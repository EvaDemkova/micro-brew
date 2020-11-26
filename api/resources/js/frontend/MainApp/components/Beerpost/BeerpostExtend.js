import React, { useState } from "react";
import ListComments from "../ListComments";
import "./beerpostExtended.scss";

const BeerpostExtend = ({ data }) => {
    const {
        ingredients,
        beerpost_sections,
        abv,
        batch_volume,
        carbonation,
        gravity,
        ibu,
        ebc,
        og
    } = data;
    const [comments, setComments] = useState(data.comments);

    const displayIngredient = ingredient => {
        const result = ingredients.filter(item => item.type === ingredient);
        if (result[0].pivot.ingredient_name !== null) {
            return result.map((item, index) => (
                <p key={index}>
                    {item.pivot.ingredient_name} | {item.pivot.quantity}
                </p>
            ));
        }
        return <p>none</p>;
    };

    const displaySection = section => {
        const result = beerpost_sections.filter(
            item => item.section_name == section
        );
        return result[0].description || "NA";
    };

    return (
        <div className="extended">
            <section>
                <div className="left-menu">Statistics</div>
                <div className="content">
                    <div className="stats">
                        <ul>
                            <li>
                                <h5>ABV</h5> <p>{abv || "NA"}</p>
                            </li>
                            <li>
                                <h5>OG</h5>
                                <p>{og || "NA"}</p>
                            </li>
                            <li>
                                <h5>EBC</h5> <p>{ebc || "NA"}</p>
                            </li>
                            <li>
                                <h5>IBU</h5> <p>{ibu || "NA"}</p>
                            </li>
                            <li>
                                <h5>Carbonation</h5>{" "}
                                <p>{carbonation || "NA"}</p>
                            </li>
                            <li>
                                <h5>Gravity</h5> <p>{gravity || "NA"}</p>
                            </li>
                            <li>
                                <h5>Batch Volume</h5>{" "}
                                <p>
                                    {batch_volume ? batch_volume + " L" : "NA"}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="left-menu">Ingredients</div>
                <div className="content">
                    <div className="ingredients">
                        <div className="ingredient-item">
                            <h5>Malt</h5>
                            {displayIngredient("malt")}
                        </div>
                        <div className="ingredient-item">
                            <h5>Hops</h5>
                            {displayIngredient("hop")}
                        </div>
                        <div className="ingredient-item">
                            <h5>Yeast</h5>
                            {displayIngredient("yeast")}
                        </div>
                        <div className="ingredient-item">
                            <h5>Spices</h5>
                            {displayIngredient("spices")}
                        </div>
                        <div className="ingredient-item">
                            <h5>Honey</h5>
                            {displayIngredient("honey")}
                        </div>
                        <div className="ingredient-item">
                            <h5>Others</h5>
                            {displayIngredient("others")}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="left-menu">Brewing</div>
                <div className="content">
                    <div className="content__category">
                        <h5>Mash profile</h5>
                        <p>{displaySection("Mash Profile")}</p>
                    </div>
                    <div className="content__category">
                        <h5>Hopping profile</h5>
                        <p>{displaySection("Hopping Profile")}</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="left-menu">Fermentation</div>
                <div className="content">
                    <div className="content__category">
                        <h5>Primary ({beerpost_sections[2].duration} days)</h5>
                        <p>{displaySection("Primary Fermentation")}</p>
                    </div>
                    <div className="content__category">
                        <h5>
                            Secondary ({beerpost_sections[4].duration} days)
                        </h5>
                        <p>{displaySection("Secondary Fermentation")}</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="left-menu">Bottling</div>
                <div className="content">
                    <div className="content__category">
                        <p>{displaySection("Bottling")}</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="left-menu">Comments</div>
                <div className="content">
                    <ListComments
                        comments={comments}
                        setComments={setComments}
                        beerpost_id={data.id}
                    />
                </div>
            </section>
        </div>
    );
};

export default BeerpostExtend;

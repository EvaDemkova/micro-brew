import React from "react";
import Section from "./Section";

const Beerpost_sections = ({ beerpostSections, setBeerpostSections }) => {
    //console.log(beerpostSections)

    return (
        <div className="beerpost_sections">
            <h1>Brewing</h1>
            {beerpostSections.map((section, index) => {
                return (
                    <Section
                        key={index}
                        section={section}
                        setBeerpostSections={setBeerpostSections}
                    />
                );
            })}
        </div>
    );
};

export default Beerpost_sections;

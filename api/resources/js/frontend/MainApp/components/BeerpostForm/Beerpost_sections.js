import React from "react";
import Section from "./Section";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Beerpost_sections = ({ beerpostSections, setBeerpostSections }) => {
    //console.log(beerpostSections)

    return (
        <div className="beerpost_sections">
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

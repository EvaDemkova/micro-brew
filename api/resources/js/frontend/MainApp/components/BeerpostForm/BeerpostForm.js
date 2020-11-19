import React, { useState, useEffect } from "react";
import { MdCancel, MdEdit, MdDelete } from "react-icons/md";
import { useGlobalContext } from "../../../context.js";
import axios from "axios";
import "./BeerpostForm.scss";
import Beerpost_ingredients from "./Beerpost_ingredients";
import Beerpost_sections from "./Beerpost_sections";
import Dropzone from "./Dropzone";
import { templateIngredients, templateSections } from "./datas";
import { useDashboardContext } from "../../dashboardContext.js";

const BeerpostForm = () => {
    const { user } = useGlobalContext();
    const {
        closeBeerpostForm,
        isFormUpdating,
        BeerpostToModify
    } = useDashboardContext();
    const {
        beer_name,
        type,
        description,
        abv,
        og,
        carbonation,
        gravity,
        status,
        ebc,
        ibu,
        batch_volume,
        ingredients,
        beerpost_sections
    } = BeerpostToModify;
    console.log(BeerpostToModify);

    const [values, setValues] = useState({
        user_id: user.id,
        beer_name: "",
        type: "",
        description: "",
        abv: "",
        og: "",
        carbonation: "",
        gravity: "",
        status: "",
        ebc: "",
        ibu: "",
        batch_volume: ""
    });

    const [files, setFiles] = useState([]);
    const [beerpostIngredients, setBeerpostIngredients] = useState([]);
    const [beerpostSections, setBeerpostSections] = useState([]);

    console.log(beerpostSections);
    useEffect(() => {
        if (!isFormUpdating) {
            // we create a new post
            setBeerpostIngredients(templateIngredients);
            setBeerpostSections(templateSections);
        } else {
            // we update existing post
            setValues({
                ...values,
                beer_name: beer_name || "",
                type: type || "",
                description: description || "",
                abv: abv || "",
                og: og || "",
                carbonation: carbonation || "",
                gravity: gravity || "",
                status: status || "",
                ebc: ebc || "",
                ibu: ibu || "",
                batch_volume: batch_volume || ""
            });
            const ingredientsData = [];
            ingredients.map((ingredient, index) => {
                ingredientsData.push({
                    key: index,
                    ingredient_id: ingredient.id,
                    ingredient_name: ingredient.pivot.ingredient_name || "",
                    quantity: ingredient.pivot.quantity || ""
                });
            });
            setBeerpostIngredients(ingredientsData);

            const sectionsData = [];
            beerpost_sections.map(section => {
                sectionsData.push({
                    key: section.id,
                    section_name: section.section_name,
                    description: section.description || "",
                    duration: section.duration || "",
                    date: section.date || ""
                });
            });
            setBeerpostSections(sectionsData);
        }
    }, []);

    const handleChange = event => {
        const beerpost_info = [
                "beer_name",
                "type",
                "description",
                "abv",
                "og",
                "carbonation",
                "gravity",
                "status",
                "ebc",
                "ibu",
                "batch_volume"
            ],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== beerpost_info.indexOf(name)) {
            setValues(prev_values => {
                return {
                    ...prev_values,
                    [name]: value
                };
            });
        }
    };

    const handlePhotos = async files => {
        // console.log(files);

        const data = new FormData();
        files.forEach(file => {
            data.append("image[]", file, file.name);
        });

        await axios.get("/sanctum/csrf-cookie");
        await axios
            .post("/api/beerposts/savePhotos", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response => {
                console.log(response);
            });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        await axios.get("/sanctum/csrf-cookie");
        await axios
            .post("/api/beerposts/store", {
                values: values,
                beerpostIngredients: beerpostIngredients,
                beerpostSections: beerpostSections
            })
            .then(function(response) {
                console.log(response.config.data);
                if (response.status === 200) {
                    console.log("Beerpost saved");
                }
            })
            .catch(function(error) {
                console.log(error);
            });

        if (files.length !== 0) {
            handlePhotos(files);
        }
    };

    return (
        <form method="post" className="beerpost-form" onSubmit={handleSubmit}>
            <div className="form-heading">
                <MdDelete className="delete-icon" />
                {/* <MdEdit className="edit-icon" /> */}
                <h1>New Beer Post</h1>
                <MdCancel
                    className="cancel-icon"
                    onClick={() => closeBeerpostForm()}
                />
            </div>
            <div className="general-section">
                <div className="input-item">
                    <label htmlFor="beer_name">Beer Name:</label>
                    <input
                        type="text"
                        name="beer_name"
                        placeholder="Beer Name"
                        value={values.beer_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-item">
                    <label htmlFor="type">Beer Type:</label>
                    <input
                        type="text"
                        name="type"
                        placeholder="Beer Type"
                        value={values.type}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-item">
                    <label htmlFor="description" className="description-label">
                        Description:
                    </label>
                    <textarea
                        name="description"
                        id=""
                        cols="23"
                        rows="10"
                        value={values.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="input-item">
                    <label htmlFor="abv">ABV:</label>
                    <input
                        type="text"
                        name="abv"
                        placeholder="ABV"
                        value={values.abv}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-item">
                    <label htmlFor="og">OG:</label>
                    <input
                        type="text"
                        name="og"
                        placeholder="OG"
                        value={values.og}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-item">
                    <label htmlFor="ebc">EBC:</label>
                    <input
                        type="text"
                        name="ebc"
                        placeholder="EBC"
                        value={values.ebc}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-item">
                    <label htmlFor="ibu">IBU:</label>
                    <input
                        type="text"
                        name="ibu"
                        placeholder="IBU"
                        value={values.ibu}
                        onChange={handleChange}
                    />
                </div>
                <Dropzone files={files} setFiles={setFiles} />
                <div className="input-item">
                    <label htmlFor="gravity">Gravity:</label>
                    <input
                        type="text"
                        name="gravity"
                        placeholder="Gravity"
                        value={values.gravity}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-item">
                    <label htmlFor="carbonation">Carbonation:</label>
                    <input
                        type="text"
                        name="carbonation"
                        placeholder="Carbonation"
                        value={values.carbonation}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-item">
                    <label htmlFor="status">Status:</label>
                    <input
                        type="text"
                        name="status"
                        placeholder="Status"
                        value={values.status}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-item">
                    <label htmlFor="batch_volume">Batch Volume:</label>
                    <input
                        type="number"
                        name="batch_volume"
                        placeholder="Batch Volume"
                        value={values.batch_volume}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Beerpost_ingredients
                beerpostIngredients={beerpostIngredients}
                setBeerpostIngredients={setBeerpostIngredients}
            />
            <Beerpost_sections
                beerpostSections={beerpostSections}
                setBeerpostSections={setBeerpostSections}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default BeerpostForm;

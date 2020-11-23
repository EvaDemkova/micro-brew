import React, { useState, useEffect } from "react";
import { MdCancel, MdEdit, MdDelete } from "react-icons/md";
import { useGlobalContext } from "../../../context.js";
import axios from "axios";
import "./BeerpostForm.scss";
import Beerpost_ingredients from "./Beerpost_ingredients";
import Beerpost_sections from "./Beerpost_sections";
import SaveBtn from "../SaveBtn";
import Dropzone from "./Dropzone";
import { templateIngredients, templateSections } from "./datas";
import { useDashboardContext } from "../../dashboardContext.js";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch"
        }
    },
    width: {
        width: "650px"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    heading: {
        // textAlign: center,
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
    },
    nameType: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1em"
    },
    generalInputs: {
        height: "225px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between"
    },
    btn: {
        margin: "auto"
    },
    ingredients: {
        width: "600px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "center"
    }
}));

const BeerpostForm = () => {
    const { user, createAlert } = useGlobalContext();
    const {
        closeBeerpostForm,
        isFormUpdating,
        BeerpostToModify,
        setIsBeerListRender
    } = useDashboardContext();
    const {
        id,
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

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpand = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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

    // const handleChange = event => {
    //     const beerpost_info = [
    //             "beer_name",
    //             "type",
    //             "description",
    //             "abv",
    //             "og",
    //             "carbonation",
    //             "gravity",
    //             "status",
    //             "ebc",
    //             "ibu",
    //             "batch_volume"
    //         ],
    //         name = event.target.name,
    //         value = event.target.value;

    //     if (-1 !== beerpost_info.indexOf(name)) {
    //         setValues(prev_values => {
    //             return {
    //                 ...prev_values,
    //                 [name]: value
    //             };
    //         });
    //     }
    // };

    const handlePhotos = async files => {
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

    const deleteBeerpost = async () => {
        await axios.get("/sanctum/csrf-cookie");
        await axios
            .post(`/api/beerposts/delete/${id}`)
            .then(function(response) {
                console.log(response.config.data);
                if (response.status === 200) {
                    console.log("Beerpost deleted");
                }
            })
            .catch(function(error) {
                console.log(error);
            });
        setIsBeerListRender(true);
        closeBeerpostForm();
        createAlert("success", "This receipe has been deleted");
    };

    const handleSubmit = async e => {
        e.preventDefault();

        await axios.get("/sanctum/csrf-cookie");

        if (!isFormUpdating) {
            // we create a new beerpost
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
        } else {
            // we update existing beerpost
            await axios
                .post(`/api/beerposts/update/${id}`, {
                    values: values,
                    beerpostIngredients: beerpostIngredients,
                    beerpostSections: beerpostSections
                })
                .then(function(response) {
                    console.log(response.config.data);
                    if (response.status === 200) {
                        console.log("Beerpost updated");
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        if (files.length !== 0) {
            handlePhotos(files);
        }
        setIsBeerListRender(true);
        closeBeerpostForm();
        createAlert("success", "You new receipe was successfully added !");
    };

    return (
        <div className={classes.root}>
            <form
                method="post"
                className={classes.root}
                className="beerpost-form"
                onSubmit={handleSubmit}
            >
                <div className="form-heading">
                    {isFormUpdating && (
                        <MdDelete
                            className="delete-icon"
                            onClick={deleteBeerpost}
                        />
                    )}
                    {isFormUpdating ? (
                        <h1>Updating Beer post</h1>
                    ) : (
                        <h1>New Beer Post</h1>
                    )}
                    <MdCancel
                        className="cancel-icon"
                        onClick={() => closeBeerpostForm()}
                    />
                </div>

                <Accordion
                    className={classes.width}
                    defaultExpanded
                    onChange={handleExpand("panel1")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>
                            <h3>General information</h3>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className={classes.nameType}>
                                <TextField
                                    id="outlined-helperText"
                                    label="Beer Name"
                                    defaultValue="Default Value"
                                    variant="outlined"
                                    type="text"
                                    value={values.beer_name}
                                    onChange={e =>
                                        setValues(prev => ({
                                            ...prev,
                                            beer_name: e.target.value
                                        }))
                                    }
                                />
                                <FormControl
                                    variant="outlined"
                                    className={classes.formControl}
                                >
                                    <InputLabel htmlFor="outlined-age-native-simple">
                                        Beer Type
                                    </InputLabel>
                                    <Select
                                        native
                                        value={values.type}
                                        onChange={e =>
                                            setValues(prev => ({
                                                ...prev,
                                                type: e.target.value
                                            }))
                                        }
                                        size="small"
                                        label="Type"
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={"lager"}>Lager</option>
                                        <option value={"ale"}>Ale</option>
                                    </Select>
                                </FormControl>
                            </div>
                            <TextField
                                id="outlined-full-width"
                                label="Description"
                                style={{ margin: 0 }}
                                style={{ width: 600 }}
                                fullWidth
                                size="small"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                multiline
                                rows={3}
                                variant="outlined"
                                value={values.description}
                                onChange={e =>
                                    setValues(prev => ({
                                        ...prev,
                                        description: e.target.value
                                    }))
                                }
                            />
                            <Dropzone files={files} setFiles={setFiles} />
                            <div className={classes.generalInputs}>
                                <TextField
                                    style={{ width: 230 }}
                                    id="outlined-helperText"
                                    label="ABV"
                                    defaultValue="Default Value"
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    value={values.abv}
                                    onChange={e =>
                                        setValues(prev => ({
                                            ...prev,
                                            abv: e.target.value
                                        }))
                                    }
                                />
                                <TextField
                                    style={{ width: 230 }}
                                    id="outlined-helperText"
                                    label="OG"
                                    defaultValue="Default Value"
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    value={values.og}
                                    onChange={e =>
                                        setValues(prev => ({
                                            ...prev,
                                            og: e.target.value
                                        }))
                                    }
                                />
                                <TextField
                                    style={{ width: 230 }}
                                    id="outlined-helperText"
                                    label="EBC"
                                    defaultValue="Default Value"
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    value={values.ebc}
                                    onChange={e =>
                                        setValues(prev => ({
                                            ...prev,
                                            ebc: e.target.value
                                        }))
                                    }
                                />
                                <TextField
                                    style={{ width: 230 }}
                                    id="outlined-helperText"
                                    label="IBU"
                                    defaultValue="Default Value"
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    value={values.ibu}
                                    onChange={e =>
                                        setValues(prev => ({
                                            ...prev,
                                            ibu: e.target.value
                                        }))
                                    }
                                />
                                <TextField
                                    style={{ width: 230 }}
                                    id="outlined-helperText"
                                    label="Gravity"
                                    defaultValue="Default Value"
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    value={values.gravity}
                                    onChange={e =>
                                        setValues(prev => ({
                                            ...prev,
                                            gravity: e.target.value
                                        }))
                                    }
                                />
                                <TextField
                                    style={{ width: 230 }}
                                    id="outlined-helperText"
                                    label="Carbonation"
                                    defaultValue="Default Value"
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    value={values.carbonation}
                                    onChange={e =>
                                        setValues(prev => ({
                                            ...prev,
                                            carbonation: e.target.value
                                        }))
                                    }
                                />
                                <TextField
                                    style={{ width: 230 }}
                                    id="outlined-helperText"
                                    label="Status"
                                    defaultValue="Default Value"
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    value={values.status}
                                    onChange={e =>
                                        setValues(prev => ({
                                            ...prev,
                                            status: e.target.value
                                        }))
                                    }
                                />
                                <TextField
                                    style={{ width: 230 }}
                                    id="outlined-helperText"
                                    label="Batch Volume"
                                    defaultValue="Default Value"
                                    variant="outlined"
                                    type="number"
                                    size="small"
                                    value={values.batch_volume}
                                    onChange={e =>
                                        setValues(prev => ({
                                            ...prev,
                                            batch_volume: e.target.value
                                        }))
                                    }
                                />
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    className={classes.width}
                    expanded={expanded === "panel2"}
                    onChange={handleExpand("panel2")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>
                            <h3>Ingredients</h3>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className={classes.ingredients}>
                                <Beerpost_ingredients
                                    beerpostIngredients={beerpostIngredients}
                                    setBeerpostIngredients={
                                        setBeerpostIngredients
                                    }
                                />
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    className={classes.width}
                    expanded={expanded === "panel3"}
                    onChange={handleExpand("panel3")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>
                            <h3>Brewing Steps</h3>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Beerpost_sections
                                beerpostSections={beerpostSections}
                                setBeerpostSections={setBeerpostSections}
                            />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <SaveBtn className={classes.btn} handleSubmit={handleSubmit} />
            </form>
        </div>
    );
};

export default BeerpostForm;

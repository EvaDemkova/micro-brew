import React from "react";
import { MdLabel } from "react-icons/md";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    date: {
        margin: 0, 
        display: 'flex', 
        alignItems: 'center', 
    },

    root: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: '0.5em', 
    }
}));

const Section = ({ setBeerpostSections, section }) => {
    const { key, section_name, description, duration, date } = section;
    const classes = useStyles();

    const handleDate = (e, key) => {
        setBeerpostSections(prev =>
            prev.map(item => {
                if (item.key === key) {
                    return {
                        ...item,
                        date: e.target.value
                    };
                } else {
                    return { ...item };
                }
            })
        );
    };

    const handleDuration = (e, key) => {
        setBeerpostSections(prev =>
            prev.map(item => {
                if (item.key === key) {
                    return {
                        ...item,
                        duration: e.target.value
                    };
                } else {
                    return { ...item };
                }
            })
        );
    };

    const handleDescription = (e, key) => {
        setBeerpostSections(prev =>
            prev.map(item => {
                if (item.key === key) {
                    return {
                        ...item,
                        description: e.target.value
                    };
                } else {
                    return { ...item };
                }
            })
        );
    };

    return (
        <div className="section">
            <h4 style={{textAlign: 'center', margin: '1em'}}>{section_name}</h4>
            <div className={ classes.root}>
                {key !== 2 ? (
                    <div className={ classes.date}>
                        <label htmlFor="date">Date:</label>
                        <TextField
                            id="outlined-helperText"
                            variant="outlined"
                            type="date"
                            size='small'
                            value={date || ""}
                            onChange={e => handleDate(e, key)}
                        />
                    </div>
                ) : null}
                {key === 3 || key === 5 ? (
                    <div className={ classes.date}>
                        <label htmlFor="duration">Duration:</label>
                        <TextField
                            id="outlined-helperText"
                            label="Duration"
                            defaultValue="Default Value"
                            variant="outlined"
                            type="number"
                            size='small'
                            placeholder='Days'
                            value={duration || ""}
                            onChange={e => handleDuration(e, key)}
                        />
                    </div>
                ) : null}
            </div>
            <TextField
                id="outlined-full-width"
                label="Description"
                style={{ margin: 0 }}
                style={{ width: 600}}
                fullWidth
                size="small"
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                multiline
                rows={4}
                variant="outlined"
                value={description || ""}
                onChange={e => handleDescription(e, key)}
            />
        </div>
    );
};

export default Section;

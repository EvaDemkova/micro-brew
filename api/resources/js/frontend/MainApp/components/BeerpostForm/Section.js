import React from "react";
import { MdLabel } from "react-icons/md";

const Section = ({ setBeerpostSections, section }) => {
    const { key, section_name, description, duration, date } = section;
    console.log(section);

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
            <h2>{section_name}</h2>
            {key !== 2 ? (
                <div className="section-date">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        name="date"
                        id=""
                        value={date}
                        onChange={e => handleDate(e, key)}
                    />
                </div>
            ) : null}
            {key === 3 || key === 5 ? (
                <div className="section-duration">
                    <label htmlFor="duration">Duration:</label>
                    <input
                        type="number"
                        name="duration"
                        id=""
                        placeholder="Days"
                        value={duration}
                        onChange={e => handleDuration(e, key)}
                    />
                </div>
            ) : null}
            <label className="section-desctiprion" htmlFor="description">
                Description:{" "}
            </label>
            <textarea
                name="descripton"
                id=""
                cols="80"
                rows="8"
                value={description}
                onChange={e => handleDescription(e, key)}
            ></textarea>
        </div>
    );
};

export default Section;

import React from 'react'
import { MdLabel } from 'react-icons/md'

const Section = ({ beerpostSections, setBeerpostSections, id, name }) => {
    
    const handleDate = (e, key) => {
        setBeerpostSections((prev) =>
            prev.map((item) => {
                if (item.key === key) {
                    return {
                        ...item, 
                        date: e.target.value
                    }
                } else {
                    return {...item}
                }
            })
        )
    }

    const handleDuration = (e, key) => {
        setBeerpostSections((prev) =>
            prev.map((item) => {
                if (item.key === key) {
                    return {
                        ...item, 
                        duration: e.target.value
                    }
                } else {
                    return {...item}
                }
            })
        )
    }

    const handleDescription = (e, key) => {
        setBeerpostSections((prev) =>
            prev.map((item) => {
                if (item.key === key) {
                    return {
                        ...item, 
                        description: e.target.value
                    }
                } else {
                    return {...item}
                }
            })
        )
    }

    return (
        <div className="section">
            <h2>{name}</h2>
            {(id !== 2) ? (
                <div className="section-date">
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" id="" onChange={ (e)=> handleDate(e, id)}/>
                </div>
            ) : null}
            {(id === 3 || id === 5) ? (
                <div className="section-duration">
                    <label htmlFor="duration">Duration:</label>
                    <input type="number" name="duration" id="" placeholder="Days" onChange={ (e)=> handleDuration(e, id)}/>
                </div>
            ) : null}
            <label className="section-desctiprion"htmlFor="description">Description: </label>
            <textarea name="descripton" id="" cols="80" rows="8" onChange={(e)=> handleDescription(e, id) }></textarea>
        </div>
    )
}

export default Section

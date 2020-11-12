import React, { useState, useEffect } from 'react';
import { MdCancel, MdEdit, MdDelete } from 'react-icons/md';
import './BeerpostForm.scss';

const BeerpostForm = ({isBeerpostForm, setIsBeerpostForm}) => {

    return (
        <div>
            <form action="" method='post' className="beerpost-form">
                <div className="form-heading">
                    <MdDelete className="delete-icon"/>
                    <MdEdit className="edit-icon"/>
                    <h1>New Beer Post</h1>
                    <MdCancel className="cancel-icon" onClick={ ()=>setIsBeerpostForm(false)}/>
                </div>
                <div className="general-section">
                    <div className="input-item">
                        <label htmlFor="beer_name">Beer Name:</label>
                        <input type="text" name="beer_name" placeholder="Beer Name"/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="type">Beer Type:</label>
                        <input type="text" name="type" placeholder="Beer Type"/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="description" className="description-label">Description:</label>
                        <textarea name="description" id="" cols="23" rows="10"></textarea>
                    </div>
                    <div className="input-item">
                        <label htmlFor="abv">ABV:</label>
                        <input type="text" name="abv" placeholder="ABV"/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="og">OG:</label>
                        <input type="text" name="og" placeholder="OG"/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="ebc">EBC:</label>
                        <input type="text" name="ebc" placeholder="EBC"/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="ibu">IBU:</label>
                        <input type="text" name="ibu" placeholder="IBU"/>
                    </div>
                    <div className="image-loader"></div>
                    <div className="input-item">
                        <label htmlFor="gravity">Gravity:</label>
                        <input type="text" name="gravity" placeholder="Gravity"/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="carbonation">Carbonation:</label>
                        <input type="text" name="carbonation" placeholder="Carbonation"/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="status">Status:</label>
                        <input type="text" name="status" placeholder="Status"/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="batch_volume">Batch Volume:</label>
                        <input type="text" name="batch_volume" placeholder="Batch Volume"/>
                    </div>

                </div>














            </form>
        </div>
    )
}

export default BeerpostForm

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BeerpostForm.scss';
import Ingredient from './Ingredient';


const Beerpost_ingredients = ({ beerpostIngredients, setBeerpostIngredients }) => {
    
    // const [maltList, setMaltList] = useState([{
    //     ingredient_id: 1,
    //     ingredient_name: '',
    //     quantity: '',
    // }])

    const addIngredient = (ingredient_id) => {
        setBeerpostIngredients(beerpostIngredients => [...beerpostIngredients, {
        ingredient_id: ingredient_id,
        ingredient_name: '',
        quantity: '',
        }])
    }


    const handleQuantity = (e, index) => {
        setBeerpostIngredients(prev => (prev.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    quantity: e.target.value
                }
            } else {
                return {...item}
            }
        })))
    }

    const handleName = (e, index) => {
        setBeerpostIngredients(prev => (prev.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    ingredient_name: e.target.value
                }
            } else {
                return {...item}
            }
        })))
    }

    console.log(beerpostIngredients)   

    return (
        <>
        <Ingredient ingredient_id={1} name='Malt' handleName={handleName} handleQuantity={handleQuantity} beerpostIngredients={beerpostIngredients} addIngredient={addIngredient} />
        <Ingredient ingredient_id={2} name='Hop' handleName={handleName} handleQuantity={handleQuantity} beerpostIngredients={beerpostIngredients} addIngredient={addIngredient} />
            

        </>
    )

}

export default Beerpost_ingredients;
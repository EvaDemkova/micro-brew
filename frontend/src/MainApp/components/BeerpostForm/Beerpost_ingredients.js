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


    const handleQuantity = (e, index, ingredient_id) => {
        console.log(index, ingredient_id);
        setBeerpostIngredients(prev => (prev.map((item, i) => {
            if (i === index && ingredient_id === item.ingredient_id) {
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
            <Ingredient ingredient_id={1} name='Malt' handleName={handleName} handleQuantity={handleQuantity}
                beerpostIngredients={beerpostIngredients.filter((item) => {
                return item.ingredient_id == 1
            })} addIngredient={addIngredient} />
            
            <Ingredient ingredient_id={2} name='Hop' handleName={handleName} handleQuantity={handleQuantity} 
                beerpostIngredients={beerpostIngredients.filter((item) => {
                return item.ingredient_id == 2
            })} addIngredient={addIngredient}/>
            

        </>
    )

}

export default Beerpost_ingredients;
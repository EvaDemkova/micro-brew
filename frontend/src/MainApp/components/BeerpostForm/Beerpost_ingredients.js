import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './BeerpostForm.scss'
import Ingredient from './Ingredient'

const Beerpost_ingredients = ({
  beerpostIngredients,
  setBeerpostIngredients,
}) => {
  const addIngredient = (ingredient_id) => {
    setBeerpostIngredients((beerpostIngredients) => [
      ...beerpostIngredients,
      {
        key: new Date().getTime().toString(),
        ingredient_id: ingredient_id,
        ingredient_name: '',
        quantity: '',
      },
    ])
  }

  return (
    <>
      <Ingredient
        ingredient_id={1}
        name='Malt'
        setBeerpostIngredients={setBeerpostIngredients}
        beerpostIngredients={beerpostIngredients.filter((item) => {
          return item.ingredient_id == 1
        })}
        addIngredient={addIngredient}
      />
      <Ingredient
        ingredient_id={2}
        name='Hop'
        setBeerpostIngredients={setBeerpostIngredients}
        beerpostIngredients={beerpostIngredients.filter((item) => {
          return item.ingredient_id == 2
        })}
        addIngredient={addIngredient}
      />
      <Ingredient
        ingredient_id={3}
        name='Yeast'
        setBeerpostIngredients={setBeerpostIngredients}
        beerpostIngredients={beerpostIngredients.filter((item) => {
          return item.ingredient_id == 3
        })}
        addIngredient={addIngredient}
          />
      <Ingredient
        ingredient_id={4}
        name='Honey'
        setBeerpostIngredients={setBeerpostIngredients}
        beerpostIngredients={beerpostIngredients.filter((item) => {
          return item.ingredient_id == 4
        })}
        addIngredient={addIngredient}
          />
      <Ingredient
        ingredient_id={5}
        name='Spices'
        setBeerpostIngredients={setBeerpostIngredients}
        beerpostIngredients={beerpostIngredients.filter((item) => {
          return item.ingredient_id == 5
        })}
        addIngredient={addIngredient}
          />
      <Ingredient
        ingredient_id={6}
        name='Others'
        setBeerpostIngredients={setBeerpostIngredients}
        beerpostIngredients={beerpostIngredients.filter((item) => {
          return item.ingredient_id == 6
        })}
        addIngredient={addIngredient}
          />
    </>
  )
}

export default Beerpost_ingredients

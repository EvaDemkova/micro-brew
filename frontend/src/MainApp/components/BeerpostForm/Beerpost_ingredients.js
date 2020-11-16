import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './BeerpostForm.scss'
import Ingredient from './Ingredient'

const Beerpost_ingredients = ({
  beerpostIngredients,
  setBeerpostIngredients,
}) => {
  // const [maltList, setMaltList] = useState([{
  //     ingredient_id: 1,
  //     ingredient_name: '',
  //     quantity: '',
  // }])

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

  const handleQuantity = (e, key) => {
    setBeerpostIngredients((prev) =>
      prev.map((item) => {
        if (item.key === key) {
          return {
            ...item,
            quantity: e.target.value,
          }
        } else {
          return {
            ...item,
          }
        }
      })
    )
  }

  const handleName = (e, key) => {
    setBeerpostIngredients((prev) =>
      prev.map((item) => {
        if (item.key === key) {
          return {
            ...item,
            ingredient_name: e.target.value,
          }
        } else {
          return { ...item }
        }
      })
    )
  }

  console.log(beerpostIngredients)

  return (
    <>
      <Ingredient
        ingredient_id={1}
        name='Malt'
        handleName={handleName}
        handleQuantity={handleQuantity}
        beerpostIngredients={beerpostIngredients.filter((item) => {
          return item.ingredient_id == 1
        })}
        addIngredient={addIngredient}
      />

      <Ingredient
        ingredient_id={2}
        name='Hop'
        handleName={handleName}
        handleQuantity={handleQuantity}
        beerpostIngredients={beerpostIngredients.filter((item) => {
          return item.ingredient_id == 2
        })}
        addIngredient={addIngredient}
      />
      <Ingredient
        ingredient_id={3}
        name='Yeast'
        handleName={handleName}
        handleQuantity={handleQuantity}
        beerpostIngredients={beerpostIngredients.filter((item) => {
          return item.ingredient_id == 3
        })}
        addIngredient={addIngredient}
      />
    </>
  )
}

export default Beerpost_ingredients

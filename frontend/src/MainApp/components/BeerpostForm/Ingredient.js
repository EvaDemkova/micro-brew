import React from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'

const Ingredient = ({
  handleQuantity,
  handleName,
  beerpostIngredients,
  addIngredient,
  ingredient_id,
  name,
}) => {
  return (
    <div>
      {beerpostIngredients.map((item, index) => {
        return (
          <div key={index}>
            <div className='ingredient-item'>
              <label htmlFor={name}>{name}</label>
              <input
                type='text'
                name='ingredient_name'
                value={item.ingredient_name}
                onChange={(e) => handleName(e, item.key)}
              />
              <input
                type='text'
                name='quantity'
                value={item.quantity}
                onChange={(e) => handleQuantity(e, item.key)}
              />
              <BsFillPlusCircleFill
                onClick={() => addIngredient(ingredient_id)}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Ingredient

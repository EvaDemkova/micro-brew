import React from 'react'
import ListComments from '../ListComments'
import './beerpostExtended.scss'

const BeerpostExtend = ({ data }) => {
  const { ingredients, comments } = data

  console.log(data)
  const displayIngredient = (ingredient) => {
    const result = ingredients.filter((item) => item.type === ingredient)
    return result.map((item, index) => (
      <p key={index}>
        {item.pivot.ingredient_name} | {item.pivot.quantity}
      </p>
    ))
  }

  return (
    <div className='extended'>
      <section>
        <div className='left-menu'>Ingredients</div>
        <div className='content'>
          <div className='ingredients'>
            <div className='ingredient-item'>
              <h5>Malt</h5>
              {displayIngredient('malt')}
            </div>
            <div className='ingredient-item'>
              <h5>Hops</h5>
              {displayIngredient('hop')}
            </div>
            <div className='ingredient-item'>
              <h5>Yeast</h5>
              {displayIngredient('yeast')}
            </div>
            <div className='ingredient-item'>
              <h5>Spices</h5>
              {displayIngredient('spices')}
            </div>
            <div className='ingredient-item'>
              <h5>Honey</h5>
              {displayIngredient('honey')}
            </div>
            <div className='ingredient-item'>
              <h5>Others</h5>
              {displayIngredient('others')}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='left-menu'>Comments</div>
        <div className='content'>
          <ListComments comments={comments} beerpost_id={data.id} />
        </div>
      </section>
    </div>
  )
}

export default BeerpostExtend

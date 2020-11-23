import React, {useState, useEffect} from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    alignItems: 'center',   
  },
  btnSize: {
    width: '25px', 
    height: '25px'
  },

  inputWidth: {
    width: '100px',
  },

  headingWidth: {
    width: '100px'
  }
}));

const Ingredient = ({
  beerpostIngredients,
  setBeerpostIngredients,
  addIngredient,
  ingredient_id,
  name,
}) => {
  const classes = useStyles();
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

  return (
    <div>
      {beerpostIngredients.map((item, index) => {
        return (
          <div key={index}>
            <div className={classes.root}>
              <h4 className={classes.headingWidth}>{name}</h4>
              <TextField
                  style={{width: '160px'}}
                  id="outlined-helperText"
                  label={name}
                  defaultValue="Default Value"
                  variant="outlined"
                  type="text"
                  size='small'
                  value={item.ingredient_name}
                  placeholder={name }
                  onChange={(e) => handleName(e, item.key)}
              />
              <TextField
                  style={{width: '90px'}}
                  id="outlined-helperText"
                  label="Quantity"
                  defaultValue="Default Value"
                  variant="outlined"
                  type="text"
                  size='small'
                  value={item.quantity}
                  onChange={(e) => handleQuantity(e, item.key)}
              />
              {/* <input
                type='text'
                name='quantity'
                value={item.quantity}
                onChange={(e) => handleQuantity(e, item.key)}
                placeholder="Quantity"
              /> */}
              <BsFillPlusCircleFill
                className={classes.btnSize}
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

import React, { useState, useEffect} from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs';

const Malt = ({addMalt, setBeerpostIngredients, beerpostIngredients, listOfIngredients, setListOfIngredients}) => {

    const [values, setValues] = useState({
        ingredient_id: 1, 
        ingredient_name: "", 
        quantity: ""
    })

    
    const handleChange = (e) => {
        const malt_info = ['ingredient_id', 'ingredient_name', 'quantity'],
              name  = e.target.name,
              value = e.target.value

        if (-1 !== malt_info.indexOf(name)) {
            setValues(prev_values => {
                return (
                    {
                        ...prev_values,
                        [name]: value
                    }
                );
            });
        }
        setBeerpostIngredients(values);
    }

    const handleClick = (e) => {
        e.preventDefault();
        addMalt();
        setListOfIngredients(listOfIngredients => [...listOfIngredients, values])
        // setBeerpostIngredients({
        //     ingredient_id: null, 
        //     quantity: "", 
        //     ingredient_name: ""
        // })
    }

    return (
        <div className="ingredient-item">
            <label htmlFor="malt">Malt</label>
            <input type="hidden" name="ingredient_id" value="1" />
            <input type="text" name="ingredient_name" value={values.ingredient_name} onChange={handleChange}/>
            <input type="text" name="quantity" value={ values.quantity} onChange={handleChange}/>
            <BsFillPlusCircleFill onClick={handleClick}/>
        </div>
    )
}

export default Malt

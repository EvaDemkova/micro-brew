import React from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs';

const Hop = ({addHop}) => {

    return (
        <div className="ingredient-item">
            <label htmlFor="hop">Hop</label>
            <input type="hidden" name="ingredient_id" value="2" />
            <input type="text" name="ingredient_name" />
            <input type="text" name="quantity" />
            <BsFillPlusCircleFill onClick={addHop}/>
        </div>
    )
}

export default Hop

import React, { useState, useEffect } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs'
import axios from 'axios';
import Malt from './Malt';
import Hop from './Hop';
import './BeerpostForm.scss';


const Beerpost_ingredients = ({beerpostIngredients, setBeerpostIngredients, handleSubmit, listOfIngredients, setListOfIngredients}) => {
    const [maltList, setMaltList] = useState([<Malt />])
    const [hopList, setHopList] = useState([<Hop/>])

    const addMalt = (e) => {
        setMaltList(maltList => [...maltList, <Malt />])
    
        
    }

    // const addHop = (e) => {
    //     setHopList(hopList => [...hopList, <Hop/>])
    // }

    useEffect(() => {
        // console.log(maltList)
    }, [maltList])
    

    return (
        <div>
            {maltList.map((item, index) => {
                return (
                    <div key={index}><Malt addMalt={addMalt} beerpostIngredients={beerpostIngredients} setBeerpostIngredients={setBeerpostIngredients} handleSubmit={handleSubmit} listOfIngredients={listOfIngredients} setListOfIngredients={setListOfIngredients}/></div>
                )
            })}
            {/* {hopList.map((item, index) => {
                return (
                    <div key={index}><Hop addHop={addHop} beerpostIngredients={beerpostIngredients} setBeerpostIngredients={ setBeerpostIngredients}/></div>
                )
            })} */}
        </div>
    )

}

export default Beerpost_ingredients;
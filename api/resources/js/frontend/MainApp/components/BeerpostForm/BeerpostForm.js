import React, { useState, useEffect } from 'react'
import { MdCancel, MdEdit, MdDelete } from 'react-icons/md'
import { useGlobalContext } from '../../../context.js'
import axios from 'axios'
import './BeerpostForm.scss'
import Beerpost_ingredients from './Beerpost_ingredients'
import Beerpost_sections from './Beerpost_sections';

const BeerpostForm = ({setIsBeerpostForm }) => {
  
  const { user } = useGlobalContext()

  
  const [values, setValues] = useState({
    user_id: user.id,
    beer_name: '',
    type: '',
    description: '',
    abv: '',
    og: '',
    carbonation: '',
    gravity: '',
    status: '',
    ebc: '',
    ibu: '',
    batch_volume: ''
  })

  console.log(values.user_id)
  const [beerpostIngredients, setBeerpostIngredients] = useState([
    {
      key: 1,
      ingredient_id: 1,
      ingredient_name: '',
      quantity: '',
    },
    {
      key: 2,
      ingredient_id: 2,
      ingredient_name: '',
      quantity: '',
    },
    {
      key: 3,
      ingredient_id: 3,
      ingredient_name: '',
      quantity: '',
    },
    {
      key: 4,
      ingredient_id: 4,
      ingredient_name: '',
      quantity: '',
    },
    {
      key: 5,
      ingredient_id: 5,
      ingredient_name: '',
      quantity: '',
    },
    {
      key: 6,
      ingredient_id: 6,
      ingredient_name: '',
      quantity: '',
    },
  ])

  const [beerpostSections, setBeerpostSections] = useState([
    {
      key: 1, 
      section_name: "Mash Profile", 
      description: null, 
      duration: null, 
      date: null
    }, 
    {
      key: 2, 
      section_name: "Hopping Profile", 
      description: null, 
      duration: null, 
      date: null
    }, 
    {
      key: 3, 
      section_name: "Primary Fermentation", 
      description: null, 
      duration: null, 
      date: null
    }, 
    {
      key: 4, 
      section_name: "Bottling", 
      description: null, 
      duration: null, 
      date: null
    }, 
    {
      key: 5, 
      section_name: "Secondary Fermentation", 
      description: null, 
      duration: null, 
      date: null
    }, 
  ])

  const handleChange = (event) => {
    const beerpost_info = [
        'beer_name',
        'type',
        'description',
        'abv',
        'og',
        'carbonation',
        'gravity',
        'status',
        'ebc',
        'ibu',
        'batch_volume',
        
      ],
      name = event.target.name,
      value = event.target.value

    if (-1 !== beerpost_info.indexOf(name)) {
      setValues((prev_values) => {
        return {
          ...prev_values,
          [name]: value,
        }
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //token to be used !!
    await axios.get("/sanctum/csrf-cookie");


    await axios.post(
      "/api/beerposts/store",
      {
        values: values,
        beerpostIngredients: beerpostIngredients,
        beerpostSections: beerpostSections
      }
    ).then(function (response) {
            console.log(response.config.data)
            if (response.status === 200) {
              console.log('Beerpost saved')
              
            }
        })
    .catch(function (error) {
      console.log(error)
    })
  }

  return (
    <div>
      <form
        method='post'
        className='beerpost-form'
        onSubmit={handleSubmit}
      >
        <div className='form-heading'>
          <MdDelete className='delete-icon' />
          <MdEdit className='edit-icon' />
          <h1>New Beer Post</h1>
          <MdCancel
            className='cancel-icon'
            onClick={() => setIsBeerpostForm(false)}
          />
        </div>
        <div className='general-section'>
          <div className='input-item'>
            <label htmlFor='beer_name'>Beer Name:</label>
            <input
              type='text'
              name='beer_name'
              placeholder='Beer Name'
              value={values.beer_name}
              onChange={handleChange}
            />
          </div>
          <div className='input-item'>
            <label htmlFor='type'>Beer Type:</label>
            <input
              type='text'
              name='type'
              placeholder='Beer Type'
              value={values.type}
              onChange={handleChange}
            />
          </div>
          <div className='input-item'>
            <label htmlFor='description' className='description-label'>
              Description:
            </label>
            <textarea
              name='description'
              id=''
              cols='23'
              rows='10'
              value={values.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='input-item'>
            <label htmlFor='abv'>ABV:</label>
            <input
              type='text'
              name='abv'
              placeholder='ABV'
              value={values.abv}
              onChange={handleChange}
            />
          </div>
          <div className='input-item'>
            <label htmlFor='og'>OG:</label>
            <input
              type='text'
              name='og'
              placeholder='OG'
              value={values.og}
              onChange={handleChange}
            />
          </div>
          <div className='input-item'>
            <label htmlFor='ebc'>EBC:</label>
            <input
              type='text'
              name='ebc'
              placeholder='EBC'
              value={values.ebc}
              onChange={handleChange}
            />
          </div>
          <div className='input-item'>
            <label htmlFor='ibu'>IBU:</label>
            <input
              type='text'
              name='ibu'
              placeholder='IBU'
              value={values.ibu}
              onChange={handleChange}
            />
          </div>
          <div className='image-loader'></div>
          <div className='input-item'>
            <label htmlFor='gravity'>Gravity:</label>
            <input
              type='text'
              name='gravity'
              placeholder='Gravity'
              value={values.gravity}
              onChange={handleChange}
            />
          </div>
          <div className='input-item'>
            <label htmlFor='carbonation'>Carbonation:</label>
            <input
              type='text'
              name='carbonation'
              placeholder='Carbonation'
              value={values.carbonation}
              onChange={handleChange}
            />
          </div>
          <div className='input-item'>
            <label htmlFor='status'>Status:</label>
            <input
              type='text'
              name='status'
              placeholder='Status'
              value={values.status}
              onChange={handleChange}
            />
          </div>
          <div className='input-item'>
            <label htmlFor='batch_volume'>Batch Volume:</label>
            <input
              type='number'
              name='batch_volume'
              placeholder='Batch Volume'
              value={values.batch_volume}
              onChange={handleChange}
            />
          </div>
        </div>
        <Beerpost_ingredients
          beerpostIngredients={beerpostIngredients}
          setBeerpostIngredients={setBeerpostIngredients}
        />
        <Beerpost_sections
          beerpostSections={beerpostSections}
          setBeerpostSections={ setBeerpostSections}        
        />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default BeerpostForm

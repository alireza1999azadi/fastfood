import React from 'react'
import FastFoodItems from '../FastFoodItems/FastFoodItems'
function FastFoodList({fastFoodItem}) {
  return (
    <div className='row'>
        {
            fastFoodItem.map((item)=>(
                <div className='col-md-4 col-sm-6 mb-grid-gutter' key={item.id}>
                     <FastFoodItems {...item}/>      
                </div>
            ))
        }
    </div>
  )
}

export default FastFoodList

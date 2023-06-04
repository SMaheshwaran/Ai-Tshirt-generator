 import React from 'react'

 import state from '../store'
import { useSnapshot } from 'valtio'
 
 const CustomButton = ({type,title,CustomStyles,handleclick}) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) =>{
    if(type === 'filled'){
      return{
        backgroundColor: '#000',
      }
    }
  }
   return (
     <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
     style={generateStyle(type)
     }>
     {title}     
     </button>
   )
 }
 
 export default CustomButton; 
  
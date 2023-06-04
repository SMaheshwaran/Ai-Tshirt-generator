 import React from 'react'
 
 const CustomButton = ({type,title,CustomStyles,handleclick}) => {
  const generateStyle = (type) =>{
    if(type === 'filled'){
      return{
        backgroundColor: '',
      }
    }
  }
   return (
     <button>
       CustomButton
     </button>
   )
 }
 
 export default CustomButton; 
  
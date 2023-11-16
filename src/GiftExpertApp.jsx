﻿import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( category2Add ) => {
    if( categories.includes(category2Add) ) return;

    setCategories( [ category2Add, ...categories ] );
  }

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory
        onNewCategory={ onAddCategory }
      />  
      { 
        categories.map( ( category ) =>(
          <GifGrid
            key={ category }
            category={ category }
          />
        ))
      }
        
    </>
  )
}
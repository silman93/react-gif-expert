import { useState, useEffect } from "react";
import { callApiGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async() => {
    const newImages = await callApiGifs( category );
    setImages( newImages );
    setIsLoading( false );
  }

  useEffect( () => getImages() , [] );


  return {
    images,
    isLoading
  }
}

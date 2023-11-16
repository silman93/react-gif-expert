import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ( {target} ) => {
    setInputValue( target.value )
    
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const inputTrim = inputValue.trim();
    if( inputTrim.length <= 1 ) return;
    // setCategories( ( categories ) => [ inputTrim, ...categories] );
    onNewCategory( inputTrim );
    setInputValue('');

  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>


  )
}

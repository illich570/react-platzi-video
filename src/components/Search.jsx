import React from 'react';
import '../assets/styles/components/Search.scss';

const MainTitleText = 'Que quieres ver?';
const MainInputPlaceholder = 'Buscar...';

const Search = () => {
  return (
    <section className='main'>
      <h2 className='main__title'>{MainTitleText}</h2>
      <input type='text' className='input' placeholder={MainInputPlaceholder} />
    </section>
  );
};

export default Search;

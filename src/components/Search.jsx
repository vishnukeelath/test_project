import React from 'react';
import Layout from './Layout';

const Search = ({ searchTerm, productsData }) => {

const smallSearchTerm = searchTerm.toLowerCase();

const searchProducts = productsData.filter((value) => {
  return value.title.toLowerCase().match(new RegExp(smallSearchTerm, 'g')) ||
  value.category.toLowerCase().match(new RegExp(smallSearchTerm, 'g')) ||
  value.description.toLowerCase().match(new RegExp(smallSearchTerm, 'g'))
})

console.log(searchProducts);

  return (
    <div>
      <Layout pins={searchProducts} />
    </div>
  )
}

export default Search;
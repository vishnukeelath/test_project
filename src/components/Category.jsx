import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Layout from './Layout';

const Category = ({ productsData }) => {

    const { categoryId } = useParams();
    
    const smallCategory = categoryId.toLowerCase();

    const categoryProducts = productsData.filter((value) => {
    return value.category.toLowerCase().match(new RegExp(smallCategory, 'g'))
    })


    
  return (
    <div>
      <Layout pins={categoryProducts} />
    </div>
  )
}

export default Category
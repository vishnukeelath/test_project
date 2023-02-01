import React, { useState, useEffect, useRef } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Category, Layout, Navbar, Product, Search, Spinner } from '../components';



const Home = () => {
  const [productsData, setProductsData] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetch('https://fakestoreapi.com/products');
      const json = await data.json();
      setProductsData(json);
    }
    fetchData();
    setLoading(false);
  }, []);


  return (
    <>
    
      <div className="home-main">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {loading && <Spinner message="Loading..." />}
        {!loading && 
          <div className="home-routes">
            <Routes>
              <Route path="/*"  element= {productsData.length > 1 && <Layout pins={productsData} />} />
              <Route path="/category/:categoryId"  element= {productsData.length > 1 && <Category productsData={productsData} />} />
              <Route path="/product-detail/:productId"  element= {productsData.length > 1 && <Product productsData={productsData} />} />
              <Route path="/search"  element= {productsData.length > 1 && <Search searchTerm={searchTerm} productsData={productsData} />} />
            </Routes>
          </div>
        }
        
    </div>
   
    </>
  )
}

export default Home;




// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>setProductsData(json))
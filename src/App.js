import { useEffect, useState } from 'react';
import './App.css';
import CategoryList from './CategoryList/categoryList';
import Header from './Header/header';
import axios from './axios';
import Loading from './Loading/loading';
import FastFoodList from './FastFoodList/FastFoodList';
import SearchBar from './SearchBar/searchBar';
import notFound from './assets/images/404.png'
function App() {

  const [loading, setLoading] = useState(true)
  const [fastFoodItem, setFastFoodItem] = useState([])

  const searchItems = async (term) => {
    setLoading(true);
    const response = await axios.get(`/FastFood/search/${term ? "?term=" + term : ""}`
    )
    setLoading(false)
    setFastFoodItem(response.data)
  }

  const fetchData = async (categoryId = null) => {
    const response = await axios.get(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`)
    setFastFoodItem(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  const renderContent = () => {
    if (loading) {
      return (
        <Loading theme="dark" />
      )
    }
    if (fastFoodItem.length===0){
      return(
        <>
          <div className='alert alert-warning text-center'>
            برای کلید واژه فوق هیج آیتمی یافت نشد
          </div>
          <img src={notFound} className='mx-auto mt-5 d-block' alt="" />
        </>
      )
    }
    return <FastFoodList fastFoodItem={fastFoodItem} />

  }
  const filterItems = (categoryId) => {
    fetchData(categoryId)
  }

  return (
    <div className="wrapper bg-feded-dark">

      <Header />
      <CategoryList filterItems={filterItems} >
        <SearchBar searchItems={searchItems}/>
        </CategoryList>
      <div className='container mt-4' >{renderContent()}</div>
    </div>
  );
}

export default App;

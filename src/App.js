import { useEffect, useState } from 'react';
import './App.css';
import CategoryList from './CategoryList/categoryList';
import Header from './Header/header';
import axios from './axios';
import Loading from './Loading/loading';
import FastFoodList from './FastFoodList/FastFoodList';
function App() {

  const [loading,setLoading]=useState(true)
  const[fastFoodItem,setFastFoodItem]=useState([])

  useEffect(()=>{
    const fetchData=async (categoryId=null)=>{
      const response=await axios.get(`/FastFood/list/${categoryId?"categoryId="+categoryId:""}`)
      setFastFoodItem(response.data)
      setLoading(false)
    }
    fetchData();
  },[])

  const renderContent=()=> {
    if(loading){
      return(
        <Loading theme="dark" />
      )
    }
    return <FastFoodList fastFoodItem={fastFoodItem} />

  }

  return (
    <div className="wrapper bg-feded-dark">
      
      <Header/>
      <CategoryList/>
      <div className='container mt-4' >{renderContent()}</div>
    </div>
  );
}

export default App;

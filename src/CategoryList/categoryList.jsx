import React, { useEffect, useState } from 'react'
import axios from '../axios'
function CategoryList() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchList = async () => {
            const response = await axios.get("FoodCategory/categories")
            setCategories(response.data)
        }
        fetchList();
    }, [])


    return (
        <nav className='container mt-n5'>
            <div className='d-flex align-items-center bg-white rounded-3 shadow-lg py-4'
                style={{ height: "80px" }}
            >
                <ul className='nav'>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>همه غذاها</a>
                    </li>
                    {
                        categories.map(item => (
                            <li key={item.id}className='nav-item' ><a className='nav-link' href="/">{item.name}</a></li>
                        ))
                    }
                </ul>
            </div>


        </nav>
    )
}

export default CategoryList

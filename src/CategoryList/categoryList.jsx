import React, { useEffect, useState } from 'react'
import axios from '../axios'
import Loading from '../Loading/loading'
function CategoryList() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchList = async () => {
            const response = await axios.get("FoodCategory/categories")
            setCategories(response.data)
            setLoading(false)
        }
        fetchList();
    }, [])

    const renderContent = () => {
        if (loading) {
            return (<Loading />)
        }
        return (
            <ul className='nav'>
                <li className='nav-item'>
                    <a className='nav-link' href='/'>همه غذاها</a>
                </li>
                {
                    categories.map(item => (
                        <li key={item.id} className='nav-item' ><a className='nav-link' href="/">{item.name}</a></li>
                    ))
                }
            </ul>
        )
    }

    return (
        <nav className='container mt-n5'>
            <div className='d-flex align-items-center bg-white rounded-3 shadow-lg py-4'
                style={{ height: "80px" }}
            >
                {renderContent()}
            </div>


        </nav>
    )
}

export default CategoryList

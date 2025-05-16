import React, { useEffect, useState } from 'react'
import axios from '../axios'
import Loading from '../Loading/loading'
import { Link } from 'react-router'
function CategoryList({ filterItems,children }) {
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
            <div className='ps-3 w-100 d-flex align-items-center justify-content-between gap-5'>
                <ul className='nav'>
                    <li className='nav-item' onClick={() => filterItems()} >
                        <Link className='nav-link' href='/'>همه غذاها</Link>
                    </li>
                    {
                        categories.map(list => (
                            <li key={list.id} className='nav-item' ><Link className='nav-link' href="/" onClick={() => filterItems(list.id)} >{list.name}</Link> </li>
                        ))
                    }
                </ul>
                {children}
            </div>

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

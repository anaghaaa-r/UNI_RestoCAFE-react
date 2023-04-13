import React from 'react';
import '../STYLES/Categories.css'
import { Link } from 'react-router-dom';

function Categories({ data }) {
    return (
        <div className='categories'>
            {data.map((item) => (
                <div className='menu_category'>
                    <Link to={`/${item.menu_category_id}`} className='links'>
                        {item.menu_category}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Categories
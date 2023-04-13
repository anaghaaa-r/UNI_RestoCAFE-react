import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../STYLES/Header.css'

function Header() {
    const [resto, setResto] = useState([])

    async function fetchData() {
        await fetch('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
            .then((res) => res.json())
            .then((data) => setResto(data))
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log("resto data: ", resto)

    return (
        <div>
                {resto.map((item) => (
                    <div className='categories'>
                        {item.table_menu_list.map((item) => (
                            <div className='menu_category'>
                                <Nav fill>
                                    <Nav.Item>
                                        <Link to={`/${item.menu_category_id}`} className='links'>{item.menu_category}</Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    )
}

export default Header
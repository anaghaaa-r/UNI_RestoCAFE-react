import React from 'react'
import { Card, Col, Row, Image, Button, ButtonGroup } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import '../STYLES/CategoryDetails.css'

function CategoryDetails({ item }) {

    const params = useParams()
    console.log("params-id: ", params.id)

    const details = item.find((i) => i.menu_category_id == params.id)
    console.log("details: ", details)

    const [cart, setCart] = useState(0)
    function addCart()
    {
        setCart(cart+1)
    }
    function removeCart()
    {
        setCart(cart-1)
    }
    return (
        <div>
            {details.category_dishes.map((item) => (
                <div>
                    <Card className='border-start-0 border-end-0 border-top-0' >
                        <Card.Body>
                            <Row>
                                <Col sm={5} xs={5} xl={9} lg={9} md={7} >
                                    <Card.Title>{item.dish_name}</Card.Title>
                                    <h6>{item.dish_currency} {item.dish_price}</h6>
                                    <Card.Text className='desc'>{item.dish_description}</Card.Text>
                                </Col>
                                <Col sm={4} xs={4} xl={1} lg={2} md={1} className='px-2'>
                                    <h6>{item.dish_calories} calories</h6>
                                </Col>
                                <Col sm={3} xs={3} xl={2} lg={2} md={1}>
                                    <Image src={item.dish_image} alt="Dish" className='dishes rounded fluid' />
                                </Col>
                            </Row>

                            <ButtonGroup>
                            <Button variant='success' pill onClick={removeCart}>-</Button>
                            <span className='bg-success p-2'>{cart}</span>
                            <Button variant='success' onClick={addCart}>+</Button>
                            </ButtonGroup>

                            <p className='availability' >{`${item.dish_Availability ? "" : "Not available"}`}</p>
                            <Link to=''>
                                <p className='availability'>{`${item.addonCat.length !== 0 ? "customization available" : ""}`}</p>
                            </Link>
                        </Card.Body>
                    </Card>

                </div>
            ))}

        </div>

    )
}

export default CategoryDetails
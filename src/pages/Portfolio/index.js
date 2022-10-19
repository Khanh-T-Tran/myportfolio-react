import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import "./portfolio.css";

const PortfolioPage = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className='carousel-area'>
                <div className='carousel-header'>
                    <h1> My Works</h1>
                </div>
                <div className='carousel-slide'>
                    <Carousel className='carousel-inner' activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item interval={9000}>
                            {/* <Stack direction="horizontal" gap={5}> */}
                                <Card className="text-center">
                                    <Card.Header>Featured</Card.Header>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                
                            {/* </Stack> */}

                        </Carousel.Item>


                    </Carousel>
                </div>
            </div>

        </>

    )
}

export default PortfolioPage;
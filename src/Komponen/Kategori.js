import React from "react"
import {Card, Container, Row, Col, Image, Button, NavLink} from "react-bootstrap"
import {Link, Navigate} from "react-router-dom"
import Fruit from "../assets/bg/Buah.jpeg"
import Vegy from "../assets/bg/Sayur.jpeg"


function Kategori() 
{  
    const [keBuah, setKeBuah] = React.useState(false);
    
    if (keBuah) {
        return <Navigate to="/src/App.js" />
    }

    return(
       <div>
        <Container className = "text-center border">
            <Row>
                <Col md={6} className="fruitWrapper" id="buah-buah">
                    <Card className="fruitImage">
                        <Image src={Fruit} alt="Card image" className="katImage"/>
                        <div className="bg-dark">
                        <div className="p-4 m-3">
                        <Card.Title className="text-center text-white">Fruit</Card.Title>
                        <Button onClick={() => setKeBuah(true)} className="text-center text-black" variant = "light">
                         Buah
                        </Button>
                        <Card.Text className="text-center text-white">Belilah Buah</Card.Text>
                        </div>
                        </div>
                    </Card>
                </Col>
                <Col md={6} className="fruitWrapper" id="sayur-mayur">
                    <Card className="fruitImage">
                        <Image src={Vegy} alt="Card image" className="katImage"/>
                        <div className="bg-dark">
                        <div className="p-4 m-3">
                        <Card.Title className="text-center text-white">Vegetable</Card.Title>
                        <Button className="text-center text-black" variant = "light">
                         Sayur
                        </Button>
                        <Card.Text className="text-center text-white">Belilah Sayur</Card.Text>
                        </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        
       </div> 
    )
}

export default Kategori
import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button } from 'react-bootstrap';

//props: name,imgUrl,price
function Shopitem(props) {
    return <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imgUrl} className="shopItemCard" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <div className="text-center">
                    <Button variant="primary text-center">Kaufen</Button>
                </div>
            </Card.Body>
        </Card>
    </div>;
}

export default Shopitem;

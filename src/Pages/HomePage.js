// Product.js
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Card, Button } from 'react-bootstrap';
import imagem1 from '../Imagens/imagem1.jpeg';
import imagem2 from '../Imagens/imagem2.jpeg';
import imagem3 from '../Imagens/imagem3.jpeg';

function Product({ product, addToCart }) {
  const { name, description, price, image } = product;

  let imageSource;
  if (image === 'imagem1.jpeg') {
    imageSource = imagem1;
  } else if (image === 'imagem2.jpeg') {
    imageSource = imagem2;
  } else if (image === 'imagem3.jpeg') {
    imageSource = imagem3;
  } else {

    imageSource = '';
  }

  return (
    <Container fluid> <br/>
      <Col>
          <Card >
            <Card.Img variant="top" src={imageSource} alt={name} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Preço: R$ {price}</Card.Text>
              <Button variant="success" onClick={() => addToCart(product)}>Add to Cart</Button>
            </Card.Body>
          </Card>
      </Col>
  </Container>

  );
}

export default Product;
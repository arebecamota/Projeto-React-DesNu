import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import Data from './Components/Data';
import { Container, Row } from 'react-bootstrap';
import {HeaderPartial} from './Partials/HeaderPartial/HeaderPartial'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  return (
    <div>
      <HeaderPartial/>
      <Container>
        <Row>
          {Data.map((product) => (
            <div key={product.id} className="col-md-4">
              <HomePage product={product} addToCart={addToCart} />
            </div>
          ))}
        </Row>
        <br/>
      </Container>
      <Container>
        <CartPage cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} />
      </Container>
    </div>

  );
}

export default App;
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import {BsTrashFill} from 'react-icons/bs';

function Cart({ cartItems, setCartItems, removeFromCart }) {
  const increaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Card className="cart-card p-3">
      <Card.Body>
        <Card.Title><strong>Shopping Cart <FaShoppingCart/></strong></Card.Title>
        <br/>
        <ul>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-3">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <strong>Preço:</strong> R$ {item.price} <br />
                  <strong>Quantidade:</strong> {item.quantity}
                </Card.Text>
                <div className="d-flex gap-2">
                  <Button variant="secondary" onClick={() => increaseQuantity(item.id)}>
                    +
                  </Button>
                  <Button variant="secondary" onClick={() => decreaseQuantity(item.id)}>
                    -
                  </Button>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                    <BsTrashFill/>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </ul>
        <p>Total: R$ {totalAmount.toFixed(2)}</p>
      </Card.Body>
    </Card>
  );
}

export default Cart;
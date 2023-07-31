import { useState } from 'react';
import useCartContext from './useCartContext';

const useProduct = ({ productData }) => {
  const { cart, setCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  const handleAddProduct = () => {
    const {
      name, originalPrice, discount, thumbnails,
    } = productData;

    const existInCart = cart.some((product) => product.name === name);

    if (existInCart) {
      // If the product already exist in the cart, update the quantity with the new value
      const newState = cart.map((product) => {
        if (product.name === name) {
          return {
            ...product,
            quantity,
            total: ((originalPrice * discount) / 100) * quantity,
          };
        }

        return product;
      });

      setCart(newState);

      // Update the product in the local storage
      localStorage.setItem('cart', JSON.stringify(newState));
    } else {
      // Add the product to the cart
      setCart([
        ...cart,
        {
          id: crypto.randomUUID(),
          name,
          price: (originalPrice * discount) / 100,
          quantity,
          total: ((originalPrice * discount) / 100) * quantity,
          imageThumbnail: thumbnails[0],
        },
      ]);

      // Add the product to the local storage
      localStorage.setItem('cart', JSON.stringify(
        [
          ...cart,
          {
            id: crypto.randomUUID(),
            name,
            price: (originalPrice * discount) / 100,
            quantity,
            total: ((originalPrice * discount) / 100) * quantity,
            imageThumbnail: thumbnails[0],
          },
        ],
      ));
    }
  };

  return {
    quantity, handleAddProduct, handleDecrement, handleIncrement,
  };
};

export default useProduct;

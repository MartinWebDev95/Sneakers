import { useState } from 'react';
import styles from './Information.module.css';
import useCartContext from '../../hooks/useCartContext';

function Information({
  name, description, discount, originalPrice, imageThumbnails,
}) {
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
          imageThumbnails,
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
            imageThumbnails,
          },
        ],
      ));
    }
  };

  return (
    <div className={styles.containerInfo}>
      <h1 className={styles.company}>Sneaker Company</h1>
      <h2 className={styles.sneakerName}>{name}</h2>
      <p className={styles.sneakerDescription}>{description}</p>

      <div className={styles.containerPrice}>
        <p>
          <span className={styles.finalPrice}>
            {`$${((originalPrice * discount) / 100)?.toFixed(2)}`}
          </span>

          <span className={styles.discount}>
            {`${discount}%`}
          </span>
        </p>

        <p className={styles.originalPrice}>
          {`$${originalPrice?.toFixed(2)}`}
        </p>
      </div>

      <div className={styles.containerQuantity}>
        <div className={styles.containerInput}>
          <button
            type="button"
            className={styles.buttonMinus}
            onClick={handleDecrement}
          >
            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
              <defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" /></defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </button>

          <input
            type="number"
            name="quantity"
            id="quantity"
            value={quantity}
            readOnly
          />

          <button
            type="button"
            className={styles.buttonPlus}
            onClick={handleIncrement}
          >
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" /></defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className={styles.addToCart}
          onClick={handleAddProduct}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffff" fillRule="nonzero" />
          </svg>

          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
}

export default Information;

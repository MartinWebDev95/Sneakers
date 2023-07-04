import useCartContext from '../../hooks/useCartContext';
import Product from '../Product';
import styles from './Cart.module.css';

function Cart() {
  const { hiddenCart, cart } = useCartContext();

  return (
    <div className={styles.cart} aria-hidden={hiddenCart}>
      <h3 className={styles.cartTitle}>Cart</h3>

      {cart.length === 0
        ? (
          <p className={styles.noItems}>Your cart is empty</p>
        ) : (
          <div className={styles.containerProduct}>
            <ul>
              {cart.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </ul>
            <button type="button" className={styles.checkout}>
              Checkout
            </button>
          </div>
        )}
    </div>
  );
}

export default Cart;

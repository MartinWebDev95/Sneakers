import useCartContext from '../../hooks/useCartContext';
import styles from './Cart.module.css';

function Cart() {
  const { hiddenCart } = useCartContext();

  return (
    <div className={styles.cart} aria-hidden={hiddenCart}>
      <h3 className={styles.cartTitle}>Cart</h3>

      <div className={styles.containerProduct}>
        <button type="button" className={styles.checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;

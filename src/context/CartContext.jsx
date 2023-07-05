import {
  createContext, useEffect, useMemo, useState,
} from 'react';

const cartContext = createContext();

function CartProvider({ children }) {
  const [hiddenCart, setHiddenCart] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // If exist cart in the local storage then update the cart state with the local storage data
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  const values = useMemo(() => ({
    hiddenCart, setHiddenCart, cart, setCart,
  }), [hiddenCart, cart]);

  return (
    <cartContext.Provider value={values}>
      {children}
    </cartContext.Provider>
  );
}

export { CartProvider, cartContext };

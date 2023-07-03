import { createContext, useMemo, useState } from 'react';

const cartContext = createContext();

function CartProvider({ children }) {
  const [hiddenCart, setHiddenCart] = useState(true);
  const [cart, setCart] = useState([]);

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

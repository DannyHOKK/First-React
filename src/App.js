import ProductList from './ProductList';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import {CartContext} from './CartContext'
import { useState } from 'react';
import styles from './App.module.css'

function App() {

    const [cartItems,setCartItems] = useState([])

  return (
    <BrowserRouter>
 
      <CartContext.Provider value = {{cartItems,setCartItems}}>
      <nav className={styles.nav}>
        <a className={styles.HomeBtn} href ="https://dannyhkk.pages.dev/">Home page</a>
        <Link className={styles.HomeBtn} to ="/">Items</Link>
        <Link className={styles.HomeBtn} to ="/checkout">Shopping cart</Link>
      </nav>
        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/product' element={<ProductDetail/>}>
            <Route path=':id' element={<ProductDetail/>} />
          </Route>
          <Route path='*' element={<p>404</p>}/>
        </Routes>

        </CartContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;

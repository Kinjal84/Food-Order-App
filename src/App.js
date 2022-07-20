import logo from './logo.svg';
import { React, Fragment, useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/CartPovider';

function App() {
    const [CartIsShown, setCartIsShown] = useState(false);

    const ShowCartHandler = () => {
        setCartIsShown(true);
    };
    const HideCartHandler = () => {
        setCartIsShown(false);
    };
    return (
        <CartProvider>
            {CartIsShown && <Cart onClose={HideCartHandler} />}
            <Header onShowCart={ShowCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;

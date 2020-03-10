import React, { Component } from 'react'
//redux
import { Provider } from 'react-redux';
import store from './redux/store';
//components
import Header from './components/Header';
import Main from './containers/Main';
import Footer from './components/Footer';
//styles
import GlobalStyle from '../public/styles/GlobalStyles';

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <Main />
            <Footer />
            <GlobalStyle />
        </Provider>
    )
}

export default App

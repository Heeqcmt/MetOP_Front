import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './index.css';

function App()
{
    return (
        <>
        <Header />
        <Main />
        <Footer />
        </>
    );
}

ReactDOM.render(

    <App></App>,
    document.getElementById('root')
)



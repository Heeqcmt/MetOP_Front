import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App()
{
    return (
        <>
        <Header />
        <Main />
        <Footer />
        </>
    );
};

ReactDOM.render(

    <App />,
    document.getElementById('root')
)



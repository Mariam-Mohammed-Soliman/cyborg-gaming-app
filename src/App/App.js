import React from 'react';
import "./App.scss";
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Home from '../components/Pages/Home/Home';
import Profile from '../components/Pages/Profile/Profile';
import Streams from '../components/Pages/Streams/Streams';
import Browse from '../components/Pages/Browse/Browse';
import Details from '../components/Pages/Details/Details';
const App=()=> {
    return (
        <BrowserRouter>
            <Header/>
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Browse' element={<Browse/>}/>
                    <Route path='/Details' element={<Details/>}/>
                    <Route path='/Streams' element={<Streams/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </Container>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
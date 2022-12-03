import React, {useEffect, useState} from 'react';
import {Routes, Navigate, Route} from 'react-router-dom';
import axios from 'axios';
import apiKey from "./config";


//components
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';
import NotFound from './Components/NotFound';


const App = (props) => {

    const [images, setImages] = useState([]);
    const [batman, setBatman] = useState([]);
    const [catwoman, setCatwoman] = useState([]);
    const [venom, setVenom] = useState([]);
    const [loading, setloading] = useState(true)




    const performSearch = (keyword = "batman") => {
        setloading(true);
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`)
        .then((response) => {
            if (keyword === 'batman'){
                setBatman(response.data.photos.photo);
                setloading(false)
            } else if (keyword === 'catwoman') {
                setCatwoman(response.data.photos.photo);
                setloading(false)
            } else if (keyword === 'venom') {
                setVenom(response.data.photos.photo)
                setloading(false)
            } else {
                setImages(response.data.photos.photo)
                setloading(false)
            }
        })
        .catch((error) => {
            console.log("Error fetching and parsing dara", error);
        });
    };


    useEffect(() => {
        performSearch();
        performSearch('batman');
        performSearch('catwoman');
        performSearch('venom');
    },[]);



    

    return (
        <div className='container'>
            <SearchForm search={performSearch} />
            <Nav />

        
            {
                (loading)
                ?<h2>Loading...</h2>
                : <Routes>
                <Route path='/' element={<Navigate replace to="/batman" />} />
                <Route path='/batman' element={<PhotoContainer data={batman} /> } />
                <Route path='/catwoman' element={<PhotoContainer data={catwoman} /> } />
                <Route path='/venom' element={<PhotoContainer data={venom} /> } />
                <Route path="/search/:keyword" element={<PhotoContainer data={images} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            }
        </div>
        
    )
}

export default App

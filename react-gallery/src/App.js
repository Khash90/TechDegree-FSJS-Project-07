import React, { useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import apiKey from "./config";


//***components
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';
import RouteNotFound from "./Components/RouteNotFound";



const App = (props) => {

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const performSearch = (query) => {
      setLoading(true);

      axios({
        url: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`,
        method: "get",
        timeout: 8000
      })
        .then(res => {
          setPhotos(
            res.data.photos.photo
          )
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        })
    }




    return (
        <div className="container">
        <SearchForm />
        <Nav />
        <Routes>
          <Route path="/" element={<PhotoContainer getPhotos={performSearch} photos={photos} loading={loading} />} />
          <Route path="batman" element={<PhotoContainer defaultTopic={"batman"} getPhotos={performSearch} photos={photos} loading={loading} />} />
          <Route path="catwoman" element={<PhotoContainer defaultTopic={"catwoman"} getPhotos={performSearch} photos={photos} loading={loading} />} />
          <Route path="venom" element={<PhotoContainer defaultTopic={"venom"} getPhotos={performSearch} photos={photos} loading={loading} />} />
          <Route path="search/:topic" element={<PhotoContainer getPhotos={performSearch} photos={photos} loading={loading} />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </div>
        
    )
}

export default App

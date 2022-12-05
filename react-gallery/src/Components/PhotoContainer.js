import React,{useEffect} from 'react';
import { useParams } from "react-router-dom";
import Photo from './Photo';
import NotFound from './NotFound';



    const PhotoContainer = ({ defaultTopic,photos, getPhotos ,loading}) => {
        const { topic } = useParams();
        let topicToFetch = topic ? topic : defaultTopic;
        topicToFetch = topicToFetch ? topicToFetch : "batman%2Ccatwoman%2Cvenom";
    
        useEffect(() => {
            getPhotos(topicToFetch)
        },[topicToFetch]);
    
        photos = photos.map(photo => {
            return <Photo
                url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                key={photo.id}
            />
        })
     
       
    
    

    return (
       
        <div className="photo-container">
        {(loading) ? <h2>Loading...</h2> : null}
        {(photos.length !== 0 && !loading) ? <h2>Results</h2> : null}
        <ul>
            {
                (photos.length !== 0 && !loading)
                ? photos
                : (photos.length === 0 && !loading)
                ? <NotFound topic={topicToFetch} />
                : null}
        </ul>
    </div>
   
    );

};


export default PhotoContainer
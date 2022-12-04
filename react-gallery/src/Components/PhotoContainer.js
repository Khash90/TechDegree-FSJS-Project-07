import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';




const PhotoContainer = ({data}) => {
    const photoData = data;
    let photoList;

    if (photoData.length > 0) {
         photoList = photoData.map( image => 
            <Photo 
                data={image}
                key={image.id}
            />);
    } else {
        photoList = <NotFound />
    }
   
     
       
    
    

    return (
        <div className="photo-container">
            <h1>Photo Gallery</h1>
            <ul>{photoList}</ul>
        </div>
    );
};
export default PhotoContainer
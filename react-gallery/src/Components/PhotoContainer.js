import React from 'react';

import Photo from './Photo';



const PhotoContainer = ({data}) => {
    const photoData = data;

    let photoList = photoData.map( image => (
            <Photo 
                data={image}
                key={image.id}
            />
    ));

    return (
        <div className="photo-container">
            <h1>Photo Gallery</h1>
            <ul>{photoList}</ul>
        </div>
    );
};
export default PhotoContainer
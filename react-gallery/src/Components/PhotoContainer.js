import React from 'react';

import Photo from './Photo';



const PhotoContainer = ({data}) => {
    const photoData = data;

    let photoList = photoData.map( image => (
            <Photo 
               src={image.url}
                key={image.id}
                title={image.title}
                server={image.server}
                secret={image.secret}
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
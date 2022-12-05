import React from "react";

//Created Photo.js and added li to hold images
// const Photo = ({data}) => {
//     const {id,server,secret,title} = data;
//   return (
//     <li>
//       <img
//         src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
//         alt={`Title: ${title}`}
//       />
//     </li>
//   );
// };

const Photo = ({ url }) => {
  return (
      <li>
          <img src={url} alt="" />
      </li>
  );
}

export default Photo;
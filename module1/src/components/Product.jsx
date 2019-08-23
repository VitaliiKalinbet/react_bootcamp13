import React from 'react';

const Product = ({ imgUrl, alt, name, price, textButton }) => {
    console.log(imgUrl);
    return (
        <div>
        <img src={imgUrl} alt={alt} width="640" />
        <h2>{name}</h2>
        <p>Price: {price}$</p>
        <button type="button">{textButton}</button>
    </div>
    )
}

export default Product;



// const Product = props => (
//     <div>
//       <img src={props.imgUrl} alt={props.alt} width="640" />
//       <h2>{props.name}</h2>
//       <p>Price: {props.price}$</p>
//       <button type="button">Add to cart</button>
//     </div>
//   );
import React from 'react';

const productContainerStyles = {
    width: '640px',
    margin: '0 auto',
    backgroundColor: 'grey',
    padding: '30px'
};

const centerStyles = {
    textAlign: 'center'
}

const buttonStyles = {
    width: '80px',
    display: 'block',
    margin: '0 auto',
}

const Product = ({ imgUrl, alt, name, price, textButton }) => {
    console.log(imgUrl);
    return (
        <div style={productContainerStyles}>
        <img src={imgUrl} alt={alt} width="640" />
        <h2 style={centerStyles}>{name}</h2>
        <p style={centerStyles}>Price: {price}$</p>
        <button style={buttonStyles} type="button">{textButton}</button>
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
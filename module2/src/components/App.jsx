import React from 'react';
// import Product from './Product/Product';
// import Panel from './Panel/Panel';
// import Profile from './Profile/Profile';
// import Mailbox from './Mailbox/Mailbox';
// import TechList from './TechList';
// import technologies from './technologies.json';
import Dropdown from './Dropdown/Dropdown';

// const unreadMessages = [1, 2, 3, 4, 54, 546];

const App = () => {
  // console.log('Profile', Profile);
  return (
    <>
    {/* <Product 
    imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"  
    alt="Tacos With Lime" 
    name="Tacos With Lime" 
    price={10} 
    textButton="Add to cart" 
    />

    <Panel   >
      <Profile name="Mango2" email="mango2@mail.com" />
      <Profile name="Mango2" email="mango2@mail.com" />
      <Profile name="Mango3" email="mango3@mail.com" />
      <Profile name="Mango4" email="mango4@mail.com" />
    </Panel>

    <Mailbox unreadMessages={unreadMessages} />

    <TechList items={technologies} /> */}

    <Dropdown isOpen={true} buttonColor="palevioletred" />
  </>
  )
};

export default App;

    // <div>
    //   <img
    //     className="image"
    //     src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
    //     alt="Tacos With Lime"
    //     width="640"
    //   />
    //   <h2>Tacos With Lime</h2>
    //   <p>Price: 10$</p>
    //   <button type="button">Add to cart</button>
    // </div>


//   function App (props) {
//       return (
//         <>
//         <img
//           className="image"
//           src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
//           alt="Tacos With Lime"
//           width="640"
//         />
//         <h2>Tacos With Lime</h2>
//         <p>Price: 10$</p>
//         <button type="button">Add to cart</button>
//       </>
//       )
//   }

  

// const image = React.createElement('img', {
//     src:
//       'https://images.pexels.com/photos/461100/pexels-photo-461100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
//     alt: 'Tacos With Lime',
//     width: 640,
//   });
  
//   const title = React.createElement('h2', null, 'Tacos With Lime');
//   const price = React.createElement('p', null, 'Price: 10$');
//   const button = React.createElement('button', { type: 'button' }, 'Add to cart');
  
//   const product = React.createElement('div', null, image, title, price, button);

// ================================

// const product = (
//     <div>
//       <img
//         className="image"
//         src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
//         alt="Tacos With Lime"
//         width="640"
//       />
//       <h2>Tacos With Lime</h2>
//       <p>Price: 10$</p>
//       <button type="button">Add to cart</button>
//       <img src="" alt=""/>
//     </div>
//   );

  
import React from 'react';
import styles from './Mailbox.module.css';

console.log('styles :', styles);

const Mailbox = (props) => {

    // console.log('props :', props);

    function sum (...rest) {
        let arr = [...rest];
        let s = arr.reduce((acc, el) => acc + el, 0);
        return s;
    }

    return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mailbox</h1>
      {props.unreadMessages.length > 0 ? 
        <p>You have {props.unreadMessages.length} unread messages. Sum props: {sum(...props.unreadMessages)}</p> : 
        <p>No unread messages. </p>
      }
    </div>
    )
};

export default Mailbox;
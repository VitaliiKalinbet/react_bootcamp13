import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mailbox.module.css';

// console.log('styles :', styles);

const Mailbox = props => {
  function sum(...rest) {
    const arr = [...rest];
    const s = arr.reduce((acc, el) => acc + el, 0);
    return s;
  }

  const { unreadMessages } = props;

  return (
    <div className={styles.container}>
      <h1 className={styles.newTitle}>Mailbox</h1>
      {unreadMessages.length > 0 ? (
        <p>
          You have {unreadMessages.length} unread messages. Sum props:{' '}
          {sum(...unreadMessages)}
        </p>
      ) : (
        <p>No unread messages. </p>
      )}
    </div>
  );
};

Mailbox.propTypes = {
  unreadMessages: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Mailbox;

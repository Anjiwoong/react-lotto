import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = props => {
  const closeHandler = () => props.onClose(false);

  return <div className={styles.backdrop} onClick={closeHandler} />;
};

const ModalOverlay = props => {
  return (
    <>
      <div className={styles.modal}>{props.children}</div>;
    </>
  );
};

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;

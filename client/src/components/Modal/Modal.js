import React, {useState} from 'react';
import './Modal.scss'

const Modal = ({children}) => {

  return (
    <div className= {modalOpen ? 'modal active' : 'modal '} onClick={() => setModalOpen(false)}>
      <div className= {modalOpen ? 'modal__content active' : 'modal__content '} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
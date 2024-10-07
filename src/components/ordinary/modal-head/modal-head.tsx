import React from "react";

const ModalHead = ({texts} : {texts: string;}) => {
  return (
    <div className="modal-head">
      <h2 className="modal-head__title">Настройка профиля</h2>
      <p className="modal-head__text">{texts}</p>
    </div>
  )
}

export default ModalHead;
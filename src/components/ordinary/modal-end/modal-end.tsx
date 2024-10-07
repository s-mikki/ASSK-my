import React, {useState} from "react";
import StepButton from "../step-button/step-button";
import Progress from "../progress/progress";
import ModalHead from "../modal-head/modal-head";

const ModalEnd = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <StepButton className="back-btn" text="Назад" onClick={handlePreviousStep} icon="/src/assets/images/arrow-prevs.svg"/>
        <Progress current={currentStep}/>
        <ModalHead texts="Завершение настройки"/>
        <div className="completion">
          <img className="completion__check" src="/images/check.svg" width="100" height="100" alt="Готово"/>
          <p className="completion__title">Вы успешно прошли регистрацию!</p>
          <a className="completion__link" href="#">
            <img className="completion__plus" src="/images/plus.svg" alt="Плюс"/>
            <p className="completion__text">Добавить ещё роль</p>
          </a>
        </div>
        <button className="submit">Готово</button>
      </div>
    </div>
  )
}

export default ModalEnd;
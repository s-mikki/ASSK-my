import React, {useState} from "react";
import StepButton from "../step-button/step-button";
import Progress from "../progress/progress";
import ModalHead from "../modal-head/modal-head";

const ModalRole = () => {
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
        <ModalHead texts="Выберите роль"/>
        <form className="organization">
          <input className="organization__input" type="radio" id="student" name="organization"/>
          <label className="organization__label" htmlFor="student">Я студент</label>
          <input className="organization__input" type="radio" id="employee" name="organization"/>
          <label className="organization__label" htmlFor="employee">Я сотрудник</label>
        </form>
        <button className="submit">Далее</button>
      </div>
    </div>
  )
}

export default ModalRole;
import React, {useState} from "react";
import StepButton from "../step-button/step-button";
import Progress from "../progress/progress";
import Dropdown from "../../smart/dropdown/dropdown";
import ModalHead from "../modal-head/modal-head";

const ModalFaculty = () => {
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
        <ModalHead texts="Введите название института и факультета"/>
        <form className="organization">
          <Dropdown placeText="Выберите категорию"/>
          <input className="organization__text" type="text" placeholder="Введите название"/>
        </form>
        <button className="submit">Далее</button>
      </div>
    </div>
  )
}

export default ModalFaculty;
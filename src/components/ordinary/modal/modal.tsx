import React, {useState} from "react";
import StepButton from "../step-button/step-button";
import Dropdown from "../../smart/dropdown/dropdown";
import Progress from "../progress/progress";
import ModalHead from "../modal-head/modal-head";

const Modal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selectedOrganizationType, setSelectedOrganizationType] =
    useState<string>("");
  const [selectedOrganization, setSelectedOrganization] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(1);
  const [showSSKDropdown, setShowSSKDropdown] = useState(false);
  const [selectedSSK, setSelectedSSK] = useState<string>("");

  // Обработка выбора типа организации
  const handleOrganizationTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedOrganizationType(event.target.value);
  };

  const handleSSKCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShowSSKDropdown(event.target.checked);
    setSelectedSSK("");
    setSelectedOrganization("");
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (selectedOrganization) {
      console.log("Selected Organization:", selectedOrganization);
      if (showSSKDropdown && selectedSSK) {
        console.log("Selected SSK:", selectedSSK);
      }
    }
    handleNextStep();
  };

  const totalSteps = selectedOrganizationType === "educational" ? 5 : 4;

  const isNextButtonEnabled =
    selectedOrganization || (showSSKDropdown && selectedSSK);

  return (
    <div className={`modal ${modalOpen ? "" : "modal--close"}`} onClick={() => setModalOpen(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>

        {currentStep > 1 && (
          <StepButton className="back-btn" text="Назад" onClick={handlePreviousStep} icon="/src/assets/images/arrow-prevs.svg"/>
        )}

        <Progress current={currentStep}/>

        {/* Первый шаг */}
        {currentStep === 1 && (
          <>
            <ModalHead texts="Выберите тип организации, которую вы представляете"/>
            <form className="organization">
              <input className="organization__input" type="radio" id="educational" name="organization" value="educational" checked={selectedOrganizationType === "educational"} onChange={handleOrganizationTypeChange}/>
              <label className="organization__label" htmlFor="educational">Образовательная организация</label>
              <input className="organization__input" type="radio" id="sports_league" name="organization" value="sports_league" checked={selectedOrganizationType === "sports_league"} onChange={handleOrganizationTypeChange}/>
              <label className="organization__label" htmlFor="sports_league">Спортивная лига</label>
              <input className="organization__input" type="radio" id="public" name="organization" value="public" checked={selectedOrganizationType === "public"} onChange={handleOrganizationTypeChange}/>
              <label className="organization__label" htmlFor="public">Общественная организация</label>
              <input className="organization__input" type="radio" id="other" name="organization" value="other" checked={selectedOrganizationType === "other"} onChange={handleOrganizationTypeChange}/>
              <label className="organization__label" htmlFor="other">Другая организация</label>
            </form>
            <button className="submit" onClick={handleNextStep} disabled={!selectedOrganizationType}>Подтвердить выбор</button>
          </>
        )}

        {/* Второй шаг */}
        {currentStep === 2 && (
          <>
            <ModalHead texts="Выберите организацию"/>
            <div className="modal__container">
              <Dropdown placeText="Выберите организацию"/>
              <label className="checkbox" htmlFor="check">
                <input id="check" className="checkbox__input" type="checkbox" onChange={handleSSKCheckboxChange}/>
                <span className="checkbox__indicator"/>
                <span className="checkbox__text">Представляю ССК</span>
              </label>
            </div>
            {showSSKDropdown && (
              <Dropdown classes="dropdown--search" placeText="Выберите ССК"/>
            )}
            <button className="submit submit--right" onClick={handleSubmit} disabled={!isNextButtonEnabled}>Далее</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from "react";
import StepButton from "./StepButton";
import Dropdown from "../../components/smart/select/Dropdown";

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
  const handleOrganizationChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedOrganization(event.target.value);
    setShowSSKDropdown(false); // Скрываем выбор ССК при изменении организации
    setSelectedSSK(""); // Сбрасываем выбор ССК
  };
  // Обработка чекбокса ССК
  const handleSSKCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShowSSKDropdown(event.target.checked);
    setSelectedSSK(""); // Сбрасываем выбор ССК при изменении чекбокса
    setSelectedOrganization("");
  };

  // Обработка выбора ССК
  const handleSSKChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSSK(event.target.value);
  };

  // Переход на следующий шаг
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Возврат на предыдущий шаг
  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Отправка формы на втором шаге
  const handleSubmit = () => {
    if (selectedOrganization) {
      console.log("Selected Organization:", selectedOrganization);
      if (showSSKDropdown && selectedSSK) {
        console.log("Selected SSK:", selectedSSK);
      }
    }
    handleNextStep();
  };

  // Определяем количество шагов в зависимости от типа организации
  const totalSteps = selectedOrganizationType === "educational" ? 5 : 4;

  const isNextButtonEnabled =
    selectedOrganization || (showSSKDropdown && selectedSSK);

  return (
    <div className={`modal ${modalOpen ? "" : "modal--close"}`} onClick={() => setModalOpen(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {/* Кнопка Назад */}
        {currentStep > 1 && (
          <StepButton className="back-btn" text="Назад" onClick={handlePreviousStep} icon="/src/assets/images/arrow-prevs.svg"/>
        )}
        {/* Прогрессбар */}
        <div className="progress">
          {Array.from({ length: totalSteps }, (_, index) => (
            <span key={index} className={`progress__step ${currentStep > index ? "progress__step--active" : ""}`}>{index + 1}</span>
          ))}
        </div>

        {/* Первый шаг */}
        {currentStep === 1 && (
          <>
              <div className="modal__titles">
                  <h2 className="modal__title">Настройка профиля</h2>
                  <p className="modal__text">Выберите тип организации, которую вы представляете</p>
              </div>
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
                <div className="modal__titles">
                    <h2 className="modal__title">Настройка профиля</h2>
                    <p className="modal__text">Выберите организацию</p>
                </div>
                <Dropdown/>
                <div className="modal__container">
                    <label className="checkbox" htmlFor="check">
                        <input id="check" className="checkbox__input" type="checkbox" onChange={handleSSKCheckboxChange}/>
                        <span className="checkbox__indicator"/>
                        <span className="checkbox__text">Представляю ССК</span>
                    </label>
                    <Dropdown/>
                </div>
                <button className="submit" onClick={handleSubmit} disabled={!isNextButtonEnabled}>Далее</button>
            </>
        )}
      </div>
    </div>
  );
};

export default Modal;

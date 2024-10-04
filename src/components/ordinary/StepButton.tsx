import React from "react";

interface StepButtonProps {
  className: string;
  text: string;
  onClick: () => void; // Изменяем тип пропса на функцию
  icon?: string;
}

const StepButton: React.FC<StepButtonProps> = ({
  className,
  text,
  onClick,
  icon,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {icon && <img src="/images/arrow-prevs.svg" alt="icon" className="step-button__icon" />}
      {text}
    </button>
  );
};

export default StepButton;

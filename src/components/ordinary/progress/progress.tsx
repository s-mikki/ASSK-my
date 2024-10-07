import React from "react";

interface ProgressProps {
    current: number;
}

const Progress: React.FC<ProgressProps> = ({ current }) => {
    const [selectedOrganizationType, setSelectedOrganizationType] = React.useState<string>("");
    const totalSteps = selectedOrganizationType === "educational" ? 5 : 4;

    return (
        <div className="progress">
            {Array.from({ length: totalSteps }, (_, index) => (
                <span key={index} className={`progress__step ${current > index ? "progress__step--active" : ""}`}>{index + 1}</span>
            ))}
        </div>
    );
};

export default Progress;

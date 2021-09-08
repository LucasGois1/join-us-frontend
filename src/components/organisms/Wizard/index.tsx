import React, { Fragment } from "react";
import { WizardDot } from "../../atoms";
import { DotsContainer } from "./styles";
import { Wizardprops } from "./types";

const Wizard: React.FC<Wizardprops> = ({ dotsStructure, children }) => {
    
    return (
        <Fragment>
            
            {children}

            <DotsContainer>
                <WizardDot dotsStructure={dotsStructure} />
            </DotsContainer>
        </Fragment>
    );
};

export default Wizard;
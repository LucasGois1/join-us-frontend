import React, { Fragment } from "react";
import { WizardDot } from "../../atoms";
import { DotsContainer } from "./styles";
import { Wizardprops } from "./types";

const Wizard: React.FC<Wizardprops> = ({ dotsStructure, children, selectDot }) => {
    
    return (
        <Fragment>
            
            {children}

            <DotsContainer>
                <WizardDot dotsStructure={dotsStructure} click={selectDot} />
            </DotsContainer>
        </Fragment>
    );
};

export default Wizard;
import React, { Fragment } from "react";
import { Dot } from "./styles";
import { WizardDotprops } from "./types";

const WizardDot: React.FC<WizardDotprops> = ({ dotsStructure, click }) => {
    return (
        <Fragment>
            {
                dotsStructure.map(({index, active}) => {
                    return (
                        <Dot 
                            key={index} 
                            isActive={active}
                            onPress={() => click(index)}
                        />
                    );
                })
            }
        </Fragment>
    );
};

export default WizardDot;
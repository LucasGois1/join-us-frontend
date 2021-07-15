import React from 'react';
import { 
    TouchableOpacity, 
    Text, 
    TouchableOpacityProps 
} from "react-native";

import { Feather } from "@expo/vector-icons";

interface ButtonsProps extends TouchableOpacityProps {
    activeIcon?: boolean;
    title?: string;
    active: boolean;
}

const GreenButton = ({ activeIcon, title, active, ...rest }: ButtonsProps) => {

    return (
        <TouchableOpacity disabled={active} {...rest}>
            {
                activeIcon ? 
                    <Feather 
                        name="chevron-right" 
                        color="white" 
                        style={{fontSize: 24}} 
                    /> : 
                    <Text>{title}</Text>
            }
        </TouchableOpacity>
    );
};

export default GreenButton;
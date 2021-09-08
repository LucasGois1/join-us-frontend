import React from 'react';
import { 
    TouchableOpacity, 
    Text, 
    TouchableOpacityProps ,
    ActivityIndicator
} from "react-native";

import { Feather } from "@expo/vector-icons";
import colors from '../../../styles/colors';

interface ButtonsProps extends TouchableOpacityProps {
    activeIcon?: boolean;
    title?: string;
    isLoading?: boolean;
    active: boolean;
}

const GreenButton = ({ activeIcon, title, active, isLoading, ...rest }: ButtonsProps) => {

    return (
        <TouchableOpacity disabled={!active} {...rest}>
            {
                activeIcon ? 
                    <Feather 
                        name="chevron-right" 
                        color="white" 
                        style={{fontSize: 24}} 
                    /> :
                    <Text style={{color: colors.white}}>
                        {
                            isLoading ? <ActivityIndicator style={{marginTop: 5}} size="small" color={colors.green_dark} />
                            : title
                        }
                    </Text>
            }
        </TouchableOpacity>
    );
};

export default GreenButton;
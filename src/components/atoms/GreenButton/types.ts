import { TouchableOpacityProps } from 'react-native';

export interface ButtonsProps extends TouchableOpacityProps {
    activeIcon?: boolean;
    title?: string;
    isLoading?: boolean;
    active: boolean;
};
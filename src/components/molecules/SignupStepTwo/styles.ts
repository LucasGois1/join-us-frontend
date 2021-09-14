import styled from "styled-components/native";
import colors from '../../../styles/colors';

interface FormInputProps {
    isInvalid: boolean;
};

export const FormInput = styled.TextInput<FormInputProps>`
    width: 100%;
    height: 35px;
    text-align: center;
    margin-bottom: 20px;
    border-bottom-width: 2px;
    border-bottom-color: ${({ isInvalid }) => isInvalid ? colors.red : colors.dark_white };
`;
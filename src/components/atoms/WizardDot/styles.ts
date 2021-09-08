import styled from 'styled-components/native';
import colors from '../../../styles/colors';

interface DotProps {
    isActive: boolean;
}

export const Dot = styled.View<DotProps>`
    width: ${({ isActive }) => isActive ? '35px' : '10px'};
    height: 10px;

    background-color: ${colors.dark_gray};

    margin-right: 10px;

    border-radius: 10px;
`;
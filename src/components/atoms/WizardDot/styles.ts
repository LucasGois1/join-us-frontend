import styled from 'styled-components/native';
import colors from '../../../styles/colors';

interface DotProps {
    isActive: boolean;
};

export const Dot = styled.TouchableOpacity<DotProps>`
    width: ${({ isActive }) => isActive ? '40px' : '12px'};
    height: 12px;

    background-color: ${colors.dark_gray};

    margin-right: 10px;

    border-radius: 15px;
`;
import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    padding: 0 30px;

    align-items: center;
    justify-content: space-between;
    height: 95%;
`;

export const ImageContainer = styled(Animated.View)``;

export const TitleContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 32px;
    line-height: 38px;
    color: ${colors.green_dark};
    font-weight: 600;
`;

export const FormContainer = styled.View`
    width: 100%;
`;

export const HaveAccountContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const HaveAccountButton = styled.TouchableOpacity`
    background-color: ${colors.white};
    justify-content: center;
    align-items: center;
`;

export const HaveAccountText = styled.Text`
    text-align: center;
`;

export const ButtonContainer = styled(Animated.View)`
    justify-content: center;
    align-items: center;
`;

export const BottomBar = styled.View`
    height: 16%;
    justify-content: space-between;
`;

const styles = StyleSheet.create({
    scrollViewContainer: {
        height: '100%',
        justifyContent: 'space-between',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green,
        width: '80%',
        height: 60,
        borderRadius: 15,
    },
    alternativeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green,
        width: 56,
        height: 56,
        borderRadius: 15,
    },
});

export default styles;
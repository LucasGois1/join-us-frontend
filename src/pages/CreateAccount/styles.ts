import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    scrollViewContainer: {
        height: '100%',
        justifyContent: 'space-between',
    },
    container: {
        paddingHorizontal: 30,
    },
    imageContainer: {
        marginTop: 20,
        marginBottom: 15
    },
    titleContainer: {
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 32,
        lineHeight: 38,
        color: colors.green_dark,
        fontWeight: '600'
    },
    formContainer: {
        width: '100%',
    },
    haveAccountContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    haveAccountButton: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    haveAccountText: {
        textAlign: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green,
        width: '80%',
        height: 60,
        borderRadius: 15,
        marginTop: 20
    },
});

export default styles;
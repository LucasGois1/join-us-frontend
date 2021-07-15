import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 30
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        lineHeight: 38
    },
    titleText: {
        fontSize: 32,
        color: colors.green_dark,
        fontWeight: '600',
        textAlign: 'center'
    },
    imageContainer: {
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionText: {
        color: colors.black,
        textAlign: 'center',
        fontSize: 17,
        lineHeight: 25
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green,
        width: 56,
        height: 56,
        borderRadius: 15,
        marginTop: 33
    },
});

export default styles;
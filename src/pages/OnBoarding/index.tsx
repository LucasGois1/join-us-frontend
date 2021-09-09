import React from 'react';
import { 
    Text, 
    View, 
    SafeAreaView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import styles from './styles';

import { LogoImage, GreenButton } from '../../components/atoms/index';

const OnBoarding: React.FC = () => {
    const navigation = useNavigation();

    const handleNextPage = () => navigation.navigate('CreateAccount');

    return (
       <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Reuna pessoas {"\n"} de forma segura, {"\n"} Join Us!</Text>
                </View>
                <View style={styles.imageContainer}>
                    <LogoImage />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                            Reuna pessoas de forma segura, 
                            respeitando os limites de lotação, para 
                            que todos possam aproveitar a vida enquanto tomam cuidado com o 
                            COVID-19
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <GreenButton
                        style={styles.button}
                        activeIcon
                        active={true} 
                        onPress={handleNextPage}
                    />
                </View>
            </View>
       </SafeAreaView> 
    );
};

export default OnBoarding;
import React from 'react';
import { 
    Text, 
    View, 
    SafeAreaView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import styles from './styles';

import LogoImage from '../../components/LogoImage';
import GreenButton from '../../components/GreenButton';

const OnBoarding: React.FC = () => {
    const navigation = useNavigation();

    const handleNextPage = () => {
        navigation.navigate('CreateAccount');
    };

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
                            Reunia pessoas de forma segura, 
                            respeitando os limites de lotaçao, para 
                            que todos possam aproveitar a vida enquanto tomam os cuidados contra o 
                            COVID-19
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <GreenButton 
                        style={styles.button}
                        activeIcon 
                        active={false} 
                        onPress={handleNextPage}
                    />
                </View>
            </View>
       </SafeAreaView> 
    );
};

export default OnBoarding;
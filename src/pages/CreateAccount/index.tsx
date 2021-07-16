import React, { useState } from 'react';
import { 
    SafeAreaView,
    KeyboardAvoidingView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import LogoImage from '../../components/LogoImage';

const CreateAccount: React.FC = () => {
    const [name, onNameChange] = useState('');
    const [email, onEmailChange] = useState('');
    const [password, onPasswordChange] = useState('');

    const navigation = useNavigation();

    const handleNextPage = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView 
                behavior="position" 
                style={{marginTop: 30}}
                enabled 
            >
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <LogoImage />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Join Us!</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <View>
                            <TextInput
                                style={styles.formInput}
                                placeholderTextColor="#5C6660"
                                placeholder="Digite seu nome"
                                onChangeText={onNameChange}
                                value={name}
                            />
                        </View>
                        <View>
                            <TextInput
                                style={styles.formInput}
                                placeholderTextColor="#5C6660"
                                placeholder="Digite seu melhor email"
                                onChangeText={onEmailChange}
                                value={email}
                            />
                        </View>
                        <View>
                            <TextInput
                                style={{...styles.formInput, marginBottom: 20}}
                                placeholderTextColor="#5C6660"
                                placeholder="Digite uma senha"
                                onChangeText={onPasswordChange}
                                value={password}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.haveAccountContainer}>
                            <TouchableOpacity 
                                style={styles.haveAccountButton}
                                onPress={handleNextPage}
                            >
                                <Text style={styles.haveAccountText}>Já tenho uma conta</Text>
                            </TouchableOpacity>
                        </View>

                        <View>

                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export default CreateAccount;
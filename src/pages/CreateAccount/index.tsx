import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import LogoImage from "../../components/atoms/LogoImage";
import GreenButton from "../../components/atoms/GreenButton";
import { HttpContext } from "../../context/httpContext";
import useToast from "../../hooks/useToast";
import { ScrollView } from "react-native-gesture-handler";
import { SignupStepOne } from "../../components/molecules";
import SignupStepTwo from './../../components/molecules/SignupStepTwo/index';

const CreateAccount: React.FC = () => {
  const [name, onNameChange] = useState<string>("");
  const [email, onEmailChange] = useState<string>("");
  const [password, onPasswordChange] = useState<string>("");
  const [passwordConfirmation, onPasswordConfirmationChange] = useState<string>("");
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
  const [passwordDontMatch, setPasswordDontMatch] = useState<boolean>(false);
  const [invalidName, setInvalidName] = useState<boolean>(false);
  const [showLoadingSpin, setShowLoadingSpin] = useState<boolean>(false);
  
  const request = useContext(HttpContext);

  const navigation = useNavigation();

  const handleNextPage = (screenTitle: string) => navigation.navigate(screenTitle);

  const handleSubmitUser = async () => {
    if(!name) {
      setInvalidName(true);
      useToast("error", "Ops!", "Você precisa colocar um nome! 😅");
      return;
    } else setInvalidName(false);

    if (!email) {
      setInvalidEmail(true);
      useToast("error", "Ops!", "Você precisa inserir um e-mail! 😣");
      return;
    } else setInvalidEmail(false);

    if(!password) {
      useToast("error", "Ops!", "Você precisa criar uma senha! 🤓");
      setInvalidPassword(true);
      return
    } else setInvalidPassword(false);

    if(!passwordConfirmation) {
      useToast("error", "Ops!", "Você precisa confirmar sua senha! 😕");
      setPasswordDontMatch(true);
      return
    } else setPasswordDontMatch(false);

    if (password !== passwordConfirmation) {
      useToast("error", "Ops!", "Suas senhas não coincidem! 😩");
      return;
    } else setPasswordDontMatch(false);

    setShowLoadingSpin(true);

    try {
      await request.post("/signup", {
        name,
        email,
        password,
        passwordConfirmation,
      });
      useToast('error', 'Parabéns! 🥳', 'Sua conta foi criada com sucesso!');
    } catch (error: any) {
      useToast('error', 'Um erro inesperado aconteceu! 🙁', error.message);
    } finally {
      setShowLoadingSpin(false);
    };

  };

  return (
    <SafeAreaView>
      <ScrollView style={{paddingBottom: 100}} contentContainerStyle={styles.scrollViewContainer}>
        <KeyboardAvoidingView
          style={{ marginTop: 30 }}
          behavior="position"
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
              <SignupStepOne 
                name={name}
                invalidName={invalidName}
                onNameChange={onNameChange}
                email={email}
                invalidEmail={invalidEmail}
                onEmailChange={onEmailChange}
              />
              {/* <SignupStepTwo 
                password={password}
                invalidPassword={invalidPassword}
                onPasswordChange={onPasswordChange}
                confirmPassword={passwordConfirmation}
                onConfirmPasswordChange={onPasswordConfirmationChange}
                invalidConfirmPassword={passwordDontMatch}
              /> */}
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.haveAccountContainer}>
          <TouchableOpacity style={styles.haveAccountButton} onPress={() => handleNextPage("Login")}>
            <Text style={styles.haveAccountText}>Já tenho uma conta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <GreenButton
          style={styles.button}
          active={true}
          title="Criar conta"
          onPress={handleSubmitUser}
          isLoading={showLoadingSpin}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;

import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import LogoImage from "../../components/LogoImage";
import GreenButton from "../../components/GreenButton";
import { HttpContext } from "../../context/httpContext";
import useNotification from "../../hooks/useNotification";
import { ScrollView } from "react-native-gesture-handler";

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

  const handleNextPage = (screenTitle: string) => {
    navigation.navigate(screenTitle);
  };

  const handleSubmitUser = async () => {
    if(!name) {
      setInvalidName(true);
      useNotification("error", "Ops!", "Você precisa colocar um nome! 😅");
      return;
    } else setInvalidName(false);

    if (!email) {
      setInvalidEmail(true);
      useNotification("error", "Ops!", "Você precisa inserir um e-mail! 😣");
      return;
    } else setInvalidEmail(false);

    if(!password) {
      useNotification("error", "Ops!", "Você precisa criar uma senha! 🤓");
      setInvalidPassword(true);
      return
    } else setInvalidPassword(false);

    if(!passwordConfirmation) {
      useNotification("error", "Ops!", "Você precisa confirmar sua senha! 😕");
      setPasswordDontMatch(true);
      return
    } else setPasswordDontMatch(false);

    if (password !== passwordConfirmation) {
      useNotification("error", "Ops!", "Suas senhas não coincidem! 😩");
      return;
    } else setPasswordDontMatch(false);

    setShowLoadingSpin(true);

    let response;

    try {
      response = await request.post("/signup", {
        name,
        email,
        password,
        passwordConfirmation,
      });
      useNotification('error', 'Parabéns! 🥳', 'Sua conta foi criada com sucesso!');
      setShowLoadingSpin(false);
    } catch (error) {
      setShowLoadingSpin(false);
      useNotification('error', 'Um erro inesperado aconteceu! 🙁', error);
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
              <View>
                <TextInput
                  style={{
                    ...styles.formInput,
                    borderBottomColor: invalidName 
                      ? "#E83F5B"
                      : styles.formInput["borderBottomColor"],
                  }}
                  placeholderTextColor="#5C6660"
                  placeholder="Digite seu nome"
                  onChangeText={onNameChange}
                  keyboardAppearance="light"
                  value={name}
                />
              </View>
              <View>
                <TextInput
                  style={{
                    ...styles.formInput,
                    borderBottomColor: invalidEmail
                      ? "#E83F5B"
                      : styles.formInput["borderBottomColor"],
                  }}
                  placeholderTextColor="#5C6660"
                  keyboardType="email-address"
                  placeholder="Digite seu melhor email"
                  keyboardAppearance="light"
                  onChangeText={onEmailChange}
                  value={email}
                />
              </View>
              <View>
                <TextInput
                  style={{ 
                    ...styles.formInput,
                    borderBottomColor: invalidPassword
                    ? "#E83F5B"
                    : styles.formInput["borderBottomColor"],
                  }}
                  placeholderTextColor="#5C6660"
                  placeholder="Digite uma senha"
                  keyboardAppearance="light"
                  onChangeText={onPasswordChange}
                  value={password}
                  secureTextEntry={true}
                />
              </View>
              <View>
                <TextInput
                  style={{
                    ...styles.formInput,
                    marginBottom: 20,
                    borderBottomColor: passwordDontMatch
                      ? "#E83F5B"
                      : styles.formInput["borderBottomColor"],
                  }}
                  placeholderTextColor="#5C6660"
                  keyboardAppearance="light"
                  placeholder="Confirme sua senha"
                  onChangeText={onPasswordConfirmationChange}
                  value={passwordConfirmation}
                  secureTextEntry={true}
                />
              </View>
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
          showLoading={showLoadingSpin}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;

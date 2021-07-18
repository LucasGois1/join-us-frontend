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
import Toast from "react-native-toast-message";

import styles from "./styles";

import LogoImage from "../../components/LogoImage";
import GreenButton from "../../components/GreenButton";
import { HttpContext } from "../../context/httpContext";
import useNotification from "../../hooks/useNotification";

const CreateAccount: React.FC = () => {
  const [name, onNameChange] = useState("");
  const [email, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");
  const [passwordConfirmation, onPasswordConfirmationChange] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [passwordDontMatch, setPasswordDontMatch] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
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
    }

    if (!email) {
      setInvalidEmail(true);
      useNotification("error", "Ops!", "Você precisa inserir um e-mail! 😅");
      return;
    }

    if (password !== passwordConfirmation) {
      useNotification("error", "Ops!", "Suas senhas não coincidem! 😩");
      return;
    } else {
      setPasswordDontMatch(false);
    }

    const response = await request.post("/signup", {
      name,
      email,
      password,
      passwordConfirmation,
    });
    console.log(response);
  };

  return (
    <SafeAreaView>
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
                onChangeText={onEmailChange}
                value={email}
              />
            </View>
            <View>
              <TextInput
                style={{ ...styles.formInput }}
                placeholderTextColor="#5C6660"
                placeholder="Digite uma senha"
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
                placeholder="Confirme sua senha"
                onChangeText={onPasswordConfirmationChange}
                value={passwordConfirmation}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.haveAccountContainer}>
              <TouchableOpacity
                style={styles.haveAccountButton}
                onPress={() => handleNextPage("Login")}
              >
                <Text style={styles.haveAccountText}>Já tenho uma conta</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <GreenButton
                style={styles.button}
                active={true}
                title="Criar conta"
                onPress={handleSubmitUser}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateAccount;

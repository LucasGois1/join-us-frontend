import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import GreenButton from "../../components/atoms/GreenButton";
import LogoImage from "../../components/atoms/LogoImage";

import useToast from "../../hooks/useToast";
import { HttpContext } from "../../context/httpContext";

import styles from "./styles";

const Login: React.FC = () => {
  const [email, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const navigation = useNavigation();

  const request: any = useContext(HttpContext);

  const handleNextPage = (screenTitle: string) => {
    navigation.navigate(screenTitle);
  };

  const handleSubmitUser = async () => {
    if (!email) {
      setInvalidEmail(true);
      useToast("error", "Ops!", "Você precisa inserir um e-mail 😅");
      return;
    } else {
      setInvalidEmail(false);
    }

    if (!password) {
      setInvalidPassword(true);
      useToast("error", "Ops!", "Você precisa inserir uma senha 😅");
      return;
    } else {
      setInvalidPassword(false);
    }

    try {
      await request.post("/signup", {
        email,
        password,
      });
    } catch (error: any) {
      useToast('error', 'Um erro inesperado aconteceu! 🙁', error.message);
    };

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
                  borderBottomColor: invalidEmail
                    ? "#E83F5B"
                    : styles.formInput["borderBottomColor"],
                }}
                placeholderTextColor="#5C6660"
                keyboardType="email-address"
                placeholder="Digite seu email"
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
                placeholder="Digite sua senha"
                onChangeText={onPasswordChange}
                value={password}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.haveAccountContainer}>
              <TouchableOpacity
                style={styles.haveAccountButton}
                onPress={() => handleNextPage("CreateAccount")}
              >
                <Text style={styles.haveAccountText}>
                  Ainda não tenho uma conta
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <GreenButton
                style={styles.button}
                active={true}
                title="Entrar"
                onPress={handleSubmitUser}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

import React, { useContext, useState } from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { GreenButton, LogoImage } from "../../components/atoms";
import { LoginForm } from "../../components/molecules";

import { HttpContext } from "../../context/httpContext";
import useToast from "../../hooks/useToast";

import styles, { 
  BottomBar,
  ButtonContainer, 
  Container, 
  FormContainer, 
  HaveAccountButton, 
  HaveAccountContainer, 
  HaveAccountText, 
  ImageContainer, 
  Title, 
  TitleContainer 
} from "./styles";

const Login: React.FC = () => {
  const [email, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const request: any = useContext(HttpContext);

  const navigation = useNavigation();

  const handleSubmitUser = async () => {
    if (!email) {
      setInvalidEmail(true);
      useToast("error", "Ops!", "Você precisa inserir um e-mail 😅");
      return;
    } else setInvalidEmail(false);

    if (!password) {
      setInvalidPassword(true);
      useToast("error", "Ops!", "Você precisa inserir uma senha 😅");
      return;
    } else setInvalidPassword(false);

    try {
      await request.post("/login", {
        email,
        password,
      });

      handleNextPage('Home');
    } catch (error: any) {
      useToast('error', 'Um erro inesperado aconteceu! 🙁', error.message);
    };
  };

  const handleNextPage = (screenTitle: string) => navigation.navigate(screenTitle);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        style={{ marginTop: 30 }}
        behavior="position"
        enabled
      >
        <Container>
          <ImageContainer>
            <LogoImage />
          </ImageContainer>
          <TitleContainer>
            <Title>Join Us!</Title>
          </TitleContainer>
          <FormContainer>
            <LoginForm 
              email={email}
              invalidEmail={invalidEmail}
              onEmailChange={onEmailChange}
              password={password}
              invalidPassword={invalidPassword}
              onPasswordChange={onPasswordChange}
            />
          </FormContainer>
          <BottomBar>
            <HaveAccountContainer>
                <HaveAccountButton onPress={() => handleNextPage("CreateAccount")}>
                  <HaveAccountText>
                    Ainda não tenho uma conta
                  </HaveAccountText>
                </HaveAccountButton>
              </HaveAccountContainer>

              <ButtonContainer>
                <GreenButton
                  style={styles.button}
                  active={true}
                  title="Entrar"
                  onPress={handleSubmitUser}
                />
              </ButtonContainer>
          </BottomBar>
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

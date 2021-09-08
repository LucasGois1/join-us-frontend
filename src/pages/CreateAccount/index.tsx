import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles, { ImageContainer, Title, TitleContainer, FormContainer, HaveAccountContainer, HaveAccountButton, HaveAccountText, ButtonContainer, BottomBar } from "./styles";
import { Container } from './styles';

import LogoImage from "../../components/atoms/LogoImage";
import GreenButton from "../../components/atoms/GreenButton";
import { HttpContext } from "../../context/httpContext";
import useToast from "../../hooks/useToast";
import { ScrollView } from "react-native-gesture-handler";
import { SignupStepOne, SignupStepTwo } from "../../components/molecules";
import Wizard from './../../components/organisms/Wizard/index';

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
  const [wizardController, setWizardController] = useState([{index: 0, active: true}, {index: 1, active: false}]);
  const [stepOneIsShowing, setStepOneIsShowing] = useState(true);
  
  const request = useContext(HttpContext);

  const navigation = useNavigation();

  const handleNextPage = (screenTitle: string) => navigation.navigate(screenTitle);

  const createUser = async () => {
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
  }

  const handleSubmitUser = () => {
    if(stepOneIsShowing) {
      if(!name) {
        setInvalidName(true);
        useToast("error", "Ops!", "Você precisa colocar um nome! 😅");
        return;
      } else setInvalidName(false);
  
      if (!email) {
        setInvalidEmail(true);
        useToast("error", "Ops!", "Você precisa inserir um e-mail! 😣");
        return;
      } else {
        if(!email.includes('@')) {
          useToast("error", "Ops!", "Você precisa inserir um e-mail válido! 😣");
          return;
        } else {
          setInvalidEmail(false)
        };
      };

      setStepOneIsShowing(false);

      wizardController[0].active = false;
      wizardController[1].active = true;
    } else {
      if(!password) {
        useToast("error", "Ops!", "Você precisa criar uma senha! 🤓");
        setInvalidPassword(true);
        return;
      } else setInvalidPassword(false);
  
      if(!passwordConfirmation) {
        useToast("error", "Ops!", "Você precisa confirmar sua senha! 😕");
        setPasswordDontMatch(true);
        return;
      } else setPasswordDontMatch(false);
  
      if (password !== passwordConfirmation) {
        useToast("error", "Ops!", "Suas senhas não coincidem! 😩");
        return;
      } else setPasswordDontMatch(false);

      createUser();
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
          <Container>

            <ImageContainer>
              <LogoImage />
            </ImageContainer>

            <TitleContainer>
              <Title>Join Us!</Title>
            </TitleContainer>

            <Wizard dotsStructure={wizardController}>
              <FormContainer>
                {
                  stepOneIsShowing ? (
                    <SignupStepOne
                      name={name}
                      invalidName={invalidName}
                      onNameChange={onNameChange}
                      email={email}
                      invalidEmail={invalidEmail}
                      onEmailChange={onEmailChange}
                    />
                  ) : (
                    <SignupStepTwo
                      password={password}
                      invalidPassword={invalidPassword}
                      onPasswordChange={onPasswordChange}
                      confirmPassword={passwordConfirmation}
                      onConfirmPasswordChange={onPasswordConfirmationChange}
                      invalidConfirmPassword={passwordDontMatch}
                    />
                  )
                }
              </FormContainer>
            </Wizard>
          </Container>
        </KeyboardAvoidingView>

        <BottomBar>
          <HaveAccountContainer>
            <HaveAccountButton onPress={() => handleNextPage("Login")}>
              <HaveAccountText>Já tenho uma conta</HaveAccountText>
            </HaveAccountButton>

          </HaveAccountContainer>

          <ButtonContainer>
            <GreenButton
              style={stepOneIsShowing ? styles.alternativeButton : styles.button}
              activeIcon={stepOneIsShowing}
              active
              title="Criar conta"
              onPress={handleSubmitUser}
              isLoading={showLoadingSpin}
            />
          </ButtonContainer>
        </BottomBar>



      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;

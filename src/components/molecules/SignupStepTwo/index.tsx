import React, { Fragment } from "react";
import { View } from "react-native";

import { FormInput } from './styles';

import { SingupStepTwoProps } from "./types";

const SignupStepTwo = ({ password, invalidPassword, onPasswordChange, confirmPassword, onConfirmPasswordChange, invalidConfirmPassword }: SingupStepTwoProps) => {

    return (
        <Fragment>
            <View>
                <FormInput
                  placeholderTextColor="#5C6660"
                  placeholder="Crie uma senha"
                  keyboardAppearance="light"
                  onChangeText={onPasswordChange}
                  value={password}
                  secureTextEntry={true}
                  isInvalid={invalidPassword}
                />
              </View>
              <View>
                <FormInput
                  placeholderTextColor="#5C6660"
                  placeholder="Confirme a senha"
                  keyboardAppearance="light"
                  onChangeText={onConfirmPasswordChange}
                  value={confirmPassword}
                  secureTextEntry={true}
                  isInvalid={invalidConfirmPassword}
                />
              </View>
        </Fragment>
    );
};

export default SignupStepTwo;
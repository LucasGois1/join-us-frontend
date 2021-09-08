import React, { Fragment } from "react";
import { View } from "react-native";

import { FormInput } from './styles';

import { SingupStepOneProps } from "./types";

const SignupStepOne = ({ name, invalidName, onNameChange, invalidEmail, onEmailChange, email }: SingupStepOneProps) => {

    return (
        <Fragment>
            <View>
                <FormInput
                  placeholderTextColor="#5C6660"
                  placeholder="Nome"
                  onChangeText={onNameChange}
                  keyboardAppearance="light"
                  value={name}
                  isInvalid={invalidName}
                />
              </View>
              <View>
                <FormInput
                  placeholderTextColor="#5C6660"
                  keyboardType="email-address"
                  placeholder="E-mail"
                  keyboardAppearance="light"
                  onChangeText={onEmailChange}
                  value={email}
                  isInvalid={invalidEmail}
                />
              </View>
        </Fragment>
    );
};

export default SignupStepOne;
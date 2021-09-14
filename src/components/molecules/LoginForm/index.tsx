import React, { Fragment } from "react";
import { View } from "react-native";
import colors from "../../../styles/colors";

import { FormInput } from './styles';

import { LoginFormProps } from "./types";

const LoginForm = ({ email, invalidEmail, onEmailChange, password, onPasswordChange, invalidPassword }: LoginFormProps) => {

    return (
        <Fragment>
          <View>
            <FormInput
              keyboardType="email-address"
              placeholder="E-mail"
              keyboardAppearance="light"
              onChangeText={onEmailChange}
              value={email}
              isInvalid={invalidEmail}
              placeholderTextColor={invalidEmail ? colors.red : colors.gray}
            />
          </View>
          <View>
            <FormInput
              placeholderTextColor={invalidPassword ? colors.red : colors.gray}
              placeholder="Senha"
              keyboardAppearance="light"
              secureTextEntry
              onChangeText={onPasswordChange}
              value={password}
              isInvalid={invalidPassword}
            />
          </View>
        </Fragment>
    );
};

export default LoginForm;
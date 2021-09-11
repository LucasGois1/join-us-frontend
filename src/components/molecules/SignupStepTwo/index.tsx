import React, { Fragment, useState, useEffect } from "react";
import { View, Animated } from "react-native";
import colors from "../../../styles/colors";

import { FormInput } from './styles';

import { SingupStepTwoProps } from "./types";

const SignupStepTwo = ({ password, invalidPassword, onPasswordChange, confirmPassword, onConfirmPasswordChange, invalidConfirmPassword }: SingupStepTwoProps) => {
  const [shakePasswordAnimation] = useState(new Animated.Value(0));
  const [shakePasswordConfirmAnimation] = useState(new Animated.Value(0));

  const startShake = (isPaswword: boolean) => {
    Animated.sequence([
      Animated.timing(isPaswword ? shakePasswordAnimation : shakePasswordConfirmAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(isPaswword ? shakePasswordAnimation : shakePasswordConfirmAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(isPaswword ? shakePasswordAnimation : shakePasswordConfirmAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(isPaswword ? shakePasswordAnimation : shakePasswordConfirmAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
 };

  useEffect(() => {
    invalidPassword && startShake(true);
  }, [invalidPassword]);

  useEffect(() => {
    invalidConfirmPassword && startShake(false);
  }, [invalidConfirmPassword])

    return (
        <Fragment>
            <Animated.View style={{ transform: [{ translateX: shakePasswordAnimation }] }}>
                <FormInput
                  placeholderTextColor={invalidPassword ? colors.red : colors.gray}
                  placeholder="Crie uma senha"
                  keyboardAppearance="light"
                  onChangeText={onPasswordChange}
                  value={password}
                  secureTextEntry={true}
                  isInvalid={invalidPassword}
                />
              </Animated.View>
              <Animated.View style={{ transform: [{ translateX: shakePasswordConfirmAnimation }] }}>
                <FormInput
                  placeholderTextColor={invalidConfirmPassword ? colors.red : colors.gray}
                  placeholder="Confirme a senha"
                  keyboardAppearance="light"
                  onChangeText={onConfirmPasswordChange}
                  value={confirmPassword}
                  secureTextEntry={true}
                  isInvalid={invalidConfirmPassword}
                />
              </Animated.View>
        </Fragment>
    );
};

export default SignupStepTwo;
import React, { Fragment, useState, useEffect } from "react";
import { View, Animated } from "react-native";
import colors from "../../../styles/colors";

import { FormInput } from './styles';

import { SingupStepOneProps } from "./types";

const SignupStepOne = ({ name, invalidName, onNameChange, invalidEmail, onEmailChange, email }: SingupStepOneProps) => {
  const [shakeNameAnimation] = useState(new Animated.Value(0));
  const [shakeEmailAnimation] = useState(new Animated.Value(0));

  const startShake = (isName: boolean) => {
    Animated.sequence([
      Animated.timing(isName ? shakeNameAnimation : shakeEmailAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(isName ? shakeNameAnimation : shakeEmailAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(isName ? shakeNameAnimation : shakeEmailAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(isName ? shakeNameAnimation : shakeEmailAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
 };

 useEffect(() => {
  invalidName && startShake(true);
 }, [invalidName]);

 useEffect(() => {
  invalidEmail && startShake(false);
}, [invalidEmail])

    return (
        <Fragment>
          <Animated.View style={{ transform: [{ translateX: shakeNameAnimation }] }}>
            <FormInput
              placeholderTextColor={invalidName ? colors.red : colors.gray}
              placeholder="Nome"
              onChangeText={onNameChange}
              keyboardAppearance="light"
              value={name}
              isInvalid={invalidName}
            />
          </Animated.View>
          <Animated.View style={{ transform: [{ translateX: shakeEmailAnimation }] }}>
            <FormInput
              placeholderTextColor={invalidEmail ? colors.red : colors.gray}
              keyboardType="email-address"
              placeholder="E-mail"
              keyboardAppearance="light"
              onChangeText={onEmailChange}
              value={email}
              isInvalid={invalidEmail}
            />
          </Animated.View>
        </Fragment>
    );
};

export default SignupStepOne;
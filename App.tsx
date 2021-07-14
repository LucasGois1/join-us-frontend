import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import OnBoarding from './src/pages/OnBoarding/index';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <OnBoarding />
    </Fragment>
  );
}

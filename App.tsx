import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';

import Routes from './src/routes';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <Routes />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Fragment>
  );
}

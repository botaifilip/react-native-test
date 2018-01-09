import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Navigator from './pages/routerConfig';
import Layout from './components/common/layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => <Navigator />;

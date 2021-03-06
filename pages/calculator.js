import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Layout from '../components/common/layout';
import AppText from '../components/appText';
import Scroller from '../components/scroller/scroller';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#EBEBEB'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 85,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  footerTotal: {
    color: '#fff',
    fontSize: 18
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 5,
    padding: 5,
    textAlign: 'center'
  },
  inputContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  scrollerContainer: {
    width: '100%',
    height: 150,
  }
});

// scroller test data
let scrollerData = [{ key: '--', helper: true }];
for (let i = 0; i < 25; i++) {
  scrollerData.push({ key: i });
}
scrollerData.push({ key: '--', helper: true });
const ITEM_HEIGHT = 50;

class CalculatorPage extends Component {
  state = {
    max: 10.2,
    min: 2.5,
    totalWeight: 32.678,
    totalMeters: '1',
    selectedItem: { key: 11 }
  };

  onItemClick = (item) => {
    this.setState({
      selectedItem: item
    });
  };

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <View style={styles.container}>
          <AppText type="title">Weights of steel tubes</AppText>
          <AppText>{`Outside diameter ${this.state.max} - ${this.state.min} mm`}</AppText>

          <View style={styles.scrollerContainer}>
            <Scroller
              selectedItem={this.state.selectedItem}
              onItemPress={this.onItemClick}
              data={scrollerData}
              style={{
                width: 125,
                height: 151
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type here to translate!"
              value={this.state.totalMeters}
              onChangeText={(totalMeters) => this.setState({ totalMeters })}
            />
            <AppText>m</AppText>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerLabel}>TOTAL WEIGHT</Text>
            <Text style={styles.footerTotal}>{this.state.totalWeight} kg</Text>
          </View>
        </View>
      </Layout>
    );
  }
}

export default CalculatorPage;

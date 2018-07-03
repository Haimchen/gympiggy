import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Store from 'src/store/Store';

class PiggyScreen extends React.Component {

  render() {
    const piggy = this.props.navigation.getParam('piggy')
    return (
      <View style={styles.container}>
        <Text>{piggy.name}</Text>
       <Button onPress={() => this.props.navigation.navigate('Home')} title="Back Home" />
     </View>
    )
  }
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    minWidth: 60,
    // width: '100%',
    borderColor: 'grey',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PiggyScreen;


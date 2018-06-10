import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

class CreatePiggyScreen extends React.Component {

  state = {
    text: '',
  }

  create = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Create a new Piggy to start collecting rewards:</Text>
       <TextInput
            style={styles.input}
            placeholder="What should the name of this piggy be?"
            onChangeText={(text) => this.setState({text})}
          />
      <Button onPress={this.create} title="Create Piggy"/>
       <Button onPress={() => this.props.navigation.navigate('Home')} title="Back Home" />
     </View>
    )
  }
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderColor: 'grey',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CreatePiggyScreen;

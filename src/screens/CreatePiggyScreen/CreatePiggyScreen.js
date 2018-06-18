import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Store from 'src/store/Store';

class CreatePiggyScreen extends React.Component {

  state = {
    text: '',
  }

  create = () => {
    //TODO validate name
    Store.saveNewPiggy(this.state.text)
    this.setState({ text: '' })
    //navigate to page for this piggy
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Create a new Piggy to start collecting rewards:</Text>
       <TextInput
            value={this.state.text}
            style={styles.input}
            placeholder="What should the name of this piggy be?"
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={this.create}
            autoCorrect={false}
            clearButtonMode='always'
            returnKeyLabel='Create'
          />
      <Button onPress={this.create} title="Create Piggy"/>
       <Button onPress={() => this.props.navigation.navigate('Home')} title="x Cancel" />
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

export default CreatePiggyScreen;

import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Store from '../../store/Store';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      piggyList: [],
    }
  }

  componentDidMount() {
    Store.getAllPiggys((piggyList) => this.setState({ piggyList }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Gym Piggy!</Text>
        <Text>Check you current balance, log a visit or create new achievements</Text>
        <Text>{}</Text>
        <Button onPress={() => this.props.navigation.navigate('AddPiggy')} title="Create new Piggy" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 export default HomeScreen;

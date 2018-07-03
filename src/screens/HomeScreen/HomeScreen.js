import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import Store from 'src/store/Store';

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
        <Button onPress={() => this.props.navigation.navigate('AddPiggy')} title="Create new Piggy" />
        { this.state.piggyList.length > 0 &&
          <FlatList
            keyExtractor={(piggy) => piggy.id}
            data={this.state.piggyList}
            renderItem={
              ({item, index}) =>
                <Text key={item.id || index}>{`${index}:
                  ${item.name}`}
                  <Button onPress={() => this.props.navigation.navigate('Piggy', { piggy: item })} title={'view'}/>
                </Text>
            }
          />
        }
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

import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const HomeScreen = (props) => console.log(props) || (
  <View style={styles.container}>
    <Text>This is Gym Piggy!</Text>
    <Text>Check you current balance, log a visit or create new achievements</Text>
    <Text>Shake your phone to open the developer menu.</Text>
    <Button onPress={() => props.navigation.navigate('AddPiggy')} title="Create new Piggy" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 export default HomeScreen;

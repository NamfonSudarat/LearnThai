import React from 'react';
import { Navigationcontainer } from '@react-navigation/native';
import {createStackNevigator} from '@react-navigation/stack';
import { View,Text,Button,StyleSheet } from 'react-native';

//craete a stack navigation for navigation
const Stack = createStackNevigator();

//home-screen component
function HomeScreen({ navigation }) {
  return(
    <View
    style={styles.container}>
      <Text
      style={styles.title}>Learn Thai</Text>
      <Button
      title="Learn Alphabet" onPress={() =>navigation.navigate('AlphabetScreen')} />
      <Button
      title="Vocabulary" onPress={() =>navigation.navigate('VocabularyScreen')} />
      <Button title="Quizzes" onPress={() =>navigation.navigate('QuizScreen')} />
      </View>

  );
}

//Alphabet screen component
function AlphabetScreen() {
  return(
    <View
    style={styles.container}>
      <Text
      style={styles.title}>Alphabet Section</Text>
      </View>
  );
}

//Vocaburaly Screen Component
function VocabularyScreen() {
  return(
    <View
    style={styles.container}>
      <Text
      style={styles.title}>Vocaburaly Section</Text>
      </View>
  );
}

//Quiz Screen Component
function QuizScreen() {
  return(
    <View
    style={styles.container}>
      <Text
      style={styles.title}>Quiz Section</Text>
      </View>
  );
}

//MainApp Component
export default function App() {
  return(
    <Navigationcontainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
      name="Home"
      component={HomeScreen} />
      <Stack.Screen 
      name="AlphabetScreen"
      component={AlphabetScreen} />
      <Stack.Screen 
      name="VocaburalyScreen"
      component={VocabularyScreen} />
      <Stack.Screen 
      name="QuizScreen"
      component={QuizScreen} />
      </Stack.Navigator>
    </Navigationcontainer>
  );
}

//Styles for App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

//Alphabet Screen Component
function AlphabetScreen() {
  const thaiAlphabet = [
    'ก', 'ข', 'ฃ', 'ค', 'ต', 'ฆ', 'ง', 'จ', 'ฉ', 'ช',
    'ซ', 'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด',
    'ต', 'ถ', 'ท', 'ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ',
    'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส',
    'ห', 'ฬ', 'อ', 'ฮ'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thai Alphabet</Text>
      <View style={styles.alphabetGrid}>
        {thaiAlphabet.map((letter, index) => (
          <View key={index} style={styles.letterBox}>
            <Text style={styles.letter}>{letter}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
  
  //Alphabet Grid Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})
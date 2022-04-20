/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import Brokenline from './src/Brokenline';
import Hangman from './src/Hangman';
import Definition from './src/Definition';
import Http from './src/libs/http';
import axios from 'axios';




const verbs='read'

const baseUrl='https://api.dictionaryapi.dev/api/v2/entries/en/'





const App = () => {
const [fails, setFails] = useState(0);
const [arrayFails, setArrayFails] = useState([]);
const [definition, setDefinition] = useState('');


const callbackFails=(fails)=>{
    setFails(fails)
  }

const callbackArrayFails=([arrayFails])=>{
      setArrayFails(arrayFails)
    }

const getCasos = async () => {

    await axios.get(baseUrl+verbs).then((response) => {

      setDefinition(response.data[1].meanings[0].definitions[1].definition)
    }) .catch((err) => {
        console.log(err);
      });

  }
  getCasos()

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <Definition
          definition={definition}
          fails={fails}
          verb={verbs}
        />
        <Hangman
          img={fails}
          letters={arrayFails}
        />
        <Brokenline
          verb={verbs}
          fails={callbackFails}
          arrayFails={callbackArrayFails}
        />

        </ScrollView>
        <View style={styles.container} >
          <Text style={styles.text} >*Read definition
          </Text>
          <Text style={styles.text} >
          *See the image
          </Text>
          <Text style={styles.text} >
          *Click green button
          </Text>
          <Text style={styles.text} >
          *Try</Text>
        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer:{
    backgroundColor: 'white',




  },

  container:{


      justifyContent: "space-between",

    backgroundColor: '#E0F5F4',


    borderRadius: 12,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
    marginTop: 8,
    padding: 16

  },
  text:{
    fontSize:  20,
    color: 'gray'
  },
  });

export default App;

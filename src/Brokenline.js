import  React, {Component,useState,useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Brokenline = (props) =>{

  const [atemp, setAtemp] = useState('');
  const [currenAttemp, setCurrentAtemp] = useState('');
  const [large, setLarge] = useState(0);
  const [currentLarge, setCurrentLarge] = useState(0);
  const [fails, setFails] = useState(0);
  const [errors, setErrors] = useState([]);
  const [invertCero2, setInvertCero2] = useState('');
  const [arrayFail, setArrayFail] = useState([]);




  const length=props.verb.length
  const word=props.verb

  useEffect(() => {

    if (large < length){
      setAtemp(atemp + ' _')
      setLarge(large + 1)
      }
      setCurrentAtemp(atemp)

    }, [length, large]);


  const handleText =(letter)=>{
    var help=currenAttemp.split(" ");
    var ll=letter.length
    var inverted=letter.split("").reverse().join("");
    var fallos=0;
    var prom =0
    var invertCero=inverted[0]
    setInvertCero2(inverted[0])

    for (let i=0; i<length; i++){

      if(invertCero==word.charAt(i)){
          help[i+1]=invertCero

          props.fails(fails)
      //    console.log('fails brokenline acierto',fails)
          props.arrayFails([arrayFail])

        //  console.log('arrayFail',arrayFail)

        }else{
           fallos=fallos +1

           prom=fallos/length

           if( prom == 1 ){
               setArrayFail([...arrayFail, {
                data: invertCero.toUpperCase(),
                id:fails+1,
              }]
            )
               setFails(fails+1)
               props.fails(fails+1)
               props.arrayFails([arrayFail])
            //   console.log('fails brokenline fails+1',fails +1)
            //   console.log('arrayFail',arrayFail)
           }else{
             props.fails(fails)
          //   console.log('fails brokenline failsNull',fails)
             props.arrayFails([arrayFail])

          //   console.log('arrayFail',arrayFail)
           }
      }

    }
    setCurrentAtemp(help.join(" "))

  }

    return (

      <View
        style={styles.container}
      >

          <Text style={styles.text} >
            {currenAttemp.toUpperCase()}
          </Text>
          <View  style={styles.contInput}>
            <TextInput

             style={styles.input}
             placeholder="  T   "
             onChangeText={(text)=> handleText(text)}
             value={invertCero2.toUpperCase()}
             / >
          </View>
     </View>


    );


}

const styles = StyleSheet.create({
  text:{
    fontSize:  30,

    marginLeft: 28,
    marginTop: 14,
    marginBottom: 14,


  },
  container:{
    flexDirection: "row",

      justifyContent: "space-between",

    backgroundColor: 'white',

    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
    marginTop: 8,

  },
  input:{
    color:'white',
    fontSize:  25,
    textAlign: 'center',


  },
  contInput:{
    margin: 6,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: "#469408",
    borderRadius: 12,


  }
});

export default Brokenline;

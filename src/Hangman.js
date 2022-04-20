import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, FlatList,Dimensions} from 'react-native';
const {width, height}=Dimensions.get('window')



const Hangman = ( props ) =>{

  getImgIcon = () => {

    if(props.img == 0){
      return require("./assets/ah0.jpg");
    }if(props.img == 1){
      return require("./assets/ah1.jpg");
    }if(props.img == 2){
      return require("./assets/ah2.jpg");
    }if(props.img == 3){
      return require("./assets/ah3.jpg");
    }if(props.img == 4){
      return require("./assets/ah4.jpg");
    }if(props.img == 5){
      return require("./assets/ah5.jpg");
    }if(props.img == 6){
      return require("./assets/ah6.jpg");
    }else{return require("./assets/ah6.jpg");}


  }

//console.log("letras hangMan",props.letters)

const br = `\n`






  return(

    <View  style={styles.container}   >

      <View style={styles.img}>
        <Image
        style={styles.image}
        source={getImgIcon()}
        />
      </View>
      <View>
        <Text style={styles.text2} >{props.img}</Text>
      </View>
     <View style={styles.contentFails}>

          {props.letters.map(letter=>(
              <View key={letter.id} >
                <Text style={styles.text}  >{letter.data }</Text>
              </View>
                ))}
      </View>
    </View>
  )
}

const styles=StyleSheet.create ({
  container:{
     flexDirection: "row",
     flex:1,
    //  justifyContent: "space-between",
      borderColor: "#029ACF",
      backgroundColor: "white",
      borderRadius: 12,


      //borderBottomColor: Colors.gris,
    //  borderBottomWidth: 1

  },
  row:{
    flexDirection:"row",
  },

  img:{

    alignItems: "center",
    padding: 0,
    borderColor: "#029ACF",
    marginLeft:20,
    marginRight:20

    //height: 100,
    //width: 200
  },
  image: {
    width: width/2,

    resizeMode: 'contain'
  },
  text:{
    fontSize:  18,
    color: "#EF7039",
    marginLeft :  35,
    fontWeight: 'bold'



  },
  text2:{
    fontSize:  22,
    color: "#FCB27A",
    marginLeft :  22,
    marginTop :  70,
    fontWeight: 'bold'


  },
  contentFails:{

    marginTop :  30


  },



});

export default Hangman;

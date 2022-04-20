import React,{useEffect,useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions,} from 'react-native';
import axios from 'axios';
const {width, height}=Dimensions.get('window')




const Definition = ( props ) =>{
  const basePixaUr='https://pixabay.com/api/?key=25695667-84143d64b2d627f804e9a270b&q='
  const talePixaUr='&image_type=illustration&orientation=vertical&per_page=7'
  const word=props.verb
  const [images, setImages] = useState('');
  const [images1, setImages1] = useState('');
  const [images2, setImages2] = useState('');
  const [images3, setImages3] = useState('');
  const [images4, setImages4] = useState('');
  const [images5, setImages5] = useState('');
  const [images6, setImages6] = useState('');



  const getImages= async () => {

    await axios.get(basePixaUr+word+talePixaUr).then((response2) => {

      setImages(response2.data.hits[0].previewURL)
      setImages1(response2.data.hits[1].previewURL)
      setImages2(response2.data.hits[2].previewURL)
      setImages3(response2.data.hits[3].previewURL)
      setImages4(response2.data.hits[4].previewURL)
      setImages5(response2.data.hits[5].previewURL)
      setImages6(response2.data.hits[6].previewURL)

    //  console.log(response2.data.hits[0].previewURL);
      }) .catch((err) => {
        console.log(err);
    });

  }

  const bringImg = () => {

    if(props.fails == 0){
      return images;
    }if(props.fails== 1){
      return images1;
    }if(props.fails == 2){
      return images2;
    }if(props.fails == 3){
      return images3;
    }if(props.fails == 4){
      return images4;
    }if(props.fails == 5){
      return images5;
    }if(props.fails == 6){
      return images6;
    }else{return images;}


  }


  useEffect(() => {

    getImages()

    }, [props.definition]);


        console.log('image', props);
        console.log('bring', bringImg());

  return(


    <View  style={styles.container}   >

      <View style={styles.contentText}>
        <Text style={styles.text}>{props.definition}</Text>


      </View>

      <Image
        style={{width: width/4, height:height/6, resizeMode: 'contain',   borderRadius: 8, marginLeft:20}}

        source={{uri:bringImg()}}
    />

    </View>
  )
}

const styles=StyleSheet.create ({
  container:{
    flexDirection: "row",
    //  justifyContent: "space-between",
      padding: 16,
      backgroundColor: "white",
      borderRadius: 12,

      marginLeft: 16,
      marginRight: 16,
      marginBottom: 8,
      marginTop: 8,
      borderWidth: 1,
      borderColor: "#029ACF",
      //borderBottomColor: Colors.gris,
    //  borderBottomWidth: 1

  },
  row:{
    flexDirection:"row",
  },
  text:{
    fontSize:  16,
    color: 'gray'
  },
  contentText:{
    width:width/2,
  },






});

export default Definition;

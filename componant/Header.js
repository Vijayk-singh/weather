
import React, { useState } from 'react'
import { StyleSheet,View , Text, Button, Alert, StatusBar} from 'react-native';

const Header = () => {
    const [city, setCity] =useState("New Delhi");
    const poup =()=>{
      Alert.alert("options");
    }
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      {/* <StatusBar  backgroundColor="white">abc</StatusBar> */}
      
      <Text style={styles.city}>{city} 
      {/* <Button onPress={poup} title="Options" margin="50px"
      
      /> */}
      </Text>
    
      <View style={{width:'30%', padding:5}}>
      
      </View>
    

    </View>
    </View>
  )
}

export default Header;
const styles = StyleSheet.create({
  header: {
    // flex:0.1,
    color:'#123dsd',
    borderColor:"white",
    
    paddingTop:10,
  },
  city:{
    color:'white',
    fontSize:30,
    padding:10

  },
  container:{
    container: { flex: 1, backgroundColor: "darkseagreen" }
  }
});

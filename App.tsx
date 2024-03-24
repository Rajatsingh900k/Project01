import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native';

//this method should always return a JSX element.
function App():JSX.Element{
  const isDarkMode=useColorScheme()==='dark';//works as bool var;
  return (
    <SafeAreaView style={[styles.container,styles.backGroundColor]}>
      <View>
        <Text style={isDarkMode?styles.whiteText:styles.darkText}>
          Hello, I am Rajat Singh.
          This is my First App in React-Native.
        </Text>
      </View>
    </SafeAreaView>
  )
};

//styling
const styles=StyleSheet.create(
  {
    container:{   
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      fontSize:50
    },
    whiteText:{
      color:'#FFFFFF',
      fontSize:50
    },
    darkText:{
      color:'#000000',
      fontSize:50 
    },
    backGroundColor:{
      backgroundColor:'#8B4D3E'
    }

  }
)
export default App;
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function SplashScreen(props){

    const viewStyles = [
        styles.container,
        { backgroundColor: '#6C63FF' }
      ];
      const textStyles = {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }

    return(
        <View style={viewStyles}>
            <Text style={textStyles}>
                WELCOME
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
import React, { useState } from 'react';
import { 
    Button, 
    Dimensions, 
    StyleSheet, 
    Text, TextInput,
    View 
} from 'react-native';
import {Image} from 'react-native'


export default function WelcomeScreen(props) {
    const screen = Dimensions.get('screen')

    const [storeID, setStoreID] = useState('')
    const [token, setToken] = useState('')

    return (
        <View style={styles.container}>
            <Image
                style={
                    [
                        styles.img,
                        {
                            overflow: 'visible', 
                            width: screen.width*0.8, 
                            height: screen.width*0.8/1.5, 
                            resizeMode: 'stretch'
                        }
                    ]
                }
                source={require('../../../assets/undraw_music.png')}
            />
            <View style={{paddingLeft: screen.width*0.1}}>
                <Text style={{fontWeight: 500, fontSize: 30, paddingBottom: 10}}>Welcome</Text>
                <Text style={{fontWeight: 300, fontSize: 24}}>Get started by </Text>
                <Text style={{fontWeight: 300, fontSize: 24}}>entering store code</Text>
            </View>

            <View style={{paddingLeft: screen.width*0.1}}> 
                <TextInput 
                    placeholder='Store ID'
                    value={storeID}
                    onChangeText={(text) => setStoreID(text)}
                />
                <TextInput 
                    placeholder='User token'
                    value={token}
                    onChangeText={(text) => setToken(text)}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    img: {
        alignSelf: 'center',
        marginBottom: 10
    },
    welcomeTxt: {
        paddingLeft: 50
    }
})
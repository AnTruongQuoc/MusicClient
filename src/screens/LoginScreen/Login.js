import React, { useState } from 'react';
import {
    Button,
    Dimensions,
    StyleSheet,
    Text, TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import { Image } from 'react-native'
import { useStateValue } from '../../StateProvider';


export default function Login(props) {
    const screen = Dimensions.get('screen')
    const [storeID, setStoreID] = useState(null)
    const [token, setToken] = useState(null)
    const [state, dispatch] = useStateValue()


    const setUserTokenAndStoreID = () => {
        dispatch({
            type: 'SET_USER_TOKEN',
            token: token
        })

        dispatch({
            type: 'SET_STORE_ID',
            storeID: storeID
        })
    }
    return (
        <View style={styles.container}>
            <Image
                style={
                    [
                        styles.img,
                        {
                            overflow: 'visible',
                            width: screen.width * 0.8,
                            height: screen.width * 0.8 / 1.5,
                            resizeMode: 'stretch'
                        }
                    ]
                }
                source={require('../../../assets/undraw_music.png')}
            />
            <View style={{ paddingLeft: screen.width * 0.1 }}>
                <Text style={{ fontWeight: '700', fontSize: 36, paddingBottom: 10 }}>Welcome</Text>
                <Text style={{ fontWeight: 'normal', fontSize: 24 }}>Get started by </Text>
                <Text style={{ fontWeight: 'normal', fontSize: 24 }}>entering store code</Text>
            </View>

            <View style={{ paddingLeft: screen.width * 0.1, paddingTop: 15 }}>
                <TextInput
                    placeholder='Store ID'
                    autoCapitalize='characters'
                    defaultValue={storeID}
                    onChangeText={text => setStoreID(text)}
                    style={[styles.top, { width: screen.width * 0.8 }]}
                />
                <TextInput
                    placeholder='User token'
                    autoCapitalize='characters'
                    defaultValue={token}
                    onChangeText={text => setToken(text)}
                    style={styles.bottom}
                />

                <View style={{
                    marginTop: 25,
                    
                }}>
                    <TouchableOpacity

                        style={{
                            borderRadius: 8,
                            backgroundColor: '#6C63FF',
                            padding: 12,
                            elevation: 8
                        }}

                        onPress={() => setUserTokenAndStoreID()}
                    >
                        <Text style={{alignSelf: 'center', color: '#fff'}}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    img: {
        alignSelf: 'center',
        marginBottom: 10
    },
    welcomeTxt: {
        paddingLeft: 50
    },
    top: {
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#33C7E8',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    middle: {
        flex: 1,
        backgroundColor: "beige",
        borderWidth: 1,
    },
    bottom: {
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderTopWidth: 0.1,
        borderColor: '#33C7E8',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
})
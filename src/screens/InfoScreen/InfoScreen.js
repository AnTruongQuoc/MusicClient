import React, { useState } from 'react';
import {
    Button,
    Dimensions,
    StyleSheet,
    Text, TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { useStateValue } from '../../StateProvider';

const screen = Dimensions.get('screen')

function InfoScreen(props) {
    const [state, dispatch] = useStateValue()

    return (
        <View style={styles.container}>
            <View style={styles.backBtn}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                    onPress={()=> props.navigation.navigate('Home')}
                >
                    <Image
                        style={{
                            overflow: 'visible',
                            width: 18,
                            height: 18,
                            resizeMode: 'stretch'
                        }}
                        source={require('../../../assets/back.png')}
                    />

                    <Text style={styles.btnBackText}>Request</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.noti}>
                <Text style={{
                    color: '#fff', 
                    fontSize: 22,
                    marginTop: 15,
                    marginBottom: 15
                    }}
                >
                    Information
                </Text>

                <View style={styles.displayInfo}>
                    <Text
                        style={{
                            color: '#fff',
                            width: 100
                        }}
                    >
                        Store ID
                    </Text>
                    <Text
                        style={{
                            color: '#fff',

                        }}
                    >
                        {state.storeID}
                    </Text>
                </View>
                
                <View style={[styles.displayInfo]}>
                    <Text
                        style={{
                            color: '#fff',
                            width: 100
                        }}
                    >
                        Customer ID
                    </Text>
                    <Text
                        style={{
                            color: '#fff',

                        }}
                    >
                        {state.customerID}
                    </Text>
                </View>

                <View style={[styles.displayInfo,{marginBottom: 15}]}>
                    <Text
                        style={{
                            color: '#fff',
                            width: 100
                        }}
                    >
                        Token
                    </Text>
                    <Text
                        style={{
                            color: '#fff',

                        }}
                    >
                        {state.userToken}
                    </Text>
                </View>
            </View>

            <Image
                style={
                    [
                        styles.img,
                        {
                            overflow: 'visible',
                            width: screen.width * 0.8,
                            height: screen.width * 0.8/1.1,
                            resizeMode: 'stretch'
                        }
                    ]
                }
                source={require('../../../assets/undraw_privacy.png')}
            />
        </View>
    )
}

export default InfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F0F0',
        flexDirection: 'column',

    },
    backBtn: {
        marginTop: screen.width * 0.1,
        marginLeft: screen.width * 0.1,
        flexDirection: 'row',
        width: screen.width * 0.8,
    },
    btnBackText: {
        color: '#000',
        fontSize: 18,
        marginLeft: 10
    },
    fixedBottom: {
        position: 'absolute',
        bottom: 0,
        width: screen.width,

    },
    noti: {
        elevation: 8,
        flexDirection: 'column',
        width: screen.width * 0.8,
        padding: 15,
        backgroundColor: '#6C63FF',
        borderRadius: 8,
        color: '#fff',
        marginLeft: screen.width * 0.1,
        marginTop: screen.width * 0.1
    },
    displayInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    img: {
        alignSelf: 'center',
        marginTop: screen.width * 0.1
    },
})
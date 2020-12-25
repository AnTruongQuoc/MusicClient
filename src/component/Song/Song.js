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

import {Divider} from 'react-native-paper'

const screen = Dimensions.get('screen')

function Song(props) {
    return (
        <View style={styles.container}>
            <Image
                style={{
                    overflow: 'visible',
                    width: 20,
                    height: 20,
                    resizeMode: 'stretch'
                }}
                source={require('../../../assets/music_2.png')}
            />
            <View style={styles.textContainer}>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 14,
                        fontWeight: 'bold'
                    }}
                >
                    {props.data.name}
                </Text>
                <Text
                    style={{
                        color: '#EE9E8E',
                        fontSize: 12,
                        marginTop: 5,
                        marginBottom: 15
                    }}
                >
                    {props.data.author}
                </Text>
                <Divider />
            </View>
        </View>
    )
}

export default Song

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: screen.width * 0.1,
        paddingRight: screen.width * 0.1,
        paddingTop: 5,
        paddingBottom: 10
    },
    textContainer: {
        paddingLeft: 20,
        width: 100 +'%'
    }
})
import React, { useState } from 'react';
import {
    Button,
    Dimensions,
    StyleSheet,
    Text, TextInput,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import { Dialog, Portal, Paragraph } from 'react-native-paper';
import { Button as ButtonPaper } from 'react-native-paper'
import { Image } from 'react-native';
import { useStateValue } from '../../StateProvider';


export default function Login(props) {
    const screen = Dimensions.get('screen')
    const [storeID, setStoreID] = useState(null)
    const [token, setToken] = useState(null)
    const [customerID, setCustomerID] = useState(null)
    const [state, dispatch] = useStateValue()

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const setUserTokenAndStoreID = async () => {
        setLoading(true)

        var URL_LOGIN = 'https://getsong.herokuapp.com/login.php'
            + `?shop=${storeID}`
            + `&customer=${customerID}`
            + `&token=${token}`

        let login = await fetch(URL_LOGIN)
            .then(response => {
                return response.text()
            })
            .then(text => {
                return text
            })
            .catch(error => {
                Alert.alert('Error 500')
                return null
            })

        if (login) {
            let response = JSON.parse(login)

            if (response?.status === '200') {
                dispatch({
                    type: 'SET_USER_TOKEN',
                    token: token
                })
                dispatch({
                    type: 'SET_USER_ID',
                    customerID: customerID
                })
                dispatch({
                    type: 'SET_STORE_ID',
                    storeID: storeID
                })
            }
            else if (response?.status === '404') {
                setMessage(response?.message)
                showDialog()
            }
        }

        setLoading(false)

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
                    placeholder='Customer ID'
                    autoCapitalize='characters'
                    defaultValue={customerID}
                    onChangeText={text => setCustomerID(text)}
                    style={styles.middle}
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
                    

                    <ButtonPaper
                        title='SUBMIT'
                        loading={loading}
                        mode="contained"
                        disabled={loading}
                        onPress={() => setUserTokenAndStoreID()}
                        style={{
                            borderRadius: 8,
                            backgroundColor: loading ? '#a19bff': '#6C63FF',
                            padding: 5,
                            elevation: 8
                        }}
                    >
                        <Text style={{ alignSelf: 'center', color: loading ? '#303030' : '#fff' }}>
                            {
                                loading ? 'WAITING' : 'SUBMIT'
                            }
                        </Text>
                    </ButtonPaper>
                </View>
            </View>

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Notice</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>{message ? message : ''}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button title='Close' onPress={hideDialog} />
                    </Dialog.Actions>
                </Dialog>
            </Portal>

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
    middle: {
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderTopWidth: 0.1,
        borderColor: '#33C7E8',
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
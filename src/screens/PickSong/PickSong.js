import React, { useState, useEffect } from 'react';
import {
    //Button,
    Dimensions,
    StyleSheet,
    Text, TextInput,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Modal,
    Alert
} from 'react-native';
import {Button} from 'react-native-paper'
import { Divider } from 'react-native-paper'
import Song from '../../component/Song/Song';
import { useStateValue } from '../../StateProvider';



//Get size of phone screen
const screen = Dimensions.get('screen')

function PickSong(props) {

    const [state, dispatch] = useStateValue();

    const [quantity, setQuantity] = useState(state.song?.length);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [songName, setSongName] = useState(null)

    useEffect(() => {
        setQuantity(state.song?.length)
    }, [state])

    const getSongFromAPI = async() => {
        setLoading(true)
        let URL_GETSONG = 'https://getsong.herokuapp.com/api.php'
                        + `?customer=1`
                        + `&shop=${state.storeID}`
                        + `&token=${state.userToken}`
                        + `&keyword=${songName}`

        //console.log(URL_GETSONG)
        let data = await fetch(URL_GETSONG)
        .then(response => {
           return response.text()
        })
        .then(text=> {
            return text
        })
        .catch(error => {
            return error
        })

        //console.log('DATA: ', data)
        if(data){
            let json = JSON.parse(data)
            
            if(!json.message){
                let newsong = {
                    name: json.song,
                    author: json.singer
                }
                dispatch({
                    type: 'ADD_SONG',
                    newsong: newsong
                })
                setLoading(false)
            }
            else {
                setLoading(false)
            }
        }

        setModalVisible(false)
        setSongName('')
    }

    const logOut = () => {
        dispatch({
            type: 'SET_USER_LOG_OUT',
            userToken: null,
            storeID: null
        })
    }

    const handleOpenAddSong = () => {
        if(quantity === 5){
            Alert.alert('Your token is out of request. ')
        }
        else {
            setModalVisible(true)
        }
    }

    return (
        <View style={styles.container}>

            <Modal
                animationType="slide"
                presentationStyle="overFullScreen"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Closing add song');
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.boxAddSong}>
                        <Text
                            style={{
                                fontSize: 26,
                                fontWeight: 'bold',
                            }}
                        >
                            Song name
                        </Text>
                        <Text>Please input song name that you want to listen</Text>
                        <TextInput
                            placeholder='Song Name (Ex: Havana)'
                            defaultValue={songName}
                            onChangeText={(text) => setSongName(text)}
                            style={styles.inputField}
                        />
                        <Button 
                            title='SEND'
                            loading={loading}
                            mode="contained"
                            onPress={() => getSongFromAPI()}
                            style={{
                                borderRadius: 8
                            }} 
                        > 
                            SEND
                        </Button>
                    </View>
                </View>
            </Modal>

            <View>
                <View
                    style={{
                        paddingTop: screen.width * 0.1,
                        paddingLeft: screen.width * 0.1,
                        paddingBottom: screen.width * 0.08,
                        backgroundColor: '#F6F0F0'
                    }}
                >
                    <View style={styles.noti}>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                marginBottom: 10
                            }}
                        >
                            Request music</Text>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 14
                            }}
                        >
                            Request any kind of songs you want to listen</Text>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 14
                            }}
                        >
                            Only 5 request for every token </Text>
                    </View>
                </View>
                <View >
                    <View style={{
                        paddingLeft: screen.width * 0.1,
                        backgroundColor: '#fff',
                        paddingTop: 10,
                        paddingBottom: 10,
                    }}>
                        <Text
                            style={{
                                color: '#6C63FF',
                                fontWeight: '500',
                                fontSize: 16
                            }}
                        >Requested List</Text>
                    </View>

                    <View style={{
                        paddingLeft: screen.width * 0.1,
                        paddingTop: 10,
                        paddingBottom: 10,
                        backgroundColor: '#F6F0F0'
                    }}>
                        <Text
                            style={{
                                color: '#FF0000',
                                fontWeight: '500',
                                fontSize: 14,
                            }}
                        >{5 - quantity + ' request left'}</Text>
                    </View>
                </View>



                <View >

                    <ScrollView

                        style={{
                            backgroundColor: '#fff',
                            height: screen.height - 370
                        }}
                    >
                        {
                            state.song?.map((item, index) => {
                                console.log('token: ' + state.userToken)
                                return (
                                    <Song key={index} data={item} />
                                )
                            })
                        }
                    </ScrollView>
                </View>



            </View>

            <View style={styles.fixedBottom} >
                <Divider />

                <View style={styles.bottomBtn}>
                    <TouchableOpacity

                        onPress={() => props.navigation.navigate('Infomation')}
                    >
                        <Text
                            style={{
                                color: '#1CC900',
                                fontSize: 18
                            }}
                        >
                            Info
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#6C63FF',
                            borderRadius: 50,
                            width: 45,
                            height: 45,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => handleOpenAddSong()}
                    >
                        <Image
                            style={{
                                overflow: 'visible',
                                width: 20,
                                height: 20,
                                resizeMode: 'stretch'
                            }}
                            source={require('../../../assets/plus_2.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{

                        }}
                        onPress={() => logOut()}
                    >
                        <Text
                            style={{
                                color: '#FF0000',
                                fontSize: 18,
                            }}
                        >
                            Log out
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}

export default PickSong

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    noti: {
        elevation: 8,
        flexDirection: 'column',
        width: screen.width * 0.8,
        padding: 15,
        backgroundColor: '#6C63FF',
        borderRadius: 8,
        color: '#fff',
    },
    fixedBottom: {
        position: 'absolute',
        bottom: 0,
        width: screen.width,
        backgroundColor: '#fff'
    },
    bottomBtn: {
        marginLeft: screen.width * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: screen.width * 0.8,
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15
    },
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    boxAddSong: {
        width: screen.width * 0.8,
        elevation: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        padding: 15,
        paddingTop: 25,
        paddingBottom: 25
    },
    inputField: {
        padding: 8,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#33C7E8',
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 15
    },
})
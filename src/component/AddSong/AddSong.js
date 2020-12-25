import React, { useState } from 'react';
import {
    Button,
    Dimensions,
    StyleSheet,
    Text, TextInput,
    View,
    TouchableOpacity,
    Image,
    Modal,
    Alert
} from 'react-native';

const screen = Dimensions.get('screen')

function AddSong(props) {
    const [modalVisible, setModalVisible] = useState(true);
    console.log(props + ' - modalVisible: ' + modalVisible)
    return (

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
                <Button title='ADD' onPress={() => setModalVisible(false)}/>
                    
            </View>
        </Modal>

    )
}
export default AddSong

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        margin: 0,
        alignSelf: 'center',
        justifyContent: 'center'
    }
})
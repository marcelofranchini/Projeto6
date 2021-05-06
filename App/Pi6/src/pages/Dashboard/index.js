import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../config/api'
import {
    SafeAreaView,
    ScrollView,
    TextInput, View, TouchableOpacity, Alert, StyleSheet, FlatList, Text, SectionList, Pressable, Modal
} from 'react-native';
import Header from '../../components/header'
import { Picker } from '@react-native-picker/picker';
import { Icon } from 'react-native-elements'
import Icone from 'react-native-vector-icons/MaterialIcons';
Icone.loadFont();


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        padding: 4,

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#007ac1",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold'
    }

});
let a = 1

const Dashboard = (props) => {
    const [status, setStatus] = useState('')
    const [name, setName] = useState('')
    const [modalVisible, setModalVisible] = useState(false);



    return (

        <View style={{ flex: 1 }}>
            <View style={{ height: '10%', width: '100%', backgroundColor: '#007ac1', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Nome da pessoa que está retirando</Text>
                            <TextInput
                                onChangeText={text => setName(text)}
                                //value={''}
                                autoCompleteType='cc-number'
                                placeholder="Quem está retirando"
                                keyboardType="numeric"
                                style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}
                            />
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cadastrar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <Icone name="menu" size={30} color="black" />

                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold' }}>Correspondências</Text>
                <TouchableOpacity onPress={() => null}>
                    <Icon
                        name='bell'
                        type='font-awesome-5'
                        color='black'
                        size={30}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 22, left: 18, position: 'absolute', width: 16, height: 16, backgroundColor: '#ffff', borderRadius: 8 }}>
                        <Text style={{ marginBottom: 4, fontWeight: 'bold' }}>1</Text>
                    </View>

                </TouchableOpacity>

            </View>

            <View style={styles.container}>
                <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ width: '15%', fontWeight: 'bold' }}>Ap/Bloco</Text>
                    <Text style={{ width: '20%', fontWeight: 'bold' }}>Remetente</Text>
                    <Text style={{ width: '20%', fontWeight: 'bold' }}>Destinatário</Text>
                    <Text style={{ width: '30%', fontWeight: 'bold', paddingLeft: 14 }}>Retirado</Text>
                    <Text style={{ width: '15%', fontWeight: 'bold' }}>Data</Text>
                </View>


                <FlatList
                    data={[
                        { key: 'Devin', name: 'Devin' },
                        { key: 'Devin', name: 'Devin' },
                        { key: 'Devin', name: 'Devin' },
                        { key: 'Devin', name: 'Devin' },


                    ]}
                    renderItem={({ item }) =>

                        <View style={{ marginBottom: 10, borderColor: '#007ac1', borderBottomWidth: 4, width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ width: '15%' }}>82/10</Text>
                            <Text style={{ width: '20%' }}>Mercado Livre Sa</Text>
                            <Text style={{ width: '20%' }}>Marcelo Franchini</Text>


                            {
                                a == 1 ?

                                    <TouchableOpacity style={{ width: '25%', color: 'black', padding: 14 }} onPress={() => setModalVisible(true)}>
                                        {name !== '' ?

                                            < Text style={{ color: 'green' }}>{name}</Text>
                                            :
                                            <Text style={{ color: 'red' }}>Não</Text>

                                        }
                                    </TouchableOpacity>

                                    :
                                    <Text style={{ width: '25%', color: 'green', paddingLeft: 14 }}>{name}</Text>

                            }
                            <Text style={{ width: '25%' }}>20/04/2021</Text>
                        </View>

                    }
                />
            </View>
        </View>
    );
};






export default Dashboard;

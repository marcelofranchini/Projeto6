import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text, TextInput, View, TouchableOpacity, Alert, Button
} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import api from '../../config/api'
import Header from '../../components/header'
import { Picker } from '@react-native-picker/picker';
import { Icon } from 'react-native-elements'
import Icone from 'react-native-vector-icons/MaterialIcons';
Icone.loadFont();



const CadastroCorrespondencia = (props) => {
    const [remetente, setRemetente] = useState('')
    const [destinatario, setDestinario] = useState('')
    const [ap, setAp] = useState('')
    const [bloco, setBloco] = useState('')

    function cadastrar() {

        api.post('/users', {
            "email": email,
            "password": password,
            "name": name

        }).then(resp => {
            if (resp.status === 200) {
                alert("Cadastro Realizado com Sucesso")
                props.navigation.navigate('Home')
            } else {
                alert("Cadastro não realizado")

            }

        }).catch(error => {

            console.log('erro' + error)
        })

    }

    return (

        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <View style={{ height: '10%', width: '100%', backgroundColor: '#007ac1', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <Icone name="menu" size={30} color="black" />

                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold' }}>Cadastro Correspondência</Text>
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

            <ScrollView>
                <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>Destinatário</Text>
                    <TextInput
                        onChangeText={text => setDestinario(text)}
                        //value={''}
                        placeholder="Destinatário"
                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}
                    />
                    <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>Remetente</Text>
                    <TextInput
                        onChangeText={text => setRemetente(text)}
                        //value={''}
                        placeholder="Remetente"
                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}
                    />
                    <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>Apartamento</Text>
                    <Picker
                        selectedValue={'Selecione'}
                        onValueChange={(itemValue, itemIndex) =>
                            setAp(itemValue)
                        }
                        style={{ alignItems: 'center', width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}


                    >
                        <Picker.Item label="Selecione" value="" />
                        <Picker.Item label="Ap 01" value="01" />
                        <Picker.Item label="Ap 02" value="02" />
                        <Picker.Item label="Ap 11" value="11" />
                        <Picker.Item label="Ap 12" value="12" />
                        <Picker.Item label="Ap 13" value="13" />
                        <Picker.Item label="Ap 14" value="14" />
                        <Picker.Item label="Ap 21" value="21" />
                        <Picker.Item label="Ap 22" value="22" />
                        <Picker.Item label="Ap 23" value="23" />
                        <Picker.Item label="Ap 24" value="24" />
                        <Picker.Item label="Ap 31" value="31" />
                        <Picker.Item label="Ap 32" value="32" />
                        <Picker.Item label="Ap 33" value="33" />
                        <Picker.Item label="Ap 34" value="34" />
                        <Picker.Item label="Ap 41" value="41" />
                        <Picker.Item label="Ap 42" value="42" />
                        <Picker.Item label="Ap 43" value="43" />
                        <Picker.Item label="Ap 44" value="44" />
                        <Picker.Item label="Ap 51" value="51" />
                        <Picker.Item label="Ap 52" value="52" />
                        <Picker.Item label="Ap 53" value="53" />
                        <Picker.Item label="Ap 54" value="54" />
                        <Picker.Item label="Ap 61" value="61" />
                        <Picker.Item label="Ap 62" value="62" />
                        <Picker.Item label="Ap 63" value="63" />
                        <Picker.Item label="Ap 64" value="64" />
                        <Picker.Item label="Ap 71" value="71" />
                        <Picker.Item label="Ap 72" value="72" />
                        <Picker.Item label="Ap 73" value="73" />
                        <Picker.Item label="Ap 74" value="74" />
                        <Picker.Item label="Ap 81" value="81" />
                        <Picker.Item label="Ap 82" value="82" />
                        <Picker.Item label="Ap 83" value="83" />
                        <Picker.Item label="Ap 84" value="84" />

                    </Picker>
                    <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>Bloco</Text>


                    <Picker
                        selectedValue={'Selecione'}
                        onValueChange={(itemValue, itemIndex) =>
                            setBloco(itemValue)
                        }
                        style={{ marginBottom: 20, alignItems: 'center', width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}

                    >
                        <Picker.Item label="Selecione" value="" />
                        <Picker.Item label="Bloco 1" value="1" />
                        <Picker.Item label="Bloco 2" value="2" />
                        <Picker.Item label="Bloco 3" value="3" />
                        <Picker.Item label="Bloco 4" value="4" />
                        <Picker.Item label="Bloco 5" value="5" />
                        <Picker.Item label="Bloco 6" value="6" />
                        <Picker.Item label="Bloco 7" value="7" />
                        <Picker.Item label="Bloco 8" value="8" />
                        <Picker.Item label="Bloco 9" value="9" />
                        <Picker.Item label="Bloco 10" value="10" />
                    </Picker>
                    <Button
                        title="Cadastrar"
                        onPress={cadastrar}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default CadastroCorrespondencia;

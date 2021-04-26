import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text, TextInput, View, TouchableOpacity, Alert, Button
} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import api from '../../config/api'
import Header from '../../components/header'


const CadastroCorrespondencia = (props) => {
    const [remetente, setRemetente] = useState('')
    const [apartamento, setApartamento] = useState('')
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

        <SafeAreaView style={{ backgroundColor: '#007ac1', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Header title='Cadastro Correspondência' />
            <ScrollView>
                <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginBottom: 5 }}>Remetente</Text>
                    <TextInput
                        onChangeText={text => setRemetente(text)}
                        //value={''}
                        placeholder="Remetente"
                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}
                    />
                    <Text style={{ marginBottom: 5 }}>Apartamento</Text>
                    <TextInput
                        onChangeText={text => setApartamento(text)}
                        placeholder="AP"
                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}
                    />
                    <Text style={{ marginBottom: 5 }}>Bloco</Text>
                    <TextInput
                        onChangeText={text => setBloco(text)}
                        placeholder="Bloco"
                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}
                    />
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

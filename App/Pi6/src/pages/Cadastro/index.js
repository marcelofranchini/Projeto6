import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text, TextInput, View, TouchableOpacity, Alert
} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import api from '../../config/api'


const Cadastro = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')



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

        <SafeAreaView style={{ backgroundColor: '#D81F26', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <ScrollView>
                <View style={{ marginTop: 80, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginBottom: 5 }}>Nome</Text>
                    <TextInput
                        onChangeText={text => setName(text)}
                        //value={''}
                        autoCompleteType='name'
                        placeholder="Seu Nome"
                        keyboardType="numeric"
                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}

                    />
                    <Text style={{ marginBottom: 5 }}>Email</Text>
                    <TextInput
                        onChangeText={text => setEmail(text)}
                        //={text}
                        autoCompleteType='email'
                        keyboardType='email-address'
                        placeholder="Seu Email"

                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}


                    />
                    <Text style={{ marginBottom: 5 }}>Senha</Text>
                    <TextInput
                        onChangeText={text => setPassword(text)}
                        //value={''}
                        autoCompleteType='password'
                        placeholder="Sua Senha"
                        keyboardType="numeric"
                        secureTextEntry={true}
                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}
                    />

                    <TouchableOpacity onPress={cadastrar}>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default Cadastro;

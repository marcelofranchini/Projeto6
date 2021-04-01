import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    SafeAreaView,
    ScrollView,
    Text, TextInput, View, TouchableOpacity, Alert
} from 'react-native';
import api from '../../config/api'


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    function logar() {
        api.post('/sessions', {
            "email": email,
            "password": password

        }).then(resp => {
            console.log(resp.status)
            if (resp.status == 200) {
                setToken(resp.data.token)

                props.navigation.navigate('Home')
            }


        }).catch(error => {
            alert('login não realizado')
            console.log('erro' + error)
        })
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#D81F26', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <ScrollView>
                <View style={{ marginTop: 180, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginBottom: 5 }}>Usuário</Text>
                    <TextInput
                        onChangeText={text => setEmail(text)}
                        //={text}
                        autoCompleteType='email'
                        placeholder="Seu Email"
                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}
                    />

                    <Text style={{ marginBottom: 5 }}>Senha</Text>
                    <TextInput
                        onChangeText={text => setPassword(text)}
                        autoCompleteType='password'
                        placeholder="Sua Senha"
                        keyboardType="numeric"
                        secureTextEntry={true}
                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}
                    />


                    <TouchableOpacity onPress={logar}>
                        <Text>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Cadastro')}>
                        <Text>Cadastra-se</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default Login;

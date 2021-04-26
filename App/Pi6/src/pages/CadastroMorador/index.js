import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text, TextInput, View, TouchableOpacity, Alert, Button
} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import api from '../../config/api'
import Header from '../../components/header'



const Cadastro = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
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
            <Header title='Cadastro Morador' />
            <ScrollView>
                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginBottom: 5 }}>Nome</Text>
                    <TextInput
                        onChangeText={text => setName(text)}
                        //value={''}
                        autoCompleteType='name'
                        placeholder="Nome"
                        keyboardType="numeric"
                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}
                    />
                    <Text style={{ marginBottom: 5 }}>CPF</Text>
                    <TextInput
                        onChangeText={text => setCpf(text)}
                        //value={''}
                        autoCompleteType='cc-number'
                        placeholder="Cpf"
                        keyboardType="numeric"
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
                    <Text style={{ marginBottom: 5 }}>Email</Text>
                    <TextInput
                        onChangeText={text => setEmail(text)}
                        //={text}
                        autoCompleteType='email'
                        keyboardType='email-address'
                        placeholder="Email"
                        style={{ marginBottom: 20, width: 300, height: 36, backgroundColor: '#ffff', color: 'Black', borderRadius: 4 }}
                    />
                    <Text style={{ marginBottom: 5 }}>Senha</Text>
                    <TextInput
                        onChangeText={text => setPassword(text)}
                        //value={''}
                        autoCompleteType='password'
                        placeholder="Senha"
                        keyboardType="numeric"
                        secureTextEntry={true}
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


export default Cadastro;

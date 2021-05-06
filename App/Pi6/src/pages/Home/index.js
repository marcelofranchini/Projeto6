import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    SafeAreaView,
    ScrollView,
    Text, TextInput, View, TouchableOpacity, Alert
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import api from '../../config/api'
import CadastroMorador from '../CadastroMorador'
import Dashboard from '../Dashboard'
import CadastroCorrespondencia from '../CadastroCorrespondencia';
import Login from '../Login';




const Drawer = createDrawerNavigator();
let a = 1 // se é adm ou nao


const Home = (props) => {

    return (
        <Drawer.Navigator initialRouteName="Correspondências">

            <Drawer.Screen name="Correspondências" component={Dashboard} />
            {
                a === 1 ?
                    <>
                        <Drawer.Screen name="Cadastro Morador" component={CadastroMorador} />
                        <Drawer.Screen name="Cadastro Correspondência" component={CadastroCorrespondencia} />
                    </>
                    :
                    null
            }
            <Drawer.Screen name="Sair" component={Login} />

        </Drawer.Navigator>

    );
};


export default Home;

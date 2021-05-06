import React from 'react';
import {
    Text, View, TouchableOpacity
} from 'react-native';
import Home from '../../pages/Home'
import Icone from 'react-native-vector-icons/MaterialIcons';
Icone.loadFont();

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'



const Header = ({ title, open }) => {
    return (
        <View style={{ height: '10%', width: '100%', backgroundColor: '#007ac1', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <TouchableOpacity onPress={open()}>
                <Icone name="menu" size={30} color="black" />

            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
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

    );
};




export default Header;

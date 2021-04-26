import React from 'react';
import {
    Text, View
} from 'react-native';
import Home from '../../pages/Home'
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


const Header = ({ title, navigation }) => {
    return (
        <View style={{ height: '10%', width: '100%', backgroundColor: '#007ac1', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Icon name="menu" size={30} color="#900" onPress={() => navigation.openDrawer()} />
            <Text >{title}</Text>
            <Text></Text>
            {/* <Home /> */}
        </View>

    );
};




export default Header;

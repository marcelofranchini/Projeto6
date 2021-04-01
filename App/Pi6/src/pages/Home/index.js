import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    SafeAreaView,
    ScrollView,
    Text, TextInput, View, TouchableOpacity, Alert
} from 'react-native';
import api from '../../config/api'



const Home = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Home</Text>

                </View>
            </ScrollView>
        </SafeAreaView>

    );
};


export default Home;

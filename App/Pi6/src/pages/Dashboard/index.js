import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../config/api'
import {
    SafeAreaView,
    ScrollView,
    TextInput, View, TouchableOpacity, Alert, StyleSheet, FlatList, Text, SectionList
} from 'react-native';
import Header from '../../components/header'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
let a = 1

const Dashboard = (props) => {
    return (

        <View style={{ flex: 1 }}>
            <Header title='Correspondência' />
            <View style={styles.container}>
                <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ width: '30%' }}>Remetente</Text>
                    <Text style={{ width: '30%' }}>Retirado</Text>
                    <Text style={{ width: '20%' }}>Status</Text>
                    <Text style={{ width: '30%' }}>Data</Text>
                </View>

                <FlatList
                    data={[
                        { key: 'Devin', name: 'Devin' },
                        { key: 'Devin', name: 'Devin' },

                    ]}
                    renderItem={({ item }) =>

                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ width: '30%' }}>Mercado Livre</Text>
                            <Text style={{ width: '30%' }}>Marcelo Franchini</Text>

                            <Text style={{ width: '20%' }}>Sim</Text>

                            <Text style={{ width: '30%' }}>20/04/2021</Text>
                        </View>

                    }
                />
            </View>
        </View>
    );
};




export default Dashboard;

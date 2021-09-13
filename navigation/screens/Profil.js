import * as React from 'react';
import { View, Text } from 'react-native';
import App from "./Profil/App";
import "./Profil/Profil.css";


export default function Profil({ navigation }) {
    return (


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center-top' }}>
            <App></App>
        </View>


    );
}
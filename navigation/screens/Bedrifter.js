import * as React from 'react';
import { View, Text } from 'react-native';
import App from "./Bedrifter/App"
import "./Bedrifter/Bedrifter.css";


export default function Bedrifter({ navigation }) {
    return (


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center-top' }}>
            <App></App>
        </View>


    );
}
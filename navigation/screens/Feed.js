import * as React from 'react';
import { View, Text} from 'react-native';
import App from "./Feed/App";
import "./Feed/Feed.css";


export default function Feed({ navigation }) {
    return (


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center-top' }}>
            <App></App>
        </View>


    );
}
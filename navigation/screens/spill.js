import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import App from './App'
import Havvind from './Fagmoduler/Havvind';


export default function Spill({ navigation }) {
    return (
        <div>
            <h1> Her kan du velge mellom de ulike spillene</h1>
            <Havvind>
                
            </Havvind>

        </div>
    );
}
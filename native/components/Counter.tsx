import React, {useState} from "react";
import { Text, Button, View } from "react-native";
import styles from "@/app/(tabs)/styles";

export default props => {
    const [number, setNumber] = useState(0);

    const inc = (number:number):void => {
        setNumber(prevNumber => prevNumber + 1)
    };
    const dec = (number:number):void => {
        setNumber(prevNumber => prevNumber - 1)
    };

    return (
        <>
            <Text style={styles.giantText} >{number}</Text>
            <View style={styles.row} >
                <View style={styles.button}>
                    <Button title="+" onPress={() => {inc(number)}} color="#fff" />
                </View>
                <View style={styles.button}>
                    <Button title={'-'} onPress={() => {dec(number)}} color="#fff" />
                </View>
            </View>
        </>
    )
}
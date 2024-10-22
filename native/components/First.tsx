import React from "react";
import { Text, StyleSheet, View } from 'react-native'
import styles from "@/app/(tabs)/styles";

export default () => {
    // console.warn("Opaa!")
    return (
        <View>
            <Text style={styles.bigText}>
                (My first Component)
            </Text>
        </View>
    )
}
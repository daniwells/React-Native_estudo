import React from "react";
import { Text } from "react-native";
import styles from "@/app/(tabs)/styles";

interface MinMaxProps {
    max: string,
    min: string,
}

const MinMax: React.FC<MinMaxProps> = (props) => {
    console.warn(props)
    return (
        <Text style={[styles.giantText, styles.white]}>
            The {props.max} value is geatest than {props.min} value!
        </Text>
    )
}

export default MinMax;
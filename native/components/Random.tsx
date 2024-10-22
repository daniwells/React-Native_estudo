import React from "react";
import { Text } from "react-native";
import styles from "@/app/(tabs)/styles";

interface RandomProps{
    min: number,
    max: number,
}

const Random: React.FC<RandomProps> = (props) => {
    const {min, max}: RandomProps = props; // DESTRUCTURING
    const random: number = Math.floor(Math.random() * (max - min)) + min;

    return (
        <Text style={[styles.giantText, styles.white]}>
            The random value between {min} and {max} is: <Text>{random}</Text>
        </Text>
    )
}

export default Random;
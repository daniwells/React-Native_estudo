import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Comp(){
    return <Text style={styles.text}>Comp Default</Text>
}

function Comp1(){
    return <Text style={styles.text}>Comp 1</Text>
}

function Comp2(){
    return <Text style={styles.text}>Comp 2</Text>
}

const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      color: '#fff',
    },
  });

export {Comp1, Comp2};
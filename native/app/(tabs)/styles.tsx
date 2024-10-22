const { StyleSheet } = require("react-native")

export default StyleSheet.create({
    centerRowM: {
        margin: 'auto',
    },
    input: {
        border: '1px solid black',
        padding: 30,
        width: 'full',
    },
    button: {
        backgroundColor: "#20232a",
        width: 80,
        paddingInline: 35,
        paddingBlock: 30,
    },
    row:{
        display: 'flex',
        gap: 5,
        flexDirection: 'row'
    },
    white:{
        color: '#000',
    },
    giantText: {
        fontSize: 32,
        textAlign: 'center',
        padding: 30,
    },
    bigText: {
        fontSize: 24,
    },
    mediumText: {
        fontSize: 16,
    },
    tinyText: {
        fontSize: 12,
    },
})
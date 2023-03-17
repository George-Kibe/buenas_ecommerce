import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    root:{
        padding:20,
        marginVertical:20,
    },
    row:{
        marginVertical:5
    },
    label:{
        fontSize:20,
        fontWeight:"bold"
    },
    input:{
        backgroundColor:"white",
        padding:5,
        marginVertical:5,
        fontSize: 20,
        height:40,
        borderWidth:1,
        borderColor:"lightgray",
        borderRadius:3

    },
    errorLabel:{
        color:"red",
    }
})

export default styles;
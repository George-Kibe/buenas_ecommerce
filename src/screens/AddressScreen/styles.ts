import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    root:{
        padding:10,
    },
    row:{
        marginVertical:5
    },
    label:{
        fontSize:16,
        fontWeight:"bold"
    },
    input:{
        backgroundColor:"white",
        padding:5,
        marginVertical:5,
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
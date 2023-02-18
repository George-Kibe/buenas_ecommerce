import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        padding:10,
        backgroundColor:"white",
        marginBottom:20
    },
    title:{
        color:"black"
    },
    image:{

    },
    description:{
        marginVertical:10,
        lineHeight:20,
        color:"#000"
    },
    price:{
        fontSize:18,
        fontWeight:"bold"
      },
      oldPrice:{
        fontSize:12,
        fontWeight:"normal",
        textDecorationLine:"line-through"
      }

})

export default styles;
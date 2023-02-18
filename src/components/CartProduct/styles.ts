import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    page:{
      
    },
    root:{
      flexDirection: "row",
      borderWidth:1,
      borderColor:"#d1d1d1",
      borderRadius:10,
      backgroundColor:"#fff",
      marginVertical:5
    },
    image:{
      flex:2,
      height:150,
      borderRadius:10,
      resizeMode:"contain",
    },
    rightContainer:{
      padding:10,
      flex:3
    },
    title:{
      fontSize:18,
    },
    rating:{
      flexDirection:"row",
      alignItems:"center",
      marginVertical:5
    },
    star:{
      margin:2,
    },
    price:{
      fontSize:18,
      fontWeight:"bold"
    },
    oldPrice:{
      fontSize:12,
      fontWeight:"normal",
      textDecorationLine:"line-through"
    },
    quantityContainer:{
      marginVertical:5,
    },
  })
  
export default styles;
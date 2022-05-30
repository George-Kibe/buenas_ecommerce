import { Pressable, Text } from 'react-native'
import { StyleSheet } from "react-native"


interface ButtonProps {
    text:string,
    onPress: () => void;
}
const Button = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable style={styles.root} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    root:{
        backgroundColor:"#e47911",
        margin:10,
        height:35,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        borderWidth:1,
        borderColor:"#a15e1b"
    },
    text:{
        fontSize:18,
    }
})

export default Button
import { ScrollView, Platform, View, Text, TextInput, Alert, KeyboardAvoidingView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import countryList from "country-list"
import Button from '../../components/Button'
import { useState } from 'react'
import { DataStore, Auth } from 'aws-amplify'
import { Order, OrderProduct, CartProduct } from '../../models'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

const AddressScreen = () => {
  const navigation = useNavigation()
  const countries = countryList.getData();
  const [country, setCountry] = useState(countries[0].name);
  const [fullname, setFullname] = useState("")
  const [fullnameError, setFullnameError] = useState("")
  
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneNumberError, setPhoneNumberError] = useState("")

  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")

  const validateFullname =() =>{
    if(!fullname){
        Alert.alert("Please fill in the Fullname Field"); return;
    }
    if (fullname.length < 5){
        setFullnameError("Name is too Short"); return;
    }
  }
  const validatePhoneNumber = () =>{
    //const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
    const re=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    // check if the phone number is valid
    let result = phoneNumber.match(re);
    //console.warn(result)
    if(result){
        return
    }else{
        setPhoneNumberError("Phone Number is Invalid or not Allowed")
    }
  }
  const saveOrder = async () =>{
    const userData = await Auth.currentAuthenticatedUser();
    const userSub = userData.attributes.sub
    //create a new order
    const newOrder = await DataStore.save(
        new Order({
            userSub:userSub,
            //orderProduct:orderproducts,
            fullname:fullname,
            phoneNumber:phoneNumber,
            country:country,
            city:city,
            address:address,
        })
    )
    //fecth all cart items
    const cartItems = await DataStore.query(CartProduct, cp =>
        cp.userSub("eq", userSub)   
        )
    console.log(cartItems)
    //attach cart items to order
    await Promise.all(
        cartItems.map(cartItem => DataStore.save(new OrderProduct({
            quantity: cartItem.quantity,
            option: cartItem.option,
            product: cartItem.product,
            order: newOrder,
        })))
    )
    await Promise.all(cartItems.map(cartItem => DataStore.delete(cartItem)));
    navigation.navigate("Home")
  }

  const onCheckout =() =>{
      if (fullnameError || phoneNumberError || fullname.length < 2 || phoneNumber.length < 2){
          Alert.alert("Fix all field Errors before you can checkout!"); return;
      }
      saveOrder();
      console.warn("Success! success")
  }
 
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS ==="ios" ? "padding" : "height"}
      keyboardVerticalOffset = {Platform.OS ==="ios" ? 10 : 0}
      >
      <ScrollView style={styles.root}>
        <View style={styles.row}>
            <Text style={styles.label}>Country</Text>
            <Picker selectedValue={country} onValueChange={setCountry}
                >
                {
                    countries.map(country =>(
                    <Picker.Item key={country.code} value={country.code} label={country.name} />
                    ))
                }              
            </Picker>
        </View>
        {/* full name */}
        <View style={styles.row}>
            <Text style={styles.label}>Full Name (First and Last name)</Text>
            <TextInput style={styles.input} placeholder="Full Name"
                        value={fullname}
                        onEndEditing={validateFullname}
                        onChangeText={text =>{
                            setFullname(text);
                            setFullnameError("");
                        }}/>
            {!!fullnameError && <Text style={styles.errorLabel}>Validation Error: {fullnameError}</Text>}
        </View>
        {/* phone number */}
        <View style={styles.row}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput style={styles.input} placeholder="+254..."
                        onEndEditing={validatePhoneNumber}
                        keyboardType={'phone-pad'}
                        value={phoneNumber} 
                        onChangeText={text =>{
                            setPhoneNumber(text);
                            setPhoneNumberError("");
                        }}/>
            {!!phoneNumberError && <Text style={styles.errorLabel}>Validation Error: {phoneNumberError}</Text>}
        </View>
        {/* Address */}
        <View style={styles.row}>
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.input} placeholder="Address..."
                        value={address} onChangeText={setAddress}/>
        </View>
        {/* city */}
        <View style={styles.row}>
            <Text style={styles.label}>City</Text>
            <TextInput style={styles.input} placeholder="City..."
                        value={city} onChangeText={setCity}/>
        </View>
        
        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>    
  )
}

export default AddressScreen
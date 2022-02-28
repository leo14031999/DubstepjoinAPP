import React, {useState}  from "react";
import {
  StyleSheet, 
  View, 
  Text, 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
} from "react-native";
import RegisterForm from "../components/Auth/RegisterForm";
import LoginForm from "../components/Auth/LoginForm";
import dj from "../../assets/dj.png";
import {layoutStyle} from "../styles";

export default function Auth() {
const [showLogin, setShowLogin] = useState(false);
const changeForm =() => setShowLogin(!showLogin);


return (
<View style={layoutStyle.container}>
   <Image style={styles.dj} source={dj}/>
   <KeyboardAvoidingView 
   behavior={Platform.OS === "ios" ? "padding" : "height"}
   >
     {showLogin ?(
       <LoginForm changeForm ={changeForm}/>


     ):(
      <RegisterForm changeForm = {changeForm}/>
     )}
   </KeyboardAvoidingView>
   </View>

);

}
const styles = StyleSheet.create({
dj: {
    width: "100%",
    height: 80,
    resizeMode: "contain",
    marginBottom: 20,
    
},

});
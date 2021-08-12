import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default class AwesomeProject extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
      
      <View style={styles.container3}>

      <Text style={styles.TextName1}>Sign In</Text>
      </View>

      <View style={styles.div}>
        <Text style={styles.TextName}>Business Owner</Text>
      </View>


        <View style={styles.container2}>
        <Text style={styles.logo}>Sign Up</Text>
        
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Name of Business"
            placeholderTextColor="#002456"
            onChangeText={text => this.setState({Username:text})}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Category"
            placeholderTextColor="#002456"
            onChangeText={text => this.setState({Username:text})}/>
        </View>
        
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Business Email"
            placeholderTextColor="#002456"
            onChangeText={text => this.setState({Username:text})}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#002456"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        
        <View style={{ display: "flex", flexDirection: "row",  flexWrap: 'wrap', margin: 10 }}>
 
  <TouchableOpacity>
    <Text style={styles.forgot} onPress={() => Linking.openURL('https://www.google.com')} >
    I agree to the Terms and Conditions
    </Text>
   </TouchableOpacity>
  
 </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    height:"70%",
    width:"100%",
    backgroundColor: '#002456',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50,
    marginTop: '0%',
  },

  container3: {
    marginTop: '3%',
    width: '100%',
  },

  TextName1:{
    fontSize: 20,
    fontWeight: 'bold',
    color:"#002456",
    textAlign:'right',
    marginRight: '5%'
  },

  div:{
  marginTop: '10%',
  marginBottom: '15%'
  },

  TextName:{
    fontSize: 40,
    fontWeight: 'bold',
    color:"#002456",
    textAlign: 'center',
    width: 230,
  },

  logo:{
    marginBottom: 30,
    fontWeight:"bold",
    fontSize:40,
    color:"#fff",
  
  },

  inputView:{
    width:"80%",
    backgroundColor:"#ffffff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },

  inputText:{
    height:50,
    color:"black"
  },

  forgot:{
    color:"#EDCF2E",
    fontSize:11,
    textDecorationLine: 'underline'
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#EDCF2E",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },

  loginText:{
    color:"#002456"
  }
});

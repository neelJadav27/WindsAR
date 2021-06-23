import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const LoginComponent = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState({
    usernameErrorMessage: '',
    isValid: true,
  });
  const [passwordError, setPasswordError] = useState({
    passwordErrorMessage: '',
    isValid: true,
  });

  const validateInput = () => {
    const unamePwdStartRegex = /^[a-zA-Z]/;
    //const unameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    // Email regex below
    // const unameRegex2 = /^[a-zA-Z][a-zA-Z0-9]*[@][a-zA-Z]*[.][a-z]{2,}$/;
    const pwdRegex = /^[a-zA-Z]([a-zA-Z0-9]*[@#$]*)*$/;

    if (username.length == 0) {
      setUsernameError({
        usernameErrorMessage: 'Please enter username',
        isValid: false,
      });
    } else {
      if (!unamePwdStartRegex.test(username.username)) {
        setUsernameError({
          usernameErrorMessage: 'Username must start with letter',
          isValid: false,
        });
      } else if (!unameRegex2.test(username.username)) {
        setUsernameError({
          usernameErrorMessage: 'Username contain number and letter only',
          isValid: false,
        });
      } else {
        setUsernameError({
          userNameErrorMessage: '',
          isValid: true,
        });
      }
    }
    // /////////////
    if (password.length == 0) {
      setPasswordError({
        passwordErrorMessage: 'Please enter password',
        isValid: false,
      });
    } else {
      if (password.password.length < 7) {
        setPasswordError({
          passwordErrorMessage: 'Password is more than 6',
          isValid: false,
        });
      } else if (!unamePwdStartRegex.test(password.password)) {
        setPasswordError({
          passwordErrorMessage: 'Password must start with letter',
          isValid: false,
        });
      } else if (!pwdRegex.test(password.password)) {
        setPasswordError({
          passwordErrorMessage:
            'Password contain only number, letter, @, # and $',
          isValid: false,
        });
      } else {
        setPasswordError({
          passwordErrorMessage: '',
          isValid: true,
        });
      }
    }
    if (
      usernameError.isValid &&
      passwordError.isValid &&
      username.length != 0 &&
      password.length != 0
    ) {
      const [data, setData] = useState(null);
      //Sending  Data
      var LoginData = {
        email: username.username,
        password: password.password,
      };
      fetch('http://localhost:8000/registerCustomer/login/', {
        method: 'POST',
        body: JSON.stringify({
          name: LoginData.email,
          password: LoginData.password,
        }),
      })
        .then(response => response.json())
        .then(responseData => setData(responseData))
        .catch(error => alert(error));
      //Sending data ends

      if (data.sucess != null) {
        if (data.sucess) {
          alert(data.message);
        }
      }
    }
  };

  const alertMessage = () => {
    alert('working');
  };
  return (
    <View style={styles.customMargin}>
      <Text style={[styles.text, {marginTop: hp('4%')}]}> Username </Text>
      <TextInput
        style={styles.input}
        onChangeText={data => setUserName({username: data})}
      />

      <Text style={styles.errorText}>{usernameError.usernameErrorMessage}</Text>

      <Text style={styles.text}> Password </Text>
      <TextInput
        secureTextEntry={true}
        label="passWord"
        style={styles.input}
        onChangeText={data => setPassword({password: data})}
      />

      <Text style={styles.errorText}>
        {passwordError.passwordErrorMessage}{' '}
      </Text>

      <TouchableOpacity style={styles.touchButton} onPress={validateInput}>
        <Text style={styles.buttonText}> Log in </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: hp('1.5%'),
    height: hp('6.2%'),
    width: wp('80%'),
    paddingLeft: wp('6%'),
    backgroundColor: 'white',
    color: 'black',
    alignSelf: 'center',
    borderRadius: hp('4%'),
  },
  text: {
    paddingLeft: wp('11%'),
    fontSize: hp('2%'),
    textAlign: 'left',
    color: 'white',
    textAlign: 'left',
  },
  customMargin: {
    flex: 1,
    borderTopLeftRadius: hp('7%'),
    borderTopRightRadius: hp('7%'),
    backgroundColor: 'rgba(0, 36, 86, 1)',
    justifyContent: 'center',
  },
  touchButton: {
    backgroundColor: 'gold',
    height: hp('7%'),
    width: wp('25%'),
    alignSelf: 'center',
    marginTop: hp('2%'),
    borderRadius: hp('4%'),
    marginBottom: hp('2%'),
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: hp('2.6%'),
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    paddingLeft: wp('15%'),
    paddingRight: wp('10%'),
    fontSize: hp('2%'),
  },
});

export default LoginComponent;

import React ,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({headerText,errorMessage,onSubmit,submitButtonText}) => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    return(
        <>
        <Spacer>
           <Text h3>{headerText}</Text>
        </Spacer>

         <Input label="Email" value={email}
                onChangeText={(newemail) => setEmail(newemail) }
                autoCapitalize = "none"
                autoCorrect = {false}
         />
         <Spacer/>
         <Input label="password" value={password}
                onChangeText={(newpassword) => setPassword(newpassword)}
                secureTextEntry
                autoCapitalize = "none"
                autoCorrect = {false}
         />

         <Spacer>
           <Button title={submitButtonText}
                   onPress={() => {onSubmit({email,password})}}
           />
         </Spacer>
    </>
    );
};

export default AuthForm;
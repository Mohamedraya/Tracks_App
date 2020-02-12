import React ,{useContext}from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {Button} from 'react-native-elements';
import {SaveAreaView} from 'react-navigation';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {

    const {SignOut} = useContext(AuthContext);
    return
    (
        <SaveAreaView forceInset={{top : "always"}}>
          <Text>Account Screen</Text>
        <Spacer>
          <Button title="Sign Out" 
                onPress={}
        />
        </Spacer>
        </SaveAreaView>
     
    );   
};

export default AccountScreen;
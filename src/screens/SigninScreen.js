import React ,{useContext}from 'react';
import {View,StyleSheet,Text} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation';

const SigninScreen = () => {

    const[state,signin,clearErrorMessage] = useContext(Context);

    return(
        <View style={styles.container}>

            <NavigationEvents
            
               onWillBlur ={()=>{clearErrorMessage()}}
           />

           <AuthForm headerText="Sign in to Tracker"
                     errorMessage= {state.errorMessage}
                     onSubmit= {({email,password})=>{signin({email,password})}}
                     submitButtonText="Sign in"
           />

           <NavLink routeName ="Signin"
                   text="Don`t have an Account? Sign Up"        
           />
        </View>
    );
};

SigninScreen.navigationOption={
    header : null
};

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : "center",
        marginBottom: 250
    }
});

export default SigninScreen;
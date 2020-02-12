import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';
import Spacer from './Spacer';
import {WithNavigation} from 'react-navigation';

const NavLink = ({navigation,text,routeName}) => {

    return (
    <TouchableOpacity onPress={()=> navigation.navigate(routeName)}>
        <Spacer>
           <Text>{text}</Text>
        </Spacer>

    </TouchableOpacity> 
    );
};

export default NavLink;
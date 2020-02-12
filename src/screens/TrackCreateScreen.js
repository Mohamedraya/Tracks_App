import React ,{useContext,useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SaveAreaView,withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import {Context as locationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import {FontAwesome} from '@expo/vector-icons';


const CreateTrackScreen = ({isFocuced}) => {

    const {state ,addLocation} = useContext(locationContext);

    const callback = useCallback((location)=>{
        addLocation(location,state.recording);},[state.recording]);

    const [err] = useLocation(isFocuced || state.recording,callback);

    return(

        <SaveAreaView forceInset={{top : "always"}}>

            <Text h2> Create a Track</Text>

            <Map/>

            {err ? <Text>please enable location service</Text> : null}

            <TrackForm/>

        </SaveAreaView>
    );
};

CreateTrackScreen.navigationOptions={
    tabBarIcon: <FontAwesome name="plus" size={30}/>
};

export default withNavigationFocus(CreateTrackScreen);
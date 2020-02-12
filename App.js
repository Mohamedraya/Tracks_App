import React from 'react';
import {createAppContainer,createStackNavigator,createBottomTapNavigator,
  createSwitchNavigator} from 'react-navigation';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import CreateTrackScreen from './src/screens/CreateTrackScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import LoadingScreen from './src/screens/LoadingScreen';
import {Provider as locationProvider} from './src/context/LocationContext';
import {Provider as trackProvider} from './src/context/TrackContext';


const switchNavigator = createSwitchNavigator({
  LoadingScreen : LoadingScreen,
  loginFlow : createStackNavigator({
   Signup : SignupScreen,
   Signin : SigninScreen
  }),

  mainFlow : createBottomTapNavigator({
   trackListFlow : createStackNavigator({
     TrackList : TrackListScreen,
     TrackDetails : TrackDetailsScreen
   }), 
   CreateTrack : CreateTrackScreen,
   Account : AccountScreen 
  })
});

const App = createAppContainer(switchNavigator);

export default  () => {

  return (
    <trackProvider>
      <locationProvider>
        <AuthProvider>
           <App ref={(navigator)=>{setNavigator(navigator)}}/>
        </AuthProvider>
      </locationProvider>
    </trackProvider>
  
     
  );
};
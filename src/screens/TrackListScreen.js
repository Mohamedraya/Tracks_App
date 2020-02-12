import React ,{useContext}from 'react';
import {NavigationEvents} from 'react-navigation';
import {StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({Navigation}) => {

    const [state,fetchTracks] = useContext(TrackContext);

    return(
        <>
        <NavigationEvents onWillFocus={() => fetchTracks()}/>

        <FlatList data={state} keyExtractor={item => item._id} 
                  renderItem={({item}) => {
                      return <TouchableOpacity 
                        onPress={()=>{Navigation.Navigate("DetailsList",{id:_id})}}>
                          <ListItem chevron title={item.name}/>
                      </TouchableOpacity>
                  }}    
        />
    </>
    );
};

TrackListScreen.navigationOptions = {
    title : "Tracks"
};

export default TrackListScreen;
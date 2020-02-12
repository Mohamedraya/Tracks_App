import React ,{useContext} from 'react';
import {Input,Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as locationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {

    const {state:{name,recording,locations},
    startRecording,stopRecording,changeName} = useContext(locationContext);
    const [saveTrack] = useSaveTrack();
    
    return
    <>
    <Spacer>
        <Input placeholder="Enter Name"
               onChangeText={changeName}
               value={name}
        />
    </Spacer>

    <Spacer>
    {recording ? 
     (<Button title="stop Recording"  onPress={stopRecording}/>)
    :(<Button title="Start Recording" onPress={startRecording}/>)
    }
    </Spacer>

    <Spacer>
      {!recording && locations.length?
       (<Button title="Save Recording" onPress={saveTrack}/>)
       : null  
      }  
    </Spacer>
 
    </>
};

export default TrackForm;
import {useState,useEffect} from 'react';
import {Accuracy,requestPermissionAsync,watchPositionAsync} from 'expo-location';


export default (shouldTrack,callback) => {
    const [err,setErr] = useState(null);

    useEffect(() => {
        try{
            const startWatching = async () => {
            await requestPermissionAsync();
            const sub = await watchPositionAsync({
                 accuracy : Accuracy.BestForNavigation,
                 timeInterval : 1000,
                 distanceInterval : 10
             } ,
             callback 
             );
        
            };
            
        }
        catch(err){
            setErr(err);
          }
        if(shouldTrack){
            startWatching();
        }
        else
        {
          // stop watching
          if(subscriber){
            subscriber.remove();
          }
          
          subscriber = null;
        }

        return () =>{
            if(subscriber){
                subscriber.remove();
            }
        };
     
    } ,[shouldTrack,callback]);

    return [err];
};
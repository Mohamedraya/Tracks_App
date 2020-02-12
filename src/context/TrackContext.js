import createDataContext from './createDataContext';
import trackerApi from '../Api/tracker';

const trackReducer = (state,action) => {
    switch(action.type){
       
        case "fetch_data":
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = (dispatch) => async () => {
     const response = await trackerApi.get("/tracks");
     dispatch({type: "fetch_data" , payload: response.data});
};

const createTrack = (dispatch) => async (name,locations) => {
    // Make Request to API
    await trackerApi.post("/tracks",{name,locations});
};

export const {Provider,Context} = createDataContext(trackReducer,{fetchTracks,
    createTrack} , [] );
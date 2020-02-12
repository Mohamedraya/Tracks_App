import {AsyncStorage} from 'react-native';    
import CreateDataContext from './createDataContext';
import trackerApi from '../Api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state,action) => {

    switch(action.type){
        case"add_error":
            return {...state , errorMessage: action.payload};
        
        case"signin":
            return {...state , token : action.payload};
            
        case"clear_err_message":
            return {...state,errorMessage: ""};
            
        case "SignOut" :
            return {token : null};    
        default:
            return state;
    }
};

const Signup = dispatch =>  async ({email,password}) => {
      try{
        const response = await trackerApi.post("/signup" ,{email,password});
        await AsyncStorage.setItem("token" , response.data.token);
        dispatch({type : "signin" , payload : response.data.token});
        navigate("TrackList");
      }
      catch(err){

        dispatch({type: "add_error" , payload: "wrong with signup"});
      }  
      
};

const Signin = (dispatch) => async ({email,password}) => {
         try{
             
            const response = await trackerApi.post("/signin" , {email,password});
            await AsyncStorage.setItem("token",response.data.token);
            dispatch({type : "signin" , payload: response.data.token});
            navigate("Signin");
         }
         catch(err){
             dispatch({type: add_error , payload: "wrong with signin"});
         }
    };

    const clearErrorMessage = (dispatch) =>{
        dispatch({type: "clear_err_message" , });
    };

    const tryLocalSignin = dispatch => async () =>{

        const token = await AsyncStorage.getItem("token");
        if (token){
            dispatch({type : "signin" , payload: token});
            navigate("TrackList"); 
        }
        else{
            navigate("Signup");
        }
    };


const Signout = dispatch => async () =>{
  
    await AsyncStorage.removeItem("token");
    dispatch({type : "Sign Out"});
    navigate("LoginFlow");
};


export default {Context,Provider} = 
CreateDataContext(authReducer,
    {Signup,Signin,Signout,clearErrorMessage,tryLocalSignin},
    {token : null,errorMessage: ""});
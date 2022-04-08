import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async(key, value) => {
    try{
        await AsyncStorage.setItem(key,value)
    }catch (error){
        console.log("error storedata", error)
    }
}

export const retrieveData = async(key) => {
    try{
        const value = await AsyncStorage.getItem(key);
        if(value !== null){
            return value
        }else {
            return null
        }
    }catch (error){
        console.log("error retrievedata", error)
    }
}

export const eraseData = async(key) => {
    try{
        await AsyncStorage.removeItem(key);
    }catch (error){
        console.log("error erasedata", error)
    }
}
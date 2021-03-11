import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (name, value) => {
    let dataValue = JSON.stringify(value);
    try {
        await AsyncStorage.setItem(name, dataValue);
        return await getData(name);
    } catch (error) {
        throw new Error(error.message);
    }
};


export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
            // value previously stored
        }
    } catch (e) {
        // error reading value
    }
}
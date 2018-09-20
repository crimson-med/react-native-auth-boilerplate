import { AsyncStorage } from "react-native"
// retrieve
/*const retrieve = async (key) => {
    const test = await AsyncStorage.getItem(key);
    //console.log(test);
    return {test};
};*/

const retrieve = (key) => {
    return new Promise(function(resolve, reject) {
        AsyncStorage.getItem(key)
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
};
// store
const store = async (key, value) => {
    const result = await AsyncStorage.setItem(key, value);
    return result;
}

// store multiple keys
const storeCredentials = async (token, permissions) => {
    await AsyncStorage.multiSet([['token', token], ['permissions', JSON.stringify(permissions)]]);
};

// clear multiple keys
const clearCredentials = async () => await AsyncStorage.multiRemove(['token', 'permissions']);

module.exports = {
    retrieve: retrieve,
    store: store,
    storeCredentials: storeCredentials,
    clearCredentials: clearCredentials,
}

import secureLocalStorage from "react-secure-storage";

/**
 * Wrapper on react-secure-storage so that in future it can be replaced (plug & play strategy)
 */
const wrapper = {
    setItem: (key, value) => {
        secureLocalStorage.setItem(key, value);
    },
    getItem: (key) => {
        return secureLocalStorage.getItem(key);
    },
    removeItem: (key) => {
        secureLocalStorage.removeItem(key);
    },
    removeAllItems: () => {
        secureLocalStorage.clear();
    }
}

export default wrapper;
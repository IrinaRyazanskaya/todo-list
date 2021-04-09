function getFromLocalStorage(key, defaultValue) {
    try {
        const item = localStorage.getItem(key);

        if (item === null) {
            return defaultValue;
        }

        return JSON.parse(item);
    } catch (error) {
        console.error(
            `Не удалось найти данные из LocalStorage по ключу "{key"}"`
        );

        return defaultValue;
    }
}

function saveToLocalStorage(key, value) {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);

        return true;
    } catch (error) {
        console.error(
            `Не удалось сохранить данные в LocalStorage по ключу "${key}"`
        );

        return false;
    }
}

export { getFromLocalStorage, saveToLocalStorage };
function getFromLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);

    if (item === null) {
      return defaultValue;
    }

    return JSON.parse(item) as T;
  } catch (error) {
    console.error(
      `Не удалось найти данные из LocalStorage по ключу "${key}"`,
      error instanceof Error ? error : undefined,
    );

    return defaultValue;
  }
}

function saveToLocalStorage<T>(key: string, value: T): boolean {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);

    return true;
  } catch (error) {
    console.error(
      `Не удалось сохранить данные в LocalStorage по ключу "${key}"`,
      error instanceof Error ? error : undefined,
    );

    return false;
  }
}

export { getFromLocalStorage, saveToLocalStorage };

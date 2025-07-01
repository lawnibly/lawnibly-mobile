import * as ExpoSecureStore from 'expo-secure-store';

const isWeb = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

export async function getItem(key: string): Promise<string | null> {
  if (ExpoSecureStore.getItemAsync) {
    try {
      return await ExpoSecureStore.getItemAsync(key);
    } catch {
      // fall through to web storage
    }
  }
  if (isWeb) {
    return Promise.resolve(window.localStorage.getItem(key));
  }
  return null;
}

export const getItemAsync = getItem;

export async function setItem(key: string, value: string): Promise<void> {
  if (ExpoSecureStore.setItemAsync) {
    try {
      await ExpoSecureStore.setItemAsync(key, value);
      return;
    } catch {
      // fall through
    }
  }
  if (isWeb) {
    window.localStorage.setItem(key, value);
  }
}

export const setItemAsync = setItem;

export async function deleteItem(key: string): Promise<void> {
  if (ExpoSecureStore.deleteItemAsync) {
    try {
      await ExpoSecureStore.deleteItemAsync(key);
      return;
    } catch {
      // fall through
    }
  }
  if (isWeb) {
    window.localStorage.removeItem(key);
  }
}

export const deleteItemAsync = deleteItem;

import debounce from "lodash/debounce";

/**
 * Creates a record to be stored in local storage
 * @param {String} key Key to use for local storage
 * @param {String} value Value to save
 * @returns {Object | Void} Either returns an error or nothing if either the key or value is invalid
 */
export const createRecord = (key: string, value: string): { error?: string} | void => {
    if (!key || !value) {
        return {
            error: "Store to local storage failed, Invalid Key or value."
        };
    }

    localStorage.setItem(key, value);
};

/**
 * Gets an item from local storage using the key provided
 * @param {String} key Identifier to get item from local storage
 * @returns {String | null} Returns the item if available in local storage else null is returned
 */
export const readRecord = (key: string): string | null => {
    return localStorage.getItem(key);
};

/**
 * Update a record with the given key and new value
 * @param {String} key Key to use to update a record
 * @param {String} value new value to update
 * @returns {Object | void} Either an error object or void indicating a successful update
 */
export const updateRecord = (key: string, value: string): {error?: string} | void => {
    if (!key || !value) {
        return {
            error: "Failed to update record. Invalid key or value."
        };
    }

    localStorage.setItem(key, value);
};


/**
 * Delete a record from the store. This will check if the key is valid and delete the record. if the
 * key is invalid, an error object with the error details is returned, else nothing is returned indicating
 * that this is successfull
 * @param {String} key Key to use to determine the record to delete
 * @returns {Object | void} Returns an error object if invalid key is provided else returns void
 */
export const deleteRecord = (key: string): { error?: string} | void => {
    if (!key) {
        return {
            error: "Failed to delete record. Invalid key."
        };
    }

    localStorage.removeItem(key);
};

/**
 * Clear all items from local storage
 * @returns {void} nothing
 */
export const clearAll = (): void => localStorage.clear();

/**
 * checks if local storage has any items stored
 * @returns {boolean} True if there are items in local storage, else false
 */
export const hasStoredItems = (): boolean => localStorage.length > 0;

/**
 * Checks if the current browser supports localStorage
 * @returns {Boolean} True if the browser supports local storage
 */
export const isLocalStorageSupported = (): boolean => !!window.localStorage;

// Store (create or update) record to local storage with some delay (e.g. 1500 ms)
export const storeToLocalStorageDebounced = debounce((key: string, value: string): void => {
    if (isLocalStorageSupported()) {
      if (readRecord(key)) {
        updateRecord(key, value);
      } else {
        createRecord(key, value);
      }
    }
  }, 1500, {leading: false});

// Store (create or update) record to local storage
export const storeToLocalStorage = (key: string, value: string): void => {
    if (isLocalStorageSupported()) {
        if (readRecord(key)) {
            updateRecord(key, value);
        } else {
            createRecord(key, value);
        }
}
};
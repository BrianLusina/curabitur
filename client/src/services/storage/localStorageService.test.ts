import { createRecord, readRecord, updateRecord, deleteRecord, clearAll, hasStoredItems, isLocalStorageSupported } from "./localStorageService";


describe("LocalStorageSevice", () => {
    beforeEach(() => {
        clearAll();
    });

    it("should throw an error with invalid key and value when creating a record", () => {
        const invalidKey = "";
        const validValue = "value";

        const actualError = createRecord(invalidKey, validValue);

        const expectedError = {
            error: "Store to local storage failed, Invalid Key or value."
        };

        expect(actualError).toEqual(expectedError);
    });

    it("should return null for a non existent key", () => {
        const nonExistentKey = "nonExistent";

        const actualResult = readRecord(nonExistentKey);

        expect(actualResult).toBeNull();
    });

    it("can create a record in localStorage and read from it", () => {
        const user = {
            name: "John",
            age: 20
        };

        createRecord("username", user.name);

        // can read from localStorage with readRecord
        const actualUsername = readRecord("username");

        expect(actualUsername).toEqual(user.name);
    });

    it("should throw an error with an invalid key provided when updating a record", () => {
        const invalidKey = "";
        const validValue = "value";

        const actualError = updateRecord(invalidKey, validValue);

        const expectedError = {
            error: "Failed to update record. Invalid key or value."
        };

        expect(actualError).toEqual(expectedError);
    });

    it("should update a record if the key is valid", () => {
        const user = {
            name: "John",
            age: 20
        };

        // create a record
        createRecord("username", user.name);

        const newName = "Jane";

        // update record
        updateRecord("username", newName);

        const actualUsername = readRecord("username");

        expect(actualUsername).toEqual(newName);
    });

    it("should return an error if key is invalid", () => {
        const invalidKey = "";

        const actualError = deleteRecord(invalidKey);
        const expectedError = {
            error: "Failed to delete record. Invalid key."
        };

        expect(actualError).toEqual(expectedError);
    });

    it("should delete a record if key is valid", () => {
        // create record
        const usernameKey = "john";
        const usernameValue = "John";

        createRecord(usernameKey, usernameValue);

        // delete the record
        deleteRecord(usernameKey);

        // read record
        const actualRecord = readRecord(usernameKey);

        expect(actualRecord).toBeNull();
    });

    it("should clear all items from storage", () => {
        // create records
        const johnKey = "john";
        const johnValue = "John";

        const janeKey = "jane";
        const janeValue = "Jane";

        createRecord(johnKey, johnValue);
        createRecord(janeKey, janeValue);

        // delete all records
        clearAll();

        // read records
        const actualRecordJohn = readRecord(johnKey);
        const actualRecordJane = readRecord(janeKey);

        expect(actualRecordJohn).toBeNull();
        expect(actualRecordJane).toBeNull();
    });

    it("should return true if local storage is supported", () => {
        expect(isLocalStorageSupported()).toEqual(true);
    });
});
import { isPageActive } from "./domUtils";

describe("DomUtils", () => {
    describe("isPageActive", () => {
        xit("should return true when the page is active", () => {
            jest.spyOn(window, "location.hash")
                .mockImplementationOnce(() =>
                    ["chat"]
            );
            isPageActive("#chat");
        });
    });
});

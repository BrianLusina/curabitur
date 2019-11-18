import { getTime24Hours, getTime12hours } from "./timeUtils";

describe("TimeUtils", () => {

    describe("getTime24Hours", () => {
        it("should return 01:01 when it is 1min passed 1 am", () => {
            jest.spyOn(global.Date, "now")
                .mockImplementationOnce(() =>
                    new Date("2019-11-18T22:01:00.933Z").valueOf()
                );

            const actualTime = getTime24Hours();

            expect(actualTime).toEqual("01:01");
        });

        it("should return 13:01 when it is 1min passed 1 pm", () => {
            jest.spyOn(global.Date, "now")
                .mockImplementationOnce(() =>
                    new Date("2019-11-18T10:01:00.933Z").valueOf()
            );

            const actualTime = getTime24Hours();

            expect(actualTime).toEqual("13:01");
        });
    });

    describe("getTime12hours", () => {
        it("should return 12:45pm when it is 45 minutes passed 12 noon", () => {
            jest.spyOn(global.Date, "now")
                .mockImplementationOnce(() =>
                    new Date("2019-11-18T09:45:00.933Z").valueOf()
            );

            const actualTime = getTime12hours();

            expect(actualTime).toEqual("12:45pm");
        });

        it("should return 12:45am when it is 30 minutes passed 12 midnight", () => {
            jest.spyOn(global.Date, "now")
                .mockImplementationOnce(() =>
                    new Date("2019-11-18T21:30:00.933Z").valueOf()
            );

            const actualTime = getTime12hours();

            expect(actualTime).toEqual("12:30am");
        });
    });

});

import React from "react";
import { shallow, mount } from "enzyme";
import { render } from "react-dom";
import withTranslations from "./withTranslations";

describe("withTranslations HOC", () => {
    const mockContext = jest.fn();
    jest.mock("./context", () => {
        Consumer: ({ children }: any) => children(mockContext());
    });

    beforeEach(() => {
        mockContext.mockReset();
    });

    xit("should render component without crashing", () => {
        const mockedComponent = jest.fn();
        mockContext.mockReturnValue({
            translations: {},
            changeLanguage: jest.fn()
        });
        const WithTranslationsComponent = withTranslations(mockedComponent);
        mount(<WithTranslationsComponent /> );
        render(<WithTranslationsComponent />, document.createElement("div"));
    });
});
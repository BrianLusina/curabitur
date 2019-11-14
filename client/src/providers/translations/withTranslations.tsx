import React, { Component, FunctionComponent, ComponentClass } from "react";
import TranslationContext from "./context";

/**
 * HoC that wraps a component and gives the component access to translations context
 * @param {Component} WrappedComponent Wrapped Component
 */
export default function withTranslations(WrappedComponent: ComponentClass | FunctionComponent) {
    return class extends Component {
        render() {
            return (
                <TranslationContext.Consumer>
                    {
                        value => (
                            // @ts-ignore
                            <WrappedComponent
                                {...this.props}
                                changeLanguage={value.changeLanguage}
                                translations={value.translations}
                            />
                        )
                    }
                </TranslationContext.Consumer>
            );
        }
    };
}
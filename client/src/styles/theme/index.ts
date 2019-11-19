import * as styledComponents from "styled-components";
import { ThemeContextType } from "Providers/theme/types";

const {
  default: styled,
  css,
  keyframes
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeContextType
  >;


export default styled;
export { css, keyframes };
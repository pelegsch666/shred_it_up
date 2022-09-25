import { createGlobalStyle } from "styled-components";
import GeminiMoon from "./GeminiMoon.woff"
import FLAMES from"./FLAMES.woff"
import NeoWriter from "./NeoWriter.woff"
const StyledFonts = createGlobalStyle`

@font-face {
    font-family:'Gemini Moon' ;
    src: url(${GeminiMoon}) format('woff');
}
@font-face {
    font-family: 'FLAMES';
    src: url(${FLAMES}) format('woff');
}
@font-face {
    font-family:'NeoWriter' ;
    src: url(${NeoWriter}) format('woff');
}


`
export default StyledFonts
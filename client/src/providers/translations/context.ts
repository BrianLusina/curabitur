import { createContext } from "react";
import { TranslationContextType } from "./types";

export default createContext<TranslationContextType | any>(null);
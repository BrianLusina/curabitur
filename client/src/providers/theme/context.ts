import { createContext } from "react";
import { ThemeContextType } from "./types";

export default createContext<ThemeContextType | any>(null);
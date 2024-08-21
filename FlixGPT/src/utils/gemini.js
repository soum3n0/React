import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constrants";

// Fetch your API_KEY
const API_KEY = GEMINI_API_KEY;

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const gemini = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default gemini;
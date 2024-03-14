import { environment } from "../environment";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(environment.API_KEY);

// ...

export const geminiPro = genAI.getGenerativeModel({ model: "gemini-pro"});

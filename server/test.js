import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDJhQjhuT3X7jk9K25WupCpce_EJQ-27YM");

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const result = await model.generateContent("Say hello");
console.log(result.response.text());
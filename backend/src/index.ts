require("dotenv").config();
import cors from "cors";
import express from "express";
import Anthropic from "@anthropic-ai/sdk";
import { ContentBlock, TextBlock } from "@anthropic-ai/sdk/resources";

// import { BASE_PROMPT, getSystemPrompt } from "./prompts";
// import {basePrompt as nodeBasePrompt} from "./defaults/node";
// import {basePrompt as reactBasePrompt} from "./defaults/react";

const anthropic = new Anthropic();
const app = express();
app.use(cors())

import { mkdirSync, writeFileSync } from "node:fs";

const line = "I'm sorry I made up that citation with total confidence and you read it out loud in the meeting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

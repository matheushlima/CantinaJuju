import * as dotenv from "dotenv";
dotenv.config();

interface Config {
  open_api_key: string;
}
const config: Config = {
  open_api_key: getEnvironmentVariableByName("OPENAI_API_KEY"),
};

function getEnvironmentVariableByName(name: string): string {
  if (process.env["TEST"]) {
    return `${name}_DEFAULT_VALUE`;
  }

  if (process.env[name]) {
    return process.env[name]!;
  } else {
    throw new Error(`Missing ${name} for this project`);
  }
}

export default config;

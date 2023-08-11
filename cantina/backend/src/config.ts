import * as dotenv from "dotenv";
dotenv.config();

interface Config {
  open_api_key: string;
  layers_token: string;
  app_community: string;
  app_id: string;
  layers_url: string;
  azure_url: string;
}

const config: Config = {
  open_api_key: getEnvironmentVariableByName("OPENAI_API_KEY"),
  layers_token: getEnvironmentVariableByName("LAYERS_TOKEN"),
  app_community: getEnvironmentVariableByName("APP_COMMUNITY"),
  app_id: getEnvironmentVariableByName("APP_ID"),
  layers_url: getEnvironmentVariableByName("LAYERS_URL"),
  azure_url: getEnvironmentVariableByName("AZURE_URL"),
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

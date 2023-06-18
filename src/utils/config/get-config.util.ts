export const getConfig = (): Config => {
  const { ENABLE_SWAGGER, ENABLE_CORS } = process.env as unknown as EnvFile;

  return {
    enableCors: evalEnvBoolean(ENABLE_CORS, true),
    enableSwagger: evalEnvBoolean(ENABLE_SWAGGER, false),
  };
};

// Booleans

type EnvBoolean = 'yes' | 'no' | 'true' | 'false';
const evalEnvBoolean = (envBoolean?: EnvBoolean, fallback?: boolean) =>
  envBoolean === undefined && fallback !== undefined
    ? fallback
    : ['yes', 'true'].includes(envBoolean?.toLowerCase());

// Models

interface EnvFile {
  // SERVER
  ENABLE_CORS?: EnvBoolean;

  // OPEN API
  ENABLE_SWAGGER?: EnvBoolean;
}

interface Config {
  // SERVER
  enableCors: boolean;

  // OPEN API
  enableSwagger: boolean;
}

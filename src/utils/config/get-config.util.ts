export const getConfig = (): Config => {
  const { ENABLE_SWAGGER } = process.env as unknown as EnvFile;

  return {
    enableSwagger: evalEnvBoolean(ENABLE_SWAGGER),
  };
};

// Booleans

type EnvBoolean = 'yes' | 'no' | 'true' | 'false';
const evalEnvBoolean = (envBoolean: EnvBoolean) =>
  ['yes', 'true'].includes(envBoolean?.toLowerCase());

// Models

interface EnvFile {
  // OPEN API
  ENABLE_SWAGGER?: EnvBoolean;
}

interface Config {
  enableSwagger: boolean;
}

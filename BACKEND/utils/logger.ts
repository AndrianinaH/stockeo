import Logger from "https://deno.land/x/logger@v1.1.6/logger.ts";

let loggerInstance: Logger;

const createLoggerInstance = () => {
  if (!loggerInstance) {
    loggerInstance = new Logger();
  }
  return loggerInstance;
};

export const logger = createLoggerInstance();

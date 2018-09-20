const environment = "dev";

// Development Environment
const development = {
  database: {
    host: 'http://10.0.2.2:8080/',
    login: 'dev',
    password: 'dev'
  }
};

// Production Environment
const production = {
  database: {
    host: 'http://10.0.2.2:8080',
    login: 'prod',
    password: 'prod'
  }
};

function getConfig() {
  if (environment == "dev") {
    return development;
  } else {
    return production;
  }
}


  module.exports = {
      config: getConfig(),
  }

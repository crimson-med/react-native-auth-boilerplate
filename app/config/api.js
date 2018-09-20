import {config} from './config.js'

const api = {
    login: `${config.database.host}api/auth/login`,
    ping: `${config.database.host}api/protected/test`,
};

module.exports = {
    api: api,
}

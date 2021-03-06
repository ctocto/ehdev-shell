/**
 * Env
 * @author ryan.bian
 */
const path = require('path');
const { app } = require('electron');

// userData path
const UserDataPath = exports.UserDataPath = app.getPath('userData');
// configs's folder
const ConfigerFolderPath = exports.ConfigerFolderPath = path.join(UserDataPath, 'configs');
// configs's package.json path
exports.ConfigerFolderPackagePath = path.join(ConfigerFolderPath, 'package.json');

exports.SHELL_NODE_MODULES_PATH = path.join(app.getAppPath(), 'node_modules');

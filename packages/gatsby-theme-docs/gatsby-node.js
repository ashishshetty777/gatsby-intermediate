const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const withDefaults = require('./utils/default-options');

exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();

  // TODO get options wiht defaults
  const { contentPath } = withDefaults(options);

  // TODO figure out the content path
  const dir = path.join(program.directory, contentPath);

  // TODO if directory doesnt exist, create it
  if (!fs.existsSync(dir)) {
    // TODO create the dir
    mkdirp.sync(dir);
  }
};

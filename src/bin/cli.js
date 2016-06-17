#!/usr/bin/env node
const ps = require('../index.js')

ps()
  .then(data => {
    process.stdout.write(JSON.stringify(data, null, 2))
  })
  .catch(e => process.stderr.write(e))

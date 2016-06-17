const ps = require('pid-comm')
const parse = require('parse-comm')

function apps () {
  return new Promise((resolve, reject) => {
    ps()
      .then(data => {
        const apps = data
          .map(data => {
            const app = parse(data.comm)
            if (app !== -1) {
              return Object.assign({}, data, { app })
            } else {
              return data
            }
          })
          .filter(data => data.hasOwnProperty('app'))
        return resolve(apps)
      })
      .catch(e => reject(e))
  })
}

module.exports = apps

# running-apps

Get running .app:s.

``` bash
$ npm install running-apps
```

## Usage

``` javascript
const getApps = require('running-apps')

getApps()
  .then(apps => console.log(apps))
  .catch(e => console.error(e))

// [
//   {
//     pid: 1234
//     comm: '/Applications/Utilities/Terminal.app/Contents/MacOS/Terminal'
//     app: '/Applications/Utilities/Terminal.app'
//   },
//   ...
// ]
```

## cli

``` bash
npm install -g running-apps
running-apps
# [
#   {
#     "pid": "1234",
#     "comm": "/Applications/Utilities/Terminal.app/Contents/MacOS/Terminal",
#     "app": "/Applications/Utilities/Terminal.app"
#   },
#   ...
# ]
```

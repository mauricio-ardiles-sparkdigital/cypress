module.exports = (on, config) => {
  const { playwright } = require('../../config/playwright')
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'webkit' && browser.name === 'safari') {
// auto open devtools
      launchOptions.args.push('--auto-open-devtools-for-tabs')
      const existing = launchOptions.args.find(
        arg => arg.slice(0, 23) === '--remote-debugging-port',
      )}
  })
  on('task', {
    async openSafari() {
      return await playwright()
    },
  })
}
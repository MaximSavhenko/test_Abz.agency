export default {
  install: (app, options) => {
    app.config.globalProperties.$message = function (html) {
      window.M.toast({ html: html, classes: 'rounded' })
    }
    app.config.globalProperties.$error = function (html) {
      window.M.toast({ html: `[Error]: ${html}`, classes: 'rounded' })
    }
  },
}

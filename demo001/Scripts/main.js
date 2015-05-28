seajs.config({
  base: './Scripts/'
})
seajs.use("seajs-text", function() {
  seajs.use('init')
})
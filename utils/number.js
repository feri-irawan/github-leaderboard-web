const formatSize = (kb) => {
  const format = ['KB', 'MB', 'GB', 'TB']
  const KB = 1024 // 1MB
  const i = Math.floor(Math.log(kb) / Math.log(KB))
  return parseFloat(kb / Math.pow(KB, i)).toFixed(2) + format[i]
}

module.exports = {
  formatSize
}

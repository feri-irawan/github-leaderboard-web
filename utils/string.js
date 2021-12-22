// Replace string
const replace = (string, search, replacer) => {
  return string.split(search).join(replacer)
}

// String to capitalize
const toCapitalize = (string, sparatorTarget = ' ', sparatorJoin = '') => {
  return string
    .split(sparatorTarget)
    .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1))
    .join(sparatorJoin)
}

module.exports = {
  replace,
  toCapitalize
}

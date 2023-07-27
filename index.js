const allRights = require('./rights')

/**
 * Check if user has right or not.
 * This is a bitwise operation.  If the
 * Based on second params, it first get the respective bit value of right and then check if user has right or not.
 * @param {number} token - number representing the bits of the rights the user can perform
 * @param {number} rightToCheck  - right to check if user has it or not. ex: "MANAGE_USERS"
 * @returns true/false - true if user has right, false if user doesn't have right.
 */
const hasRight = (token, rightToCheck) => {
  return (token & rightToCheck) > 0
}

/**
 * Enumerates the rights of the provided token rights integer.
 * !! This function is for development and troubleshooting purposes only.  It should never be used for production functionality.
 * @param {number} token - number representing the bits of the rights the user can perform
 * @returns an array of the rights objects indicated by the token
 */
const enumerateRights = (token) => {
  const matched = []
  for (const key in allRights) {
    const right = allRights[key]
    if (right.flag & token) {
      matched.push(right)
    }
  }
  return matched
}

/**
 * Prints to console rights of the provided token rights integer.
 * !! This function is for development and troubleshooting purposes only.  It should never be used for production functionality.
 * @param {number} token - number representing the bits of the rights the user can perform
 */
const printRights = (token) => {
  const rights = enumerateRights(token)
  for (const right of rights) {
    console.log(`${right.name}`)
  }
}

const userRights = {
  allRights,
  enumerateRights,
  hasRight,
  printRights,
}

module.exports.allRights = allRights
module.exports.enumerateRights = enumerateRights
module.exports.hasRight = hasRight
module.exports.printRights = printRights

// default named export
module.exports.userRights = userRights

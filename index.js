const allRightsParentObject = require('./rights')

/**
 * Check if user has right or not.
 * This is a bitwise operation.  If the
 * Based on second params, it first get the respective bit value of right and then check if user has right or not.
 * @param {number} token - number representing the bits of the rights the user can perform
 * @param {number} rightToCheck  - right to check if user has it or not. ex: "MANAGE_USERS"
 * @returns true/false - true if user has right, false if user doesn't have right.
 */

const hasRight = (token, rightToCheck) => {
  console.log('hasRight: ', token, rightToCheck)
  return (token & rightToCheck) > 0
}

module.exports = { allRights: allRightsParentObject, hasRight }

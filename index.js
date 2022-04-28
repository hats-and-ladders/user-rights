const allRightsParentObject = require('./rights')

/**
 * Check if user has right or not.
 * Based on second params, it first get the respective bit value of right and then check if user has right or not.
 * @param {Object} token - token of user that contains the actual rights of a user in bitfield.
 * @param {string} userRightToCheck  - right to check if user has it or not. ex: "MANAGE_USERS"
 * @returns true/false - true if user has right, false if user doesn't have right.
 */
const hasRight = (token, userRightToCheck) => {
  console.log(token, userRightToCheck)
  const allRights = allRightsParentObject.allRights
  return (
    (allRights[userRightToCheck].flag & token.userRightsBits) ==
    allRights[userRightToCheck].flag
  )
}

module.exports = { allRights: allRightsParentObject, hasRight }

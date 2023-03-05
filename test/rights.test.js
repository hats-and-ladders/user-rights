//const sinon = require('sinon');
const { allRights } = require("../rights");
const { hasRight, enumerateRights } = require("../index");
const expect = require('chai').expect;

var userRights;

beforeAll(() => {
  userRights = allRights.MANAGE_USERS.flag + allRights.USER_TECH_DETAILS.flag + allRights.CAN_IMPERSONATE.flag;
})

describe('Check If Token Has Right',() => {

  it('should match a single right', async() => {
    expect(hasRight(userRights, allRights.MANAGE_USERS.flag)).to.equal(true)
  })

  it('should match in an array of rights', async() => {
    expect(hasRight(userRights, allRights.MANAGE_USERS.flag + allRights.VIEW_USERS.flag)).to.equal(true)
  })

  it('should fail without a single right', async() => {
    expect(hasRight(userRights, allRights.MANAGE_PROVIDER_USERS.flag)).to.equal(false)
  })

  it('should fail when missing in an array of rights', async() => {
    expect(hasRight(userRights, allRights.MANAGE_PROVIDER_USERS.flag + allRights.PURGE_USERS.flag)).to.equal(false)
  })

})

describe('enumerateRights',() => {

  it('should return the list of rights represented by the token bits 8206', async() => {
    result = enumerateRights(8206)
    expected = [ allRights.MANAGE_USERS, allRights.MANAGE_ROLES, allRights.VIEW_ROLES, allRights.PURGE_USERS ]
    expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
  })

})

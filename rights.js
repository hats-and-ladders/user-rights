
/**
 * This is a collection of user rights. Every right has a name and a flag.
 * `name` must not be too long. It should always be unique and length must be less than equals 16.
 * `flag` is a bitfield that represents the right. Flag must be unique and is equivalent to
 * Math.pow(2, key); where key is the index of the right in the object list.
 */

 exports.allRights = {
  VIEW_USERS: {
    name: 'View Users',
    flag: 1, // index is 0 ie. Math.pow(2,0)
  },
  MANAGE_USERS: {
    name: 'Manage Users',
    flag: 2, // index is 1
  },
  MANAGE_ROLES: {
    name: 'Manage Roles',
    flag: 4, // index is 2
  },
  VIEW_REPORTS: {
    name: 'View Reports',
    flag: 8, // index is 3
  },
  CAN_IMPERSONATE: {
    name: 'Can Impersonate',
    flag: 16, // index is 4
  },
  MANAGE_PROVIDER_USERS: {
    name: 'Manage Provider Users',
    flag: 32, // index is 5
  },
  INVITE_PROVIDER_USERS: {
    name: 'Invite Provider Users',
    flag: 64, // index is 6
  },
  USER_TECH_DETAILS: {
    name: 'User Tech Details',
    flag: 128, // index is 7
  },
  DEV_TOOLS: {
    name: 'Dev Tools',
    flag: 256, // index is 8
  },
  CUSTOMER_HOME: {
    name: 'Customer Home',
    flag: 512, // index is 9
  },
  HNL_HOME: {
    name: 'H&L Home',
    flag: 1024, // index is 10
  },
  VIEW_GROUPS: {
    name: 'View Groups',
    flag: 2048, // index is 11
  },
  EDIT_GROUPS: {
    name: 'Edit Groups',
    flag: 4096, // index is 12
  },
  HARD_DELETE: {
    name: 'Hard Delete',
    flag: 8192, // index is 13
  },
  TEST_RIGHT: {
    name: 'Test',
    flag: 16384, // index is 14
  },
  CUSTOMER_REPORTS: {
    name: 'Customer Reports',
    flag: 32768, // index is 15
  },
  INTERNAL_REPORTS: {
    name: 'Internal Reports',
    flag: 65536, // index is 16
  },
  VIEW_ALL_GROUPS: {
    name: 'View All Groups',
    flag: 131072, // index is 17
  },
};

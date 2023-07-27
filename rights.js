/**
 * This is a collection of user rights. Every right has a name and a flag.
 * `name` must not be too long. It should always be unique and length must be less than equals 16.
 * `flag` is a bitfield that represents the right. Flag must be unique and is equivalent to
 * Math.pow(2, key); where key is the index of the right in the object list.
 */

const allRights = {
  VIEW_USERS: { // ability to see users in the admin screens and API access to r/o user info
    name: 'View Users',
    flag: 1, // index is 0 ie. Math.pow(2,0)
  },
  MANAGE_USERS: { // ability to edit users in the admin and API acces to write user info
    name: 'Manage Users',
    flag: 2, // index is 1
  },
  MANAGE_ROLES: { // ability to read & write role info
    name: 'Manage Roles',
    flag: 4, // index is 2
  },
  VIEW_ROLES: { // The ability to view roles
    name: 'View Roles',
    flag: 8, // index is 3
  },
  CAN_IMPERSONATE: { // ability for an H&L to simulate the account of an end user for troubleshooting purposes
    name: 'Can Impersonate',
    flag: 16, // index is 4
  },
  MANAGE_PROVIDER_USERS: { // admin abilities restricted to customer ownership - for self-service
    name: 'Manage Provider Users',
    flag: 32, // index is 5
  },
  INVITE_PROVIDER_USERS: { // admin ability to invite new customer users - for self-service
    name: 'Invite Provider Users',
    flag: 64, // index is 6
  },
  USER_TECH_DETAILS: { // ability for H&L admin user to see tech details like sub & Cognito ID
    name: 'User Tech Details',
    flag: 128, // index is 7
  },
  DEV_TOOLS: { // ???
    name: 'Dev Tools',
    flag: 256, // index is 8
  },
  CUSTOMER_HOME: { // Directs non-participant customers to the customer home page
    name: 'Customer Home',
    flag: 512, // index is 9
  },
  HNL_HOME: { // directs Hats & Ladders employees to the employee home page
    name: 'H&L Home',
    flag: 1024, // index is 10
  },
  VIEW_GROUPS: { // ability to view groups in the admin & API r/o group info
    name: 'View Groups',
    flag: 2048, // index is 11
  },
  EDIT_GROUPS: { // ability to edit groups in the admin & API write group info
    name: 'Edit Groups',
    flag: 4096, // index is 12
  },
  PURGE_USERS: { // ability to hard delete users in the system normally soft-deleted
    name: 'Purge Users',
    flag: 8192, // index is 13
  },
  TEST_RIGHT: { // right that does nothing, exists for test purposes
    name: 'Test',
    flag: 16384, // index is 14
  },
  CUSTOMER_REPORTS: { // grants access to all customer reports
    name: 'Customer Reports',
    flag: 32768, // index is 15
  },
  INTERNAL_REPORTS: { // grants access to all internal reports
    name: 'Internal Reports',
    flag: 65536, // index is 16
  },
  VIEW_ALL_GROUPS: { // allows the viewing of all groups when querying reports
    name: 'View All Groups',
    flag: 131072, // index is 17
  },
  VIEW_OWN_GROUPS: { // allows the user to fetch only their own groups from user/{clientid}/groups
    name: 'View Own Groups',
    flag: 262144, // index is 18
  },
  MANAGE_CUSTOMERS: { // allows the user to create and edit customers
    name: 'Manage Customers',
    flag: 524288, // index is 19
  },
  VIEW_CUSTOMERS: { // allows the user to view customers systemwide
    name: 'View Customers',
    flag: 1048576, // index is 20
  },
  MANAGE_PROGRAMS: { // allows the user to create and edit programs
    name: 'Manage Programs',
    flag: 2097152, // index is 21
  },
  VIEW_PROGRAMS: { // allows the user to view programs
    name: 'View Programs',
    flag: 4194304, // index is 22
  },
}

module.exports = allRights


/**
 * This is a collection of user rights. Every right has a name and a flag.
 * `name` must not be too long. It should always be unique and length must be less than equals 16.
 * `flag` is a bitfield that represents the right. Flag must be unique and is equivalent to Math.pow(2, key); where key is the index of the right in the object list.
 */

exports.allRights = {
  "VIEW_USERS": { "name": "View Users", "flag": 1 }, // index is 0
  "MANAGE_USERS": { "name": "Edit Users", "flag": 2 }, // index is 1
  "MANAGE_ROLES": { "name": "Manage Roles", "flag": 4 }, // index is 2
  "ASSIGN_RIGHTS": { "name": "Assign Rights", "flag": 8 },// index is 3
  "VIEW_REPORTS": { "name": "View Reports", "flag": 16 },// index is 4
  "CAN_IMPERSONATE": { "name": "Can Impersonate", "flag": 32 },// index is 5
  "MANAGE_PROVIDER_USERS": { "name": "View Reports", "flag": 64 },// index is 6
  "INVITE_PROVIDER_USERS": { "name": "View Reports", "flag": 128 }// index is 7
}

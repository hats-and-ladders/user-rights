# Submodules for server and client.
This is an independent submodule repo that both the client and server repo can use according to the following instructions:
https://matthew-brett.github.io/curious-git/git_submodules.html

This repo contains two things.

- First, create a file that contains a list of user rights for the system.  It should be a map of rights constants to rights data structures that contain a name for the right and its bit flag.  An example can be seen below.
- Second, a function in Javascript that checks the rights from a authorization JWT against a specific right to see if the user has that right.

`hasRight(token, rightToCheck);`
- `token`: User token rights bits from the field `userRightsBits`.
- `rightToCheck`: Right of a user to check. ex: `MANAGE_USERS.flag`.

## Add new right
All rights are in [right.js](https://github.com/hats-and-ladders/user-rights/blob/master/rights.js) file.

It is the authoritative list of rights in the Hats & Ladders system.  Rights cannot be added to the database dynamically.  They cannot be added to code in any other project.  Adding a right here will be detected and added to the rights table of the Central Database.

Add new right at last with respective `name` and `flag`.
- `name`: It should not be long enough and string length must be <=16.  It must be unique.
- `flag`: It is the respective bitvalue and should be unique and must be `Math.pow(2,key)` where `key` is the index of your right.

## Use a right in code
This project has been made a submodule of the client and server projects and can be referenced there.  To use it, import as you would any other library.

```
const { allRights } = require('./sub-modules/index')
```

To pass the user's rights you must first decode their authentication token and then extract the rights bits in the `userRightsBits` field.  Then use that to call the check function along with the flag from the right you want to verify.

```
hasRight = (userRightsBits, allRights.VIEW_USERS.flag)
```

## Check a Rights Field

An authorization token delivers an integer containing all the bits representing the rights a user has, the union of the rights from all their roles.  When troubleshooting it may be useful to decipher one of these bit fields to discern which rights have been granted.  This module contains a utility to do that. To call from the command line call this from the project root, replacing 'bitfield' with the value you wish to test.

```
node -e 'require("./index").printRights(bitfield)'
```

# Submodules for server and client.
This is an independent submodule repo that both the client and server repo can use according to the following instructions:
https://matthew-brett.github.io/curious-git/git_submodules.html

This repo contains two things.

- First, create a file that contains a list of user rights for the system.  It should be a map of rights constants to rights data structures that contain a name for the right and its bit flag.  An example is attached.
- Second, a function in Javascript that checks the supplied JWT against a supplied right to see if the user has that right.

`hasRight(token, userRightToCheck);`
- `token`: User Token data that must contain `userRightsBits` value.
- `userRightToCheck`: Right of a user to check. ex: `MANAGE_USERS`.

## Add new right
All rights are in [right.js](https://github.com/hats-and-ladders/user-rights/blob/master/rights.js) file.

Add new right at last with respective `name` and `flag`.
- `name`: It should not be long enough and string length must be <=16.
- `flag`: It is the respective bitvalue and should be unique and must be `Math.pow(2,key)` where `key` is the index of your right.
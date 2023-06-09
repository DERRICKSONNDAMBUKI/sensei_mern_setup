const express = require('express')
const { users, userByID, createUser, removeUser, readUser, updateUser, stripe_auth } = require('../../controllers/user/user.controller')
const { requireSignin, hasAuthorization } = require('../../controllers/user/auth.controller')

const router = express.Router()

router.route('/')
    .get(users)
    .post(createUser)


router.route('/:userId')
    .get(requireSignin, readUser)
    .put(requireSignin, hasAuthorization, updateUser)
    .delete(requireSignin, hasAuthorization, removeUser)

router.route('/stripe_auth/:userId')
    .put(requireSignin, hasAuthorization, stripe_auth, updateUser)

router.param('userId', userByID)

module.exports = router
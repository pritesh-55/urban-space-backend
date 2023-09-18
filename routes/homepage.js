const express = require('express')
const router = express.Router()

const subscribe = require("../controllers/subscribe")


router.route('/subscribe').get(subscribe)


module.exports = router  
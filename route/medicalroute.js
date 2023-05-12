const {getmedical,postmedical,putmedical,deletemedical} = require('../controller/medicalController')

const route = require('express').Router()

route.get('/',getmedical)

route.post('/',postmedical)


route.put('/:id',putmedical)

route.delete('/:id',deletemedical)

module.exports = route
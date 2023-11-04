const express = require('express');
const router = express.Router();

const {createUser,getUser,updateUser,deleteUser,createServiceUser,getServiceUser,updateServiceUser,deleteServiceUser} = require('../controller/controller')

//POST category
router.post("/category",createUser)

//GET/categories
router.get("/categories",getUser)

//PUT /category/:categoryId
router.put("/category/:categoryId",updateUser)

// DELETE /category/:categoryId
router.delete("/category/:categoryId",deleteUser)

// POST /category/:categoryId/service
router.post("/category/:categoryId/service",createServiceUser)

// GET /category/:categoryId/services
router.get("/category/:categoryId/service",getServiceUser)

// PUT /category/:categoryId/service/:serviceId
router.post("/category/:categoryId/service/:serviceId",updateServiceUser)

//DELETE /category/:categoryId/service/:serviceId
router.post("/category/:categoryId/service/:serviceId",deleteServiceUser)


module.exports = router;
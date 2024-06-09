// Imports 
const router = require ("express").Router();
const apiRoutes = require ("./api");
const homeRoutes = require ("./homeroutes");


// middleware

router.use("/". homeRoutes);
router.use("/api",apiRoutes);

// Exports

module.exports = router;

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryString = `Select * from "item";`;
    pool.query(queryString)
    .then(result=>{
        res.send(result.rows)
    })
    .catch(error=>{
        console.log('Error getting grocery items from database:', error)
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
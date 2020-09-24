const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET all items that need to be bought
 */
router.get('/active', (req, res) => {
    console.log('in /api/item/active')
    const queryString = `Select * from "item" WHERE "needed" = true;`;
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
 * GET all items that have been bought
 */
router.get('/inactive', (req, res) => {
    const queryString = `Select * from "item" WHERE "needed" = false;`;
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
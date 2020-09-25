const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET all items that need to be bought
 */
router.get('/active', (req, res) => {
    const queryString = `Select * from "item" WHERE "needed" = true;`;
    pool.query(`Select * from "item" WHERE "needed" = true;`)
    .then((result)=>{
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
 * POST new item to item table
 */
router.post('/', (req, res) => {
    const queryString = `INSERT INTO "item" ("name") VALUES ($1);`;
    pool.query(queryString, [req.body.name])
    .then(result=>{
        res.sendStatus(201)
    })
    .catch(error=>{
        console.log('Error getting grocery items from database:', error)
        res.sendStatus(500);
    })
});

//update an item as nonlonger needed
router.put('/:id', (req, res) => {
    const queryString = `UPDATE "item" SET "needed" = false where "id" = $1;`;
    pool.query(queryString, [req.params.id])
    .then(result=>{
        res.sendStatus(200)
    })
    .catch(error=>{
        console.log('Error getting grocery items from database:', error)
        res.sendStatus(500);
    })
});

//update an item as needed
router.put('/needed/:id', (req, res) => {
    const queryString = `UPDATE "item" SET "needed" = true where "id" = $1;`;
    pool.query(queryString, [req.params.id])
    .then(result=>{
        res.sendStatus(200)
    })
    .catch(error=>{
        console.log('Error getting grocery items from database:', error)
        res.sendStatus(500);
    })
});

router.delete('/:id', (req, res) => {
    const queryString = `DELETE FROM "item" where "id" = $1;`;
    pool.query(queryString, [req.params.id])
    .then(result=>{
        res.sendStatus(200)
    })
    .catch(error=>{
        console.log('Error getting grocery items from database:', error)
        res.sendStatus(500);
    })
});


module.exports = router;
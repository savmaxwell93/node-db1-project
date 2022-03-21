const router = require('express').Router();
const md = require('./accounts-middleware');
const Account = require('./accounts-model');

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Account.getAll()
    res.status(200).json(accounts)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', md.checkAccountId, async (req, res, next) => {
  try {
    res.status(200).json(req.account)
  } catch (err) {
    next(err)
  }
})

router.post('/',
md.checkAccountPayload,
md.checkAccountNameUnique,
async (req, res, next) => {
  try {
    const newAccount = await Account.create(req.body)
    res.status(201).json(newAccount)
  } catch (err) {
    next(err)
  }
})

router.put('/:id',
md.checkAccountId,
md.checkAccountPayload,
md.checkAccountNameUnique,
async (req, res, next) => {
  try {
    //CODE HERE
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', md.checkAccountId, async (req, res, next) => {
  try {
    //CODE HERE
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = router;

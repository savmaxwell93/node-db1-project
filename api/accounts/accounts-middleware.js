const Account = require('./accounts-model');
const db = require('../../data/db-config');
const accountSchema = require('../schemas/index');

exports.checkAccountPayload = async (req, res, next) => {
  try {
    const validated = await accountSchema.validate(req.body);
    req.body = validated;
    next();
  } catch (err) {
    res.status(400).json({
      message: err.message
    })
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const existing = await db('accounts')
    .where('name', req.body.name.trim())
    .first();

    if(existing) {
      next({ status: 400, message: 'that name is taken'})
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id)
    if(!account) {
      res.status(404).json({
        message: 'account not found'
      })
    } else {
      req.account = account
      next()
    }
  } catch (err) {
    next(err)
  }
}

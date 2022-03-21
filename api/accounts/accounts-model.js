const db = require('../../data/db-config');

const getAll = () => {
  // SELECT * FROM accounts;
  return db('accounts');
}

const getById = id => {
  // SELECT * FROM accounts WHERE id = id;
  return db('accounts').where('id', id).first();
}

const create = account => {
  // INSERT INTO accounts (name, budget) VALUES (account.name, account.budget)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}

const db = require('../../data/db-config');

const getAll = () => {
  // SELECT * FROM accounts;
  return db('accounts');
}

const getById = id => {
  // SELECT * FROM accounts WHERE id = id;
  return db('accounts').where({ id }).first();
}

const create = async account => {
  // INSERT INTO accounts (name, budget) VALUES (account.name, account.budget)
  const [ id ] = await db('accounts').insert(account);
  return getById(id);
}

const updateById = async (id, account) => {
  // UPDATE accounts SET accountInfo = account.change WHERE id = id
  await db('accounts').where({ id }).update(account);
  return getById(id);
}

const deleteById = async id => {
  // DELETE FROM accounts WHERE id = id
  const deleted = await getById(id);
  await db('accounts').where({ id }).del();
  return deleted;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}

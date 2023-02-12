const { getAll, get, create, update, remove } = require('./utils')

const getAll$ = async () => await getAll()
const get$ = async () => await get(id)
const create$ = async () => await create(entity)
const update$ = async () => await update(entity)
const remove$ = async () => await remove(id)
const count$ = async () => {
  const list = await getAll()
  return list.length
}

module.exports = {
  getAll$,
  get$,
  create$,
  update$,
  remove$,
  count$
}
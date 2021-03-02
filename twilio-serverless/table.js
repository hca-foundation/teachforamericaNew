/** Save an item in the to-do list */
export const updateTable = async (event, Context) => {
  const incoming = JSON.parse(event.body)
  const { item, complete } = incoming
  try {
    await saveItemInDB(item, complete)
    return respond({ created: incoming }, 201)
  } catch (err) {
    return respond(err, 400)
  }
}
/** Get an item from the to-do-list table */
export const getStudents = async (event, context) => {
  const id = event.pathParameters.id
  try {
    const toDoItem = await getItemFromDB(id)
    return respond(toDoItem, 200)
  } catch (err) {
    return respond(err, 404)
  }
}

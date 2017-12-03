export default class UserQueries {
  static getName(id) {
    return `SELECT firstName, lastName FROM users WHERE id = ${id}`;
  }
}

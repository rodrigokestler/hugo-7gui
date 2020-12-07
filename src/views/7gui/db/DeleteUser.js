import PouchDB from "pouchdb";
function DeleteUser(user) {
    let db = new PouchDB('crud');
    db.remove(user);
}
export default DeleteUser;
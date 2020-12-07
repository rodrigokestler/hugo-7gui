import PouchDB from 'pouchdb';

function AddUser (user) {
  console.log(user);
    let db = new PouchDB('crud');
    let addRecord = {
        _id: new Date().toISOString(),
        name: user.name,
        surname: user.surname,
        value: user.value,
        label: user.label
    };

    db.put(addRecord, function callback(err, result) {
        if (!err) {
            console.log('Successfully posted a user!');
        }
    });
}
export default AddUser;
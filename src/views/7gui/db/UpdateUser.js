import PouchDB from 'pouchdb';

function UpdateUser(user) {
    
    let db = new PouchDB('crud');
    db.get(user._id).then(function(doc){
      
      doc.name = user.name;
      doc.surname = user.surname;
      doc.label   = user.label;
      doc.value = user.value;
      
      return db.put(doc);
    });
}
export default UpdateUser;
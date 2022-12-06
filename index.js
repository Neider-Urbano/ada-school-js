let arrayContacts = [];

const add = (arrayContacts, newContact) => {
  arrayContacts.push(newContact);
};

const deleteContact = (array, deleteName) => {
  let newArray = array.filter((name) => {
    if (name !== deleteName) {
      return name;
    }
  });
  return newArray;
};

const print = (array) => {
  console.table(array);
};

add(arrayContacts, "neider urbano");
add(arrayContacts, "julian bastilla");
arrayContacts = deleteContact(arrayContacts, "neider urbano");
print(arrayContacts);

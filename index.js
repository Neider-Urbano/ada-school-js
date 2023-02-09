let arrayContacts = [
  {
    id: 1,
    nombres: "neider julian",
    apellidos: "urbano bastilla",
    telefono: 320452545,
    ubicaciones: {
      ciudad: "paz de ariporo",
      direccion: "calle 14 · 4-36",
    },
  },
];

const add = (arrayContacts, newContact) => {
  var arrayValido = ["nombres", "apellidos", "telefono", "ubicaciones"];
  if (typeof newContact === "object") {
    var error = false;
    arrayValido.map((miKey) => {
      if (Object.keys(newContact).includes(miKey) !== true) {
        if (error === false) error = miKey + " no esta en el objecto enviado";
      }
    });
    if (error === false) {
      Object.keys(newContact).map((prop) => {
        if (newContact[prop].length < 1) {
          if (error === false) error = "el valor de " + prop + " esta vacio";
        }
      });
    }
    if (error == false) {
      newContact.id = Math.max(...arrayContacts.map((x) => x.id)) + 1;
      arrayContacts.push(newContact);
      console.log("contacto guardado");
    } else {
      console.log(error);
    }
  } else {
    console.error("No es un tipo de dato valido");
  }
};

const deleteContact = (array, deleteName) => {
  let newArray = array.filter((data) => {
    if (data.nombres !== deleteName) {
      return data;
    }
  });
  console.log("contacto eliminado");
  return newArray;
};

const editContact = (array, nameEdit, prop, newData) => {
  let newArray = array.filter((data) => {
    if (data.nombres === nameEdit) {
      return data;
    }
  });
  if (newArray.length < 1) console.log("contacto no encontrado");
  else {
    if (Object.keys(newArray[0]).includes(prop) === true) {
      if (newData.length > 0) {
        array.map((contact) => {
          if (contact.nombres === nameEdit) {
            contact[prop] = newData;
          }
          return contact;
        });
        console.log("contacto actualizado");
      } else console.log("la informacion esta vacia");
    } else {
      console.log("propiedad no encontrado");
    }
  }
};

const print = (array) => {
  console.table(array);
};

add(arrayContacts, {
  nombres: "Neider",
  apellidos: "urbano bastilla",
  telefono: 320452545,
  ubicaciones: {
    ciudad: "paz de ariporo",
    direccion: "calle 14 · 4-36",
  },
});
add(arrayContacts, {
  nombres: "julian",
  apellidos: "urbano bastilla",
  telefono: 320452545,
  ubicaciones: {
    ciudad: "paz de ariporo",
    direccion: "calle 14 · 4-36",
  },
});
print(arrayContacts);
arrayContacts = deleteContact(arrayContacts, "Neider");
print(arrayContacts);
editContact(arrayContacts, "julian", "nombres", "aa");
print(arrayContacts);

import { API_URL } from "./API_URL"

export const Loginfetch = (user) => {

  return fetch(API_URL + 'user/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((errorData) => {
        console.error('Error en el Login:', errorData.error);
        return { error: errorData.error };
      });
    }
  })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
      return { error: error.message };
    });
}

export const RegisterUser = (user) => {

  return fetch(API_URL + "user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((errorData) => {
        console.error('Error al registrar el usuario:', errorData.error);
        return { error: errorData.error };
      });
    }
  })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
      return { error: error.message };
    })
}

export const CreateTask = (newTask) => {
  fetch(API_URL + "todo", {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newTask)
  }).then((response) => {
    if (response.ok) {
      window.alert("La tarea: " + newTask.name + " se creo exitosamente")
      return response.json();
    } else {
      return response.json().then((errorData) => {
        console.error('Error al crear la tarea:', errorData.error);
        return { error: errorData.error };
      });
    }
  })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
      return { error: error.message };
    });
}



export const Delete = () => {

  const selected = JSON.parse(globalThis.localStorage.getItem('task'))


  return fetch(API_URL + `todo/${selected.id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(window.alert("se elimino correctamente la tarea " + selected.name)
    )
}

export const Update = (selected) => {

  return fetch(API_URL + 'todo', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(selected)
  })
    .then((response) => {
      if (response.ok) {
        return response.json
      } else {
          return response.json().then((errorData) => {
            console.error('Error al crear la tarea:', errorData.error);
            return { error: errorData.error };
          });
      }
    })
}

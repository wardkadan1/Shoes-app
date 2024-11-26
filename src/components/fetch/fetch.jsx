export function emailApass(setUsers, setError) {
  fetch("https://6743a37eb7464b1c2a656fde.mockapi.io/user")
    .then((response) => response.json())
    .then((data) => {
      setUsers(data);
    })
    .catch((error) => {
      console.error("Error during login:", error);
      setError("An error occurred while logging in. Please try again later.");
    });
}

export function addShoes(title, price, image) {
  return fetch(`https://6743a37eb7464b1c2a656fde.mockapi.io/shoes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, price, image }),
  }).catch((error) => {
    console.error("Error adding shoe:", error);
    throw error;
  });
}

export function getshoes(setShoes) {
  return fetch(`https://6743a37eb7464b1c2a656fde.mockapi.io/shoes`)
    .then((response) => {
      return response.json();
    })
    .then((data) => setShoes(data))
    .catch((error) => {
      console.error("Error fetching shoes:", error);
      setShoes([]);
    });
}

export function deleteShoes(shoesid) {
  return fetch(`https://6743a37eb7464b1c2a656fde.mockapi.io/shoes/${shoesid}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(`Shoe with id ${shoesid} deleted successfully.`, data);
    })
    .catch((error) => {
      console.error("Error deleting shoe:", error);
    });
}

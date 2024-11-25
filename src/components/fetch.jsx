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
  fetch(`https://6743a37eb7464b1c2a656fde.mockapi.io/shoes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title, price: price, image: image }),
  }).catch((error) => console.error("Error adding shoe:", error));
}

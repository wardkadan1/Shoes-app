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

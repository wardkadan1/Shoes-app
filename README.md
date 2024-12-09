
# 👟 **Shoe Store Manager - React CRUD App**  

## 📚 **Project Overview**  

This **React-based CRUD application** serves as a management tool for a shoe store inventory. It allows Create, Read, Update, and Delete (CRUD) operations via a **Mock API**, routing with `react-router-dom`, and demonstrates modern React concepts like **state management, routing, and HTTP requests**.

---

## 🚀 **Tech Stack**  

- **React**  
- **React Router**  
- **MockAPI for Data**: [MockAPI Documentation](https://mockapi.io)  

---

## 🛠️ **Setup Instructions**  

1. Clone the repository:  
   ```bash
   git clone https://github.com/wardkadan1/Shoes-app.git
   ```  

2. Navigate to the directory:  
   ```bash
   cd Shoes-app
   ```  

3. Install dependencies:  
   ```bash
   npm install
   ```  

4. Run the application:  
   ```bash
   npm start
   ```  

5. Open the app at [http://localhost:3000](http://localhost:3000).

---

## 🔗 **Routes**  

The following routes are configured in the app:

| **Route**                       | **Path**                  | **Description**                                           |
|----------------------------------|---------------------------|-----------------------------------------------------------|
| **Home Page**                    | `/`                       | Landing/home page of the app.                             |
| **Shoes Page**                   | `/shoes`                  | Displays a list of all shoes available.                  |
| **Add Shoe Page**                | `/shoes/add`              | Page to add a new shoe with fields for title, price, image. |
| **Shoe Details Page**            | `/shoes/:shoeId`          | View details about a particular shoe and options to edit/delete. |
| **Login Page**                   | `/login`                  | Login page to manage user authentication.                |

---

## ⚙️ **Features**  

- **CRUD Operations:**  
  - **Create**: Add new shoes to inventory.  
  - **Read**: View a list of all available shoes.  
  - **Update**: Edit the price, name, or other properties of a shoe.  
  - **Delete**: Remove a specific shoe from the inventory.

- **Mock API Integration:**  
  Using [MockAPI](https://mockapi.io) to handle backend requests.  

- **Loading Spinner:**  
  Spinner shown during HTTP requests for a smoother user experience.

- **User Login**  
  A simple user authentication system to simulate admin privileges.

---

## 💬 **Known Challenges**  

1. Handling repeated clicks during asynchronous actions.  
2. Managing state updates while ensuring validation to maintain data consistency.  
3. Ensuring smooth spinner transitions during AJAX calls.

---

## 🔗 **Live Demo**  

You can check the live demo here:  
[Live Demo (Vercel)](https://shoes-app-eta.vercel.app)

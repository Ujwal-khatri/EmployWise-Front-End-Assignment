# EmployWise Front End Assignment

This React application built with Vite integrates with the [Reqres API](https://reqres.in/) for user authentication, paginated user listing, editing, and deletion functionality. As a bonus feature, it includes client-side search and filtering to improve user experience.

## 🚀 Live Demo (Netlify)

**View the deployed application:**  
[[https://your-netlify-app-url.netlify.app](https://employwire.netlify.app/) 
*(Replace the link above with your actual Netlify URL)*

---

## 📖 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Assumptions & Considerations](#assumptions--considerations)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## 🌟 Overview

This project is developed as part of an assignment for Global Groupware Solutions Limited. It demonstrates how front-end applications interact with REST APIs by providing functionality such as authentication, user listing with pagination, and CRUD operations. Additionally, it features a client-side search for better usability.

---

## ✅ Features

- **User Authentication:** Log in using predefined credentials and manage authentication via tokens.
- **Paginated User List:** Display users fetched from the Reqres API, with pagination controls.
- **User Management:** Edit or delete users from the displayed list.
- **Client-side Search & Filtering:** Quickly find users by searching their first or last names.
- **Protected Routes:** Restrict access to pages that require authentication.

---

## 🛠 Technologies

- **React**
- **Vite**
- **React Router DOM**
- **Axios**
- **CSS**

---

## 📥 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/EmployWise-Front-End-Assignment.git
cd EmployWise-Front-End-Assignment
npm install
```
## 🌐 Deployment
This project is automatically deployed to Netlify whenever changes are pushed to the repository.

Netlify URL: https://your-netlify-app-url.netlify.app

## 📂 Project Structure

EmployWise-Front-End-Assignment/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── reqres.js
│   ├── components/
│   │   ├── Auth/
│   │   │   └── LoginForm.jsx
│   │   └── Users/
│   │       ├── UserCard.jsx
│   │       ├── UserList.jsx
│   │       ├── Pagination.jsx
│   │       └── EditUserForm.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── UsersPage.jsx
│   │   └── EditUserPage.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Login.css
│   │   ├── Users.css
│   │   └── EditUser.css
│   ├── App.jsx
│   ├── index.js
│   └── routes.js (optional)
├── package.json
└── README.md

## ⚠️ Assumptions & Considerations
This app utilizes Reqres API, hence data changes are not persistent.

Authentication tokens are stored in browser local storage.

Client-side search only filters the current page's results.

Responsiveness is ensured for both desktop and mobile devices.

## 💡 Future Enhancements
User Registration: Allow new users to sign up.

Enhanced Error Handling: Include detailed error handling and loading states.

Testing: Add unit and integration tests for robustness.

Backend Integration: Integrate with a full backend for data persistence.

## 📜 License
This project is for educational purposes and does not include a specific license.


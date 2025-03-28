EmployWise Front End Assignment

This is a React application built with Vite that interacts with the Reqres API to perform basic user management tasks. The app includes authentication, user listing with pagination, and options to edit and delete users. As a bonus, it also implements client-side search and filtering for the user list.

Table of Contents

Overview

Features

Technologies Used

Installation

Running the Application

Deployment

Folder Structure

Assumptions and Considerations

Future Enhancements

Overview
This project is developed as part of an assignment for Global Groupware Solutions Limited. The application leverages the Reqres API to simulate backend interactions, allowing users to log in, view a list of users, and perform edit/delete operations. Additionally, client-side search functionality has been implemented to filter users by their first or last names.

Features
Authentication:

Users can log in using predefined credentials (Email: eve.holt@reqres.in, Password: cityslicka).

Upon successful login, an authentication token is stored in local storage.

User Listing:

Displays a paginated list of users fetched from the Reqres API.

Users are displayed as cards showing their avatar, first name, last name, and email.

User Management:

Each user card includes options to edit or delete the user.

Editing a user brings up a form pre-filled with the user’s data.

Deletion removes the user from the list.

Client-Side Search & Filtering:

A search input allows filtering the user list by first or last name.

Protected Routes:

Certain pages are protected using a token-based authentication check.

Technologies Used
React for building the user interface.

Vite as the build tool for fast development.

React Router DOM for client-side routing.

Axios for making HTTP requests.

CSS for styling.

Installation
Clone the Repository:

bash
Copy
git clone https://github.com/your-username/EmployWise-Front-End-Assignment.git
Navigate into the Project Directory:

bash
Copy
cd EmployWise-Front-End-Assignment
Install Dependencies:

bash
Copy
npm install
Running the Application
Start the development server with:

bash
Copy
npm run dev
Then, open your browser and navigate to http://localhost:5173/.

Deployment
This project is hosted on Netlify. Every push to the GitHub repository triggers an automatic build and deployment.

Live Demo:
View the deployed application

Make sure to update the link with your actual Netlify deployed URL.

Folder Structure
pgsql
Copy
EmployWise-Front-End-Assignment/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── reqres.js
│   ├── components/
│   │   ├── Auth/
│   │   │   └── LoginForm.jsx
│   │   ├── Users/
│   │   │   ├── UserCard.jsx
│   │   │   ├── UserList.jsx
│   │   │   ├── Pagination.jsx
│   │   │   └── EditUserForm.jsx
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
Assumptions and Considerations
API Usage:
The application uses the Reqres API for all backend interactions, so it is a front-end-only solution.

Authentication:
Token-based authentication is managed through local storage.

Client-Side Search:
The search feature filters the list of users for the current page. For larger datasets, a server-side search might be more efficient.

Responsive Design:
The app has been designed to be responsive and should work well on both desktop and mobile devices.

Future Enhancements
User Registration:
Implement a registration feature for new users.

Improved Error Handling:
Add loading indicators and more detailed error messages.

Testing:
Write unit and integration tests to improve code quality and reliability.

Backend Integration:
If needed, integrate with a real backend for persistent data.

License
This project is for educational purposes and does not include a specific license.


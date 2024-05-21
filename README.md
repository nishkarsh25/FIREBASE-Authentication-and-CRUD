# CRUD App with React, Firestore, and Firebase Authentication

This is a CRUD (Create, Read, Update, Delete) application built using React.js for the frontend, Firestore for the backend, and Firebase Authentication for user authentication. The application allows users to manage a list of items stored in a Firestore database securely, with authentication features to ensure data security and user privacy.

## Features

- **User Authentication**:
  - **Sign Up**: Users can create a new account by providing their email and password.
  - **Sign In**: Registered users can sign in securely using their email and password credentials.
  - **Sign Out**: Users can sign out of their account to securely end their session.
  - **Email Verification**: After signing up, users receive a verification email to confirm their email address.
- **Protected Routes**:
  - Certain routes in the application are protected and require users to sign in before accessing them. Unauthorized users are redirected to the sign-in page.
- **CRUD Operations**:
  - **Add New Item**: Users can add new items to the list by providing a name for the item.
  - **Update Item**: Users can update the name of an existing item in the list.
  - **Delete Item**: Users can delete items from the list.


## Live Demo

You can try out the live demo of the app [here](https://firebase-authentication-and-crud.onrender.com/).

## Folder Structure

```
src/
├── components/
│   ├── App.jsx
│   ├── CrudApp.jsx
│   ├── PasswordReset.jsx
│   ├── Signin.jsx
│   ├── Signup.jsx
│   ├── Signout.jsx
│   └── SocialLogin.jsx
├── firebase/
│   └── firebase.js
├── AuthProvider.js
├── index.js
└── index.css

```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/FIREBASE-Authentication-and-CRUD/blob/main/Screenshots/ss1.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/FIREBASE-Authentication-and-CRUD/blob/main/Screenshots/ss2.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/FIREBASE-Authentication-and-CRUD/blob/main/Screenshots/ss3.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/FIREBASE-Authentication-and-CRUD/blob/main/Screenshots/ss4.png" alt="Screenshot 1" width="1000"> 

## Technologies Used

- **React**: A JavaScript library for building user interfaces. React provides a fast, efficient, and scalable way to create dynamic web applications.
- **Firestore**: Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. It provides real-time data synchronization and offline support for web and mobile apps.
- **Firebase Authentication**: Firebase Authentication is a service that provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using email/password, phone numbers, social media accounts, and more.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/FIREBASE-Authentication-and-CRUD.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. **Run the development server**:

   ```bash
   npm run dev
   ```
2. **Open your browser** and navigate to http://localhost:5173 to view the app.

## How to Use:

To explore the features of the CRUD application, follow these steps:

1. **Sign Up**: 
   - Navigate to the Sign Up page by clicking on the "Sign up now!" link on the home page.
   - Enter your email and password to create a new account.
   - Once signed up, you will be automatically logged in.

2. **Sign In**:
   - If you already have an account, navigate to the Sign In page by clicking on the "Sign in here!" link on the home page.
   - Enter your email and password to sign in.
   - After successful authentication, you will be redirected to the main dashboard.

3. **Add Items**:
   - On the main dashboard, you can add new items to the list.
   - Enter the item name in the input field and press "Enter" or click on the "Add" button to add the item.
   
4. **Update Items**:
   - To update an existing item, click on the "Update" button next to the item.
   - Enter the updated item name in the input field and press "Enter" or click on the "Save" button to update the item.
   
5. **Delete Items**:
   - To delete an item, click on the "Delete" button next to the item.
   - Confirm the deletion when prompted.

6. **Sign Out**:
   - To sign out of your account, click on the "Sign Out" button located at the bottom of the main dashboard.
   
7. **Social Login**:
   - Alternatively, you can sign in using your Google or Facebook account by clicking on the respective buttons on the home page.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.

- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **Firebase**: Firebase provides a suite of tools for building and managing web and mobile applications. Visit [Firebase](https://firebase.google.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com


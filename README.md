# YourPass

Welcome to **YourPass** - a secure and user-friendly password manager. This web application allows you to store, manage, and retrieve your passwords with ease. Built using MongoDB, ExpressJS, ReactJS, HTML, CSS, and JavaScript, YourPass ensures your password management is seamless across all devices.

## Features

- **Add Passwords**: Store passwords by entering the website URL, username, and password.
- **Copy to Clipboard**: Copy any field (URL, username, or password) to the clipboard with a single click.
- **Edit Passwords**: Update your stored passwords as needed.
- **Delete Passwords**: Remove passwords from the database with ease.
- **Responsive Design**: Enjoy a seamless experience on all screen sizes, from desktops to mobile devices.
- **Alerts with Toastify**: Get designed alerts for actions like adding, editing, or deleting passwords using the Toastify library.

## Demo

Check out the live demo of YourPass [here](https://adityabagrii.github.io/YourPass).

## Repository

You can find the source code for YourPass on GitHub [here](https://github.com/adityabagrii/YourPass).

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/adityabagrii/YourPass.git
    cd YourPass
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following:

    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=your_port_number
    ```

4. **Run the server:**

    ```sh
    npm start
    ```

5. **Navigate to the client directory and start the React app:**

    ```sh
    cd client
    npm install
    npm start
    ```

6. **Open the app in your browser:**

    Visit `http://localhost:{PORT}` to see YourPass in action.

## Usage

- **Add a Password:**
  - Click on "Add Password".
  - Enter the website URL, username, and password.
  - Click "Save".

- **Copy a Field:**
  - Click on the copy icon next to the field you want to copy (URL, username, or password).

- **Edit a Password:**
  - Click the edit icon next to the password entry you want to modify.
  - Update the details and click "Save".

- **Delete a Password:**
  - Click the delete icon next to the password entry you want to remove.
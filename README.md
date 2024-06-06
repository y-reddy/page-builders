# React Website with Multiple Page Builders

This project demonstrates how to integrate various page builders using a React application. The project currently includes implementations for GrapesJS.

## Table of Contents

- [Directory Structure](#directory-structure)
- [Installation](#installation)
- [Usage](#usage)
- [GrapesJS Setup](#grapesjs-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Components](#components)
  - [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [License](#license)

## Directory Structure

```
page-builders/
└── grapesjs
    ├── backend
    └── frontend
```

## Installation

### Prerequisites

- Node.js
- npm

### Clone the repository

```bash
git clone https://github.com/y-reddy/page-builders.git
cd page-builders
```

## Usage

This project allows users to toggle between different page builders and their custom content sections.

### Running a Specific Page Builder

- Navigate to the directory of the specific page builder you want to use.
- Follow the setup instructions for both backend and frontend.

## GrapesJS Setup

### Backend Setup

#### Navigate to the backend directory

```bash
cd page-builders/grapesjs/backend
```

#### Install dependencies

```bash
npm install
```

#### Start the backend server

```bash
node server.js
```

The backend server will run on `http://localhost:3000`.

### Frontend Setup

#### Navigate to the frontend directory

```bash
cd ../frontend
```

#### Install dependencies

```bash
npm install
```

#### Start the frontend server

```bash
npm start
```

The frontend server will run on `http://localhost:3001`.

### Components

#### App Component

The `App` component handles the toggling between the custom content and the GrapesJS editor.

#### EditorComponent

The `EditorComponent` initializes the GrapesJS editor and handles saving/loading content to/from the backend.

#### CustomSection

The `CustomSection` component fetches HTML, CSS, and JavaScript from the backend and injects it into the DOM, executing the JavaScript as needed.

### API Endpoints

#### Save Content

- **URL:** `/api/content/save`
- **Method:** `POST`
- **Description:** Saves the HTML, CSS, and JavaScript content.
- **Request Body:**
  ```json
  {
    "id": "myCustomContent",
    "html": "<div>Hello World</div>",
    "css": "div { color: red; }",
    "javascript": "console.log('JavaScript executed!');"
  }
  ```

#### Load Content

- **URL:** `/api/content/load`
- **Method:** `POST`
- **Description:** Loads the HTML, CSS, and JavaScript content.
- **Request Body:**
  ```json
  {
    "id": "myCustomContent"
  }
  ```

## Running the Application

### Start the GrapesJS Backend

```bash
cd page-builders/grapesjs/backend
npm install
node server.js
```

### Start the GrapesJS Frontend

```bash
cd page-builders/grapesjs/frontend
npm install
npm start
```

Visit `http://localhost:3001` in your browser to see the GrapesJS implementation in action.

## License

This project is licensed under the MIT License.

# Clucknest Server

## Prerequisites

Make sure you have the following software/runtime installed on your machine:

- Node (version 14.21.3) and above

## Project setup
Clone this repo

```
git clone https://github.com/TundeOladejo/clucknest-server.git
```

### Install the required dependencies:
```
npm install
```

## Project Structure
The project structure follows a modular approach to enhance maintainability and scalability:
```
.
├── config
│   ├── ...
|
├── controllers
│   ├── ...
│
├── middleware
│   ├── ...
|
├── models
│   ├── ...
│
├── routes
│   ├── ...
│
├── .babelrc
├── .env.sample
├── index.js
├── package.json
└── README.md

```

### Configuration

Rename ```.env.sample``` to ``` .env ``` to setup database connection details, API keys, and other environment-specific settings.

### Usage
To initiate the Express server, execute the following command:

```
npm run dev
```

## Credits
- Babatunde Oladejo [tundeoladejo@outlook.com](mailto:tundeoladejo@outlook.com)

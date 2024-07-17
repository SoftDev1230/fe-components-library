# Frontend Component Library
A library of reusable React components using TypeScript and Tailwind CSS.

### Table of Contents
* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [Development](#development)
* [Publishing](#publishing)

### Introduction
The fe-component-library is a collection of reusable React components designed to streamline the
development process and ensure consistency across projects. The library is built with TypeScript
and styled using Tailwind CSS.

### Installation
#### Local Development
1. To link the library locally for development:
``` bash
git clone https://github.com/your-org/fe-component-library.git
cd fe-component-library
```
2. Install dependencies:
``` bash
npm install
```
3. Link the library:
``` bash
npm link
```

#### Using the Library in Another Project
To use the locally linked version of the library in another project:
1. Navigate to your project directory:
``` bash
cd path/to/your-project
```
2. Link the component library:
``` bash
npm install react react-dom
```
3. Install peer dependencies if not already installed:
``` bash
npm install react react-dom
```

### Usage
Import and use the components in your project:
``` tsx
import React from 'react';
import { Button } from 'fe-component-library';
import './App.css';

const App: React.FC = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Hello, world!</h1>
            <Button label="Click Me" onClick={handleClick} />
        </div>
    );
};

export default App;
```
### Development
#### Building the Library
To build the library, run:
``` bash
npm run build
```
#### Watching for Changes
To automatically rebuild the library on changes, run:
``` bash
npm run watch
```


### Publishing
To publish the library to GitHub Packages, follow these steps:

1. Create a Personal Access Token (PAT)
  * Go to your GitHub account settings.
  * Navigate to Developer settings -> Personal access tokens.
  * Click Generate new token.
  * Select the scopes: read:packages, write:packages, and delete:packages.
  * Click Generate token and copy the token.
2. Configure .npmrc
Add your PAT to the .npmrc file in the root of the repository:
``` text
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```
3. Publish to GitHub Packages
Ensure your package.json is configured correctly for GitHub Packages and run:
``` bash
npm publish
```

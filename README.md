# eCommerce-Application

[Lazzone](https://lazzone-ecommerce.netlify.app/) is a platform that replicates real-world shopping experiences in a digital environment . It's a comprehensive online shopping portal that provides an interactive and seamless experience to users. 

----

# Deploy
You can view the full version of the application here
[Lazzone](https://lazzone-ecommerce.netlify.app/) 

![Снимок экрана 2023-09-27 113233](https://github.com/mamont79/eCommerce-Application/assets/43904197/55218832-acaa-464b-ac8f-616fea434305)

----
## Project goals

Creation of a working e-comerce training project for possible further use as a template in similar projects. Learn the process of developing web applications from the inside, using a flexible project management system. Learn modern web development tools. Improve soft and hard skills.

----

## Technology stack

* HTML, CSS, TypeScript.
* React, Styled Components 
* Vite 
* CommerceTools
* Vitest
* Eslin, Prettier, Husky

----

## Installation
**Recommended ide: VS Code**

**npm v 18.17.0**

*If you don’t have node.js and npm install from this : [Node.js](https://nodejs.org/en/download)*


* Clone the repository to your PC 
```
git clone https://github.com/mamont79/eCommerce-Application.git
```
* Open project in VS Code

* Install dependencies
```
npm install 
// or
npm i
```

* Install husky Git hooks
```
npm run prepare
```

* Install extensions for Vscode 
  on the tab extensions find and install:
1.	ESLint
2.	Prettier — Code formatter. 
3.	vscode-styled-components
4.	You may need to restart the editor after installation

 [![eslint](https://github.com/mamont79/eCommerce-Application/assets/43904197/eb61e39c-7d0f-4186-81d2-54f3e9bc7115)](https://eslint.org/)
 [![prettier](https://github.com/mamont79/eCommerce-Application/assets/43904197/1c5321f7-94da-4057-96a8-4bab068c5426)](https://prettier.io/)
 [![styled-components](https://github.com/mamont79/eCommerce-Application/assets/43904197/30e9fb67-4e6b-4c6f-b412-c5084ae15684)](https://styled-components.com/)
----

## Usage
* Run the project locally
```
npm start
```

* Create a build directory with a production build of your app
```
npm run build
```

* Run linter for autocheck your code
  
*linter runs before each commit automatically by husky*
```
npm run lint
```

* When errors are found that can be fixed automatically
```
npm run lint:fix
```

* Installation  husky Git hooks for autorun ESlint before commit
```
npm run prepare
```

* Autoformat  code in files
```
npm run prettier
```

* Run Jest tests
  
*tests runs before each commit automatically by Vitest*
```
npm run test
```

* Generat test outcome reports
  
 *tests runs before each commit automatically by Vitest*
```
npm run coverage
```


# Marvel's Character Search System

![Alt text](https://i.ibb.co/gRkfBPj/logo.png 'Logo Marvel')

## ☪ Start

The project was configured using Babel, which is responsible for converting the React code with modern JavaScript (ECMA6 +) to a code compatible with old browsers.
The Webpack was configured to interpret each type of file, through loaders.

After cloned the project (git clone https://bitbucket.org/lucasvianacunha/marvel.git) use the command:

### `yarn`

For the installation of the project facilities (package.json).

At the root of the project, use the command:

### `yarn dev`

This will start the development server at the address [http://localhost:8080](http://localhost:8080)

To use the system in production use the command:

### `yarn build`

This will start the production server.

### `yarn flow`

This command uses the flow type for type validation.

### Application link in production:

https://lucas-marvel.netlify.app/

## :information_source: Project structure

- components: reusable components in the application;
- pages: pages rendered on the screen when accessing their respective routes;
- services: access to external services, such as the Marvel API;
- store: store where the global state of the application is maintained through Redux, the standard of organization was through modules, for the organization of the action and reducer;
- routes: definition of application routes and their respective components;
- styles: definition of global styles;
- util: location for useful and reusable functions;
- for the stylization of the components, the stylized components were used.

## :interrobang: Operation

On the access screen enter the public and private key provided by the Marvel developer site, the keys are validated and if they are correct the user is directed to the home screen.

![Alt text](https://i.ibb.co/bBNDvC8/access.png 'Access')

The list of characters is displayed on the home screen, with summary information about him. It is possible to navigate between the character pages, and when selecting a character, the user is taken to the screen that displays the details of the character.

![Alt text](https://i.ibb.co/pQS206H/home.png 'Home')

On the character's screen you can see more details about him, such as his photo (if available) and the comics he participated in (with pagination).

![Alt text](https://i.ibb.co/d7xsRKf/character.png 'Character')

## :rocket: Technologies Used

Some of the libraries used in the development of the project:

- axios
- redux
- redux-saga
- styled-components
- webpack
- eslint
- prettier

## License

This project is under the MIT license.

<h2 align="center">
Marvel's Character Search System
</h2>

<p align="center">
<img src="https://i.ibb.co/gRkfBPj/logo.png" width="300" heigth="300">
<!-- <img src="https://cdn.icon-icons.com/icons2/810/PNG/512/film_projector_cinema_icon-icons.com_66132.png" width="300" heigth="300"> -->
</p>

<p align="center">
  <a href="LICENSE" >
<img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

<h3 align="center" >
  <span>Start</span> |
  <span>Project structure</span> |
  <span>Operation</span> |
  <span>Technologies Used</span>
</h3>

<img src="https://i.ibb.co/gRkfBPj/logo.png" width="1200">
![Alt text](https://i.ibb.co/gRkfBPj/logo.png "Logo Marvel")

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

<ul>
  <li>components: reusable components in the application;</li>
  <li>pages: pages rendered on the screen when accessing their respective routes;</li>
  <li>services: access to external services, such as the Marvel API;</li>
  <li>store: store where the global state of the application is maintained through Redux, the module standard was used in the project, for the organization of the action and reducer;</li>
  <li>routes: definition of application routes and their respective components;</li>
  <li>styles: definition of global styles</li>
  <li>util: location for useful and reusable functions</li>
  <li>for the stylization of the components, the styled-components</li>
</ul>

## :interrobang: Operation

On the access screen enter the public and private key provided by the Marvel developer site, the keys are validated and if they are correct the user is directed to the home screen.

<img src="https://i.ibb.co/bBNDvC8/access.png" width="1000">

The list of characters is displayed on the home screen, with summary information about him. It is possible to navigate between the character pages, and when selecting a character, the user is taken to the screen that displays the details of the character.

<img src="https://i.ibb.co/pQS206H/home.png" width="1000">

On the character's screen you can see more details about him, such as his photo (if available) and the comics he participated in (with pagination).

<img src="https://i.ibb.co/d7xsRKf/character.png" width="1000">

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

This project is under the MIT license. See the archive [LICENSE](LICENSE) for more details.

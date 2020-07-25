import React from 'react';
import { Admin, Resource} from "react-admin";
import jsonServerProvider from 'ra-data-json-server';

import {DirectorList, DirectorEdit, DirectorCreate} from "./Components/Director";
import {MovieList} from "./Components/Movie";
const dataProvider = jsonServerProvider('http://localhost:8080');
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="director" list={DirectorList} edit={DirectorEdit} create={DirectorCreate} />
    <Resource name="movie" list={MovieList} />
  </Admin>
)

export default App;
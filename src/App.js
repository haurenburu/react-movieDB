import React from 'react';
import { Admin, Resource} from "react-admin";
import jsonServerProvider from 'ra-data-json-server';

import { DirectorList, DirectorEdit, DirectorCreate} from "./Components/Director";
import { MovieList, MovieEdit, MovieCreate } from "./Components/Movie";
import { ActorList, ActorEdit, ActorCreate } from "./Components/Actor";

const dataProvider = jsonServerProvider('http://localhost:8080');
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="director" list={DirectorList} edit={DirectorEdit} create={DirectorCreate} />
    <Resource name="movie" list={MovieList} edit={MovieEdit} create={MovieCreate}/>
    <Resource name="actor" list={ActorList} edit={ActorEdit} create={ActorCreate}  />
  </Admin>
)

export default App;
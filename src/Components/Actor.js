import React from 'react';
import { Create, List, Edit, Datagrid, SimpleForm, TextField, TextInput } from 'react-admin';

export const ActorList = props => (
<List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="quantMovies" />
        <TextField source="person.firstName" label="First Name"/>
        <TextField source="person.lastName" label="Last Name"/>
    </Datagrid>
</List>
);

export const ActorCreate = props => (
<Create {...props}>
    <SimpleForm>
        <TextInput source="quantMovies" />
        <TextInput source="person.firstName" />
        <TextInput source="person.lastName" />
    </SimpleForm>
</Create>
)

export const ActorEdit = props => (
<Edit {...props}>
    <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="quantMovies" />
        <TextInput source="person.firstName" />
        <TextInput source="person.lastName" />
    </SimpleForm>
</Edit>
)
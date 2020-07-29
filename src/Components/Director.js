import React from 'react';
import { ArrayInput,SimpleFormIterator ,Create, List, Edit, Datagrid, SimpleForm, TextField, TextInput } from 'react-admin';

export const DirectorList = props => (
<List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="quantMovies" />
        <TextField source="person.firstName" label="First Name"/>
        <TextField source="person.lastName" label="Last Name"/>
    </Datagrid>
</List>
);

export const DirectorCreate = props => (
<Create {...props}>
    <SimpleForm>
        <TextInput source="quantMovies" />
        <TextInput source="person.firstName" />
        <TextInput source="person.lastName" />
        <ArrayInput source="movies">
        <SimpleFormIterator>
            <TextInput source="title" label="title" />
            <TextInput source="duration" label="duration" />
            </SimpleFormIterator>
        </ArrayInput>
    </SimpleForm>
</Create>
)

export const DirectorEdit = props => (
<Edit {...props}>
    <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="quantMovies" />
        <TextInput source="person.firstName" />
        <TextInput source="person.lastName" />
        <ArrayInput source="movies">
        <SimpleFormIterator>
            <TextInput source="title" label="title" />
            <TextInput source="duration" label="duration" />
            </SimpleFormIterator>
        </ArrayInput>
    </SimpleForm>
</Edit>
)
import React from 'react';
import { ArrayInput, SimpleFormIterator, Create, List, Edit, Datagrid, SimpleForm, TextField, TextInput } from 'react-admin';

export const MovieList = props => (
<List {...props}>
	<Datagrid rowClick="edit">
		<TextField source="id" />
		<TextField source="title" />
		<TextField source="duration" />
	</Datagrid>
</List>
)

export const MovieCreate = props => (
<Create {...props}>
	<SimpleForm>
		<TextInput source="title" />
		<TextInput source="duration" />
	</SimpleForm>
</Create>
)

export const MovieEdit = props => (
<Edit {...props}>
	<SimpleForm>
		<TextInput disabled source="id" />
		<TextInput source="title" />
		<TextInput source="duration" />
		<ArrayInput source="actor" label="Actor">
			<SimpleFormIterator>
				<TextInput source="quantMovies" />
				<TextInput source="person.firstName" />
				<TextInput source="person.lastName" />
			</SimpleFormIterator>
		</ArrayInput>
	</SimpleForm>
</Edit>
)
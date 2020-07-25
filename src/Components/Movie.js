import React from 'react';
import { Create, List, Edit, Datagrid, SimpleForm, TextField, TextInput } from 'react-admin';

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
	</SimpleForm>
</Edit>
)
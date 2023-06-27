import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
  SimpleShowLayout,
  Show,
} from "react-admin";

export const DelegateList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="surname" />
      <TextField source="firstname" />
      <TextField source="middlename" />
      <TextField source="address" />
      <ReferenceField source="parent_id" reference="delegates">
        <TextField source="surname" />
        <TextField source="firstname" sx={{ m: 0.5 }} />
        <TextField source="middlename" />
      </ReferenceField>
      <TextField source="city" />
      <TextField source="phone" />
      <TextField source="gender" />
      <TextField source="age_group" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

const optionRenderer = (choice) =>
  `${choice.surname} ${choice.firstname} ${choice.middlename}`;
export const DelegateEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="surname" />
      <TextInput source="firstname" />
      <TextInput source="middlename" />
      <TextInput source="address" />
      <ReferenceInput source="parent_id" reference="delegates">
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
      <TextInput source="city" />
      <TextInput source="phone" />
      <TextInput source="gender" />
      <TextInput source="age_group" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
    </SimpleForm>
  </Edit>
);

export const DelegateShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="surname" />
      <TextField source="firstname" />
      <DateField source="middlename" />
      <TextField source="address" />
      <ReferenceField source="parent_id" reference="delegates">
        <TextField source="surname" />
        <TextField source="firstname" sx={{ m: 0.5 }} />
        <TextField source="middlename" />
      </ReferenceField>
      <TextField source="city" />
      <DateField source="phone" />
      <TextField source="gender" />
      <TextField source="age_group" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </SimpleShowLayout>
  </Show>
);

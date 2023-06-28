import {
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  TextField,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  SelectInput,
} from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <EmailField source="email" />
      {/* <TextField source="password" /> */}
      <NumberField source="isAdmin" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="email" />
      <TextInput source="password" />
      {/* <NumberInput source="isAdmin" /> */}
      <SelectInput
        source="isAdmin"
        choices={[
          { id: 0, name: "No" },
          { id: 1, name: "Yes" },
        ]}
      />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
    </SimpleForm>
  </Edit>
);

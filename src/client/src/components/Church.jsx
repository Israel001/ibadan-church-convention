import { Datagrid, DateField, List, TextField } from "react-admin";

export const ChurchList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="address" />
      <TextField source="city" />
      <TextField source="state" />
      <DateField source="email" />
      <DateField source="phone" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

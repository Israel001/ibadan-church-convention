import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const ConventionRegistrationList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="delegate_id" reference="delegates">
        <TextField source="surname" />
        <TextField source="firstname" sx={{ m: 0.5 }} />
        <TextField source="middlename" />
      </ReferenceField>
      <ReferenceField source="delegate_id" reference="delegates">
        <TextField source="age_group" label="Age Group" />
      </ReferenceField>
      {/* <TextField source="delegate_name" /> */}
      <ReferenceField source="church_id" reference="churches">
        <TextField source="name" />
        <TextField source="address" sx={{ m: 0.5 }} />
      </ReferenceField>
      {/* <TextField source="church_name" /> */}
      <DateField source="arrival_date" />
      <TextField source="status" />
      <TextField source="disability" />
      <TextField source="sister_with_children" />
      <DateField source="convention_year" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

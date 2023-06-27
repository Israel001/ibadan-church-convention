import {
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
  Create,
} from "react-admin";

export const RegistrationCardList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="delegate_name" />
      <ReferenceField source="delegate_id" reference="delegates">
        <TextField source="surname" />
        <TextField source="firstname" sx={{ m: 0.5 }} />
        <TextField source="middlename" />
      </ReferenceField>
      <TextField source="registration_no" />
      <TextField source="hall" />
      <NumberField source="room_no" />
      <DateField source="convention_year" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

const optionRenderer = (choice) =>
  `${choice.surname} ${choice.firstname} ${choice.middlename}`;

export const RegistrationCardEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="delegate_name" />
      <ReferenceInput source="delegate_id" reference="delegates">
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
      <TextInput source="registration_no" />
      <TextInput source="hall" />
      <DateInput source="room_no" />
      <DateInput source="convention_year" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
    </SimpleForm>
  </Edit>
);

export const RegistrationCardCreate = () => (
  <Create>
    <SimpleForm>
      {/* <TextInput source="id" /> */}
      <TextInput source="delegate_name" />
      <ReferenceInput source="delegate_id" reference="delegates">
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
      <TextInput source="registration_no" />
      <TextInput source="hall" />
      <DateInput source="room_no" />
      <DateInput source="convention_year" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
    </SimpleForm>
  </Create>
);

import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import jsonServerProvider from "ra-data-simple-rest";
import { ChurchList } from "./components/Church";
import { ConventionRegistrationList } from "./components/ConventionRegistration";
import {
  DelegateEdit,
  DelegateList,
  DelegateShow,
} from "./components/Delegate";
import {
  RegistrationCardCreate,
  RegistrationCardEdit,
  RegistrationCardList,
} from "./components/RegistrationCard";
import { UserEdit, UserList } from "./components/User";

const environment = import.meta.env.MODE;
const HOST = import.meta.env.VITE_HOST_URL;
console.log("environment", environment);
const apiUrl = `${HOST}/api`;
const dataProvider = jsonServerProvider(apiUrl);

const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource
      name="churches"
      list={ChurchList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="delegates"
      list={DelegateList}
      edit={DelegateEdit}
      show={DelegateShow}
    />
    <Resource
      name="convention-registrations"
      list={ConventionRegistrationList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="registration-cards"
      list={RegistrationCardList}
      edit={RegistrationCardEdit}
      create={RegistrationCardCreate}
      show={ShowGuesser}
    />
    <Resource name="users" list={UserList} edit={UserEdit} show={ShowGuesser} />
  </Admin>
);

export default App;

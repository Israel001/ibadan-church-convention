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

const environment = import.meta.env.MODE;
console.log("environment", environment);
const apiUrl =
  environment === "development"
    ? "http://localhost:2000/api"
    : `${location.origin}/api`;
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
  </Admin>
);

export default App;

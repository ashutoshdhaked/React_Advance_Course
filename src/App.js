// import { hoc } from "./components/hoc";
//  import Userinfo from "./components/userinfo";

import UserInfoForm from './components/userform';
import { updatableUser } from "./components/updateuser";
 const UserInfoWrappercomp = updatableUser(UserInfoForm,"3");

// const UserInfoWrapper =  hoc(Userinfo);

function App() {
  return (
    <>
     {/* <UserInfoWrapper test="test the data "  keyvalue="this is the key" valuedata="for the key value is value"/> */}
      {/* <UserInfoWrappercomp/> */}

      <UserInfoWrappercomp/>
    </>
  );
}

export default App;

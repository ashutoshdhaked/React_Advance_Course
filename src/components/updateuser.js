import { useEffect, useState } from "react";
import axios from "axios";

export const updatableUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const [updatableUser, setUpdatableUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`http://localhost:9090/getuserbyid/${3}`);
        setUser(response.data);
        setUpdatableUser(response.data);
      })();
    }, []);

    const userChangeHandler = (updates) => {
      setUpdatableUser({ ...updatableUser, ...updates });
    };

    const userPostHandler = async () => {
      const response = await axios.post(`http://localhost:9090/getuserbyid/${3}`, {
        user: updatableUser,
      });
      setUser(response.data);
      setUpdatableUser(response.data);
    };

    const resetUserHandler = () => {
      setUpdatableUser(user);
    };

    return (
      <Component
        {...props}
        updatableUser={updatableUser}
        changeHandler={userChangeHandler}
        userPostHandler={userPostHandler}
        resetUserHandler={resetUserHandler}
      />
    );
  };
};



import React, { useState } from 'react';
import UserContext, {
  UserContextProps,
} from '../../context/user.context';
import { UserInterface } from '../../interfaces/UserInterface';

const UserProvider: React.FC = ({ children }) => {
  const setUser = (user: UserInterface) => {
    setUserDetails((prevState: UserContextProps) => {
      return { user, ...prevState };
    });
  };

  const userState: UserContextProps = {
    user: { email: '', token: '' },
    setUser,
  };

  const [userDetails, setUserDetails] = useState(userState);

  return (
    <UserContext.Provider value={userDetails}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

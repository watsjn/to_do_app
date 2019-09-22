import { createContext } from 'react';
import { UserInterface } from '../interfaces/UserInterface';

export interface UserContextProps {
  user: UserInterface;
  setUser(userDetails: object): void;
}

const UserContext = createContext<
  Partial<UserContextProps>
>({});

export default UserContext;

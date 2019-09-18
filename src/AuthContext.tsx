import React from 'react';

interface authContext {
  isAuthorized: boolean;
  authorize(val: boolean): void;
}

export default React.createContext<authContext>({
  isAuthorized: false,
  authorize: () => true,
});

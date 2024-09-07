import React from 'react';
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { LigaTeams } from '../config/types';

type UserContextType = {
  teams?: LigaTeams;
  setTeams: Dispatch<SetStateAction<LigaTeams>>;
};

export const TeamContext = createContext<UserContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const TeamsProvider = ({ children }: Props) => {
  const [teams, setTeams] = useState<LigaTeams>([]);

  const valueToSend = {
    teams,
    setTeams,
  };

  return (
    <TeamContext.Provider value={valueToSend}>
      {children}
    </TeamContext.Provider>
  );
};

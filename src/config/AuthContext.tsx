import React, { ReactNode, createContext } from 'react';

export interface AuthContextInterface {
    username: string;
    email?: string;
    photoURL?: string;
    isAdmin: boolean;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextInterface | 'loading' | undefined>(undefined);

interface AuthProviderProps {
    value?: AuthContextInterface | 'loading';
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ value, children }) => {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

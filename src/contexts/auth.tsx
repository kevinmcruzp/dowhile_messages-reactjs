import { createContext, ReactNode, useState, useEffect } from "react";

import { api } from "../service/api";

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;

}

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
}

type AuthProvider = {
  children: ReactNode;
}

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }

}

export const AuthContext = createContext({} as AuthContextData)


export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null)

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=c573879f9d3bdd4f445b`

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode,
    })

    const { token, user } = response.data;

    localStorage.setItem('@dowhile:token', token)

    setUser(user)

  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@dowhile:token')
  }

  //Info do usuario logado
  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token')
    if (token) {

      //Mandar tokem pelo header da req
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get('profile').then(response => {
        setUser(response.data)
      })
    }
  }, [])

  //Obter tokem e info do usuario
  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')

      window.history.pushState({}, '', urlWithoutCode)

      signIn(githubCode)

    }
  }, [])

  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
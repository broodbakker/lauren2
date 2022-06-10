import { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget"

export const AuthContext = createContext({
  user: null,
  login: () => { },
  logout: () => { },
  authReady: false
})



interface IContext {
  children: JSX.Element,
}

export const AuthContextProvider = ({ children }: IContext) => {
  const [user, setUser] = useState<null | netlifyIdentity.User>(null)
  const [authReady, setAuthReady] = useState(false)
  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user)
      netlifyIdentity.close();
      console.log("login event")
    })

    netlifyIdentity.on("logout", () => {
      setUser(null)
      console.log("logout event")
    })

    netlifyIdentity.on("init", () => {
      setUser(user)
      setAuthReady(true)
      console.log("init event")

    })

    netlifyIdentity.init()



    return () => {
      netlifyIdentity.off("login")
      netlifyIdentity.off("logout")
    }

  }, [])

  const login = () => {
    netlifyIdentity.open()
  }

  const logout = () => {
    netlifyIdentity.logout()
  }

  const context = { user, login, logout, authReady }

  const context1 = { user: null, login, logout, authReady: false }

  return (
    <AuthContext.Provider value={context1}>
      {children}
    </AuthContext.Provider>
  )
}
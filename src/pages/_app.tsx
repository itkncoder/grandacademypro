import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  ChakraProvider,
} from "@chakra-ui/react";
import "../styles/globals.css"
import { createContext, useEffect, useState } from "react";

import firebase, {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const appF = initializeApp(
    {
        apiKey: "AIzaSyBQQl0RKi_a0T7ePH4Zfh74KZZJvwbOmNE",
        authDomain: "grandacademy-8ff89.firebaseapp.com",
        projectId: "grandacademy-8ff89",
        storageBucket: "grandacademy-8ff89.appspot.com",
        messagingSenderId: "766589497958",
        appId: "1:766589497958:web:d57f1ad02ac3bebde0f3a7"
    }
);

const auth = getAuth()

const db = getFirestore(appF);

export const Context = createContext<any>(null)

function App({ Component, pageProps }: any): JSX.Element {

    useEffect(() => {
        localStorage.setItem("chakra-ui-color-mode", "dark")
    }, [])

    return (
        <Context.Provider value={{firebase, auth, db}}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Context.Provider>
    )
}

export default App
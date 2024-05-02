import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="light">
      <App />
    </NextThemesProvider>
  </NextUIProvider>
)
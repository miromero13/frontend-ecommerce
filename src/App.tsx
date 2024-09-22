import { Provider } from "react-redux"
import { store } from "./redux/store"
import { AuthProvider, ThemeProvider } from "./common/context"
import { SWRConfig } from "swr"
import { BrowserRouter } from "react-router-dom"
import Routes from "@routes/index"

function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <SWRConfig value={{ revalidateOnFocus: false }}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </SWRConfig>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  )
}

export default App

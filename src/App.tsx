import { AppContainer } from "./components/containers";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Sidebar />
      <Topbar />
    </AppContainer>
  );
}

export default App;

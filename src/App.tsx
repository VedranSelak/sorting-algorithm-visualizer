import { AppContainer, MainContainer } from "./components/containers";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Sorting } from "./components/Sorting";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Sidebar />
      <MainContainer>
        <Topbar />
        <Sorting />
      </MainContainer>
    </AppContainer>
  );
}

export default App;

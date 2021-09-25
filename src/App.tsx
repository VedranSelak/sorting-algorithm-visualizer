import { AppContainer, MainContainer } from "./components/containers";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Sorting } from "./components/Sorting";
import { GlobalStyle } from "./globalStyles";
import { useSelector } from "react-redux";
import { ToastList } from "./components/ToastList";
import { selectToastList } from "./store/ui.slice";

function App() {
  const toastList = useSelector(selectToastList);

  return (
    <AppContainer>
      <GlobalStyle />
      <Sidebar />
      <MainContainer>
        <Topbar />
        <Sorting />
      </MainContainer>
      <ToastList list={toastList} />
    </AppContainer>
  );
}

export default App;

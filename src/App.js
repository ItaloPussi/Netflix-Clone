import { FaqsContainer } from "./containers/Faqs";
import { FooterContainer } from "./containers/Footer";
import { JumbotronContainer } from "./containers/Jumbotron";

function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default App;

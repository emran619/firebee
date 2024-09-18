import './App.css';
import { AskedQuestions, DaysMoney, FirebeeDo, FirebeeSignals, Footer, Header, InBox, Products } from './presentation';

function App() {
  return (
    <>
      <Header />
      <Products />
      <DaysMoney />
      <FirebeeSignals />
      <FirebeeDo />
      <InBox />
      <AskedQuestions />
      <Footer />
    </>
  );
}

export default App;

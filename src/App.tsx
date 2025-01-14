import "./App.css";
import { QuizContainer } from "./components/QuizContainer/QuizContainer";
import { QuestionProvider } from "./contexts/QuestionContext";

function App() {
  return (
    <div>
      <QuestionProvider>
        <QuizContainer />
      </QuestionProvider>
    </div>
  );
}

export default App;

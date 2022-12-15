import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import "./App.css";
import UseForm from "./components/UserForm.jsx";
import ReviewForm from "./components/ReviewForm.jsx";
import Thanks from "./components/Thanks.jsx";
import Steps from "./components/Steps.jsx";

//Hooks
import { userForm } from "../hooks/useForm";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const[data, setData] = useState(formTemplate);

  const updateFielHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UseForm data={data} updateFielHandler={updateFielHandler} />,
    <ReviewForm data={data} updateFielHandler={updateFielHandler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    userForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form action="" onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span><a href="https://roberto.dev.br/" target="_blank">Enviar</a></span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

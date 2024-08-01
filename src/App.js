import './App.css'; 
import Counter from './Components/Counter';
import ToggleVisibility from './Components/Toggle';
import InputFieldLogger from './Components/Inputfield';
import DragAndDrop from './Components/Drag&Drop';
import Form from './Components/FormSubmission';

function App() {
  return (
    <div>
      <Counter />
      <ToggleVisibility />
      <InputFieldLogger />
      <DragAndDrop />
      <Form />
    </div>
  );
}

export default App;

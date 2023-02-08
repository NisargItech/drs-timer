
import './App.css';
import PhoneBody from './PhoneBody';
import Button from './Button';
import Header from "./Header";
import TabSection from './TabSection';
import TaskItem from './TaskItem';

function App(props) {
  return (
    <PhoneBody>
      <Header username="Nisarg" />
      <TabSection />
      <TaskItem />
      <Button text="Click Me" />
    </PhoneBody>
  );
}

export default App;

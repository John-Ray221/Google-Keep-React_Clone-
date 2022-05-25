import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Form />
      <Notes />
      <Modal />
    </>
  );
}

export default App;

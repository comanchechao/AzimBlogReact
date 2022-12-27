import EditableControls from "../components/editableControls";
import Navbar from "../components/navbar";

export default function Edit() {
  return (
    <div className="w-screen h-full">
      <Navbar></Navbar>
      <div className="w-screen h-screen bg-CoolGray flex items-center justify-center">
        <EditableControls></EditableControls>
      </div>
    </div>
  );
}

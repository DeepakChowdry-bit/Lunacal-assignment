
import Gallery from "./Gallery";
import About from "./About";

const Modal = () => {
  

  return (
    <div className="flex justify-center items-center h-screen shadow w-full bg-[#282B30] text-zinc-50 gap-8 p-5">
      <div className="flex flex-col items-center justify-center h-full w-2/5 bg-[#575758] rounded-2xl"></div>
      <div className="flex flex-col h-full gap-3 w-2/5">
        <About />
        <Gallery />
      </div>
    </div>
  );
};

export default Modal;

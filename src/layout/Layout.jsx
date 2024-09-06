import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CoordinatesProvider } from "@/context/CoordinatesContext";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
      <CoordinatesProvider>
        <Navbar />
        <ToastContainer
         position="top-center"
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"
         transition={Slide}
        
        />
        {children}
        <Footer />
      </CoordinatesProvider>
    </>
  );
}

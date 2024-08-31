import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CoordinatesProvider } from "@/context/CoordinatesContext";

export default function Layout({ children }) {
  return (
    <>
    <CoordinatesProvider>

      <Navbar />
        {children}
      <Footer />
    </CoordinatesProvider>
    </>
  );
}

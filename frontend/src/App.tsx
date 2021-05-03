import Footer from "components/Footer";
import NavBar from "components/Navbar";
import DataTable from"components/DataTable";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">OLÁ MUNDO!</h1>
        <DataTable />
      </div>
      
      <Footer />
    </>
  );

}

export default App;

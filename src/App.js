import { BrowserRouter, Route, Routes } from "react-router-dom";

import CompShowBlog from "./blog/ShowBlog";
import CompCreateBlog from "./blog/CreateBlog";
import CompEditBlog from "./blog/EditBlog";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CompShowBlog />} />
            <Route path="/create" element={<CompCreateBlog />} />
            <Route path="/edit/:id" element={<CompEditBlog />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

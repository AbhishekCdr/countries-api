import Grid from "./components/Grid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardDetail from "./components/CardDetail";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/card/:name" element={<CardDetail />} />
          {/* card/:name */}
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;

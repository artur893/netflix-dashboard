import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "@modules";
import { MainMenuGlobalComponent } from "@/global-components";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <HomePage msg="INVO Academy Starter with React + TypeScript" />
    </BrowserRouter>
  </>
);

export default App;

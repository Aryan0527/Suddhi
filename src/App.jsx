import React, { useState } from "react";
import ComingSoon from "./components/ComingSoon";
import Main from "./components/Main/MainPage";

const App = () => {
  const [isComingSoon, setIsComingSoon] = useState(true);

  return (
    <div className="bg-green-100">
      {isComingSoon ? <ComingSoon /> : <Main />}
    </div>
  );
};

export default App;

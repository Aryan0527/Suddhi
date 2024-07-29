import React, { useState } from "react";
import ComingSoon from "./components/ComingSoon";
import Main from "./components/MainPage/MainPage";

const App = () => {
  const [isComingSoon, setIsComingSoon] = useState(false);

  return (
    <div className="bg-green-100">
      {isComingSoon ? <ComingSoon /> : <Main />}
    </div>
  );
};

export default App;

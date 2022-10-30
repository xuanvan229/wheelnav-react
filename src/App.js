import { useEffect, useState } from "react";

function App() {
  const [hasLoadedRephael, setHasLoadedPhael] = useState(false);
  const [hasLoadedWheelNav, setHasLoadedWheelNav] = useState(false);

  const appendScript = () => {
    const script = document.createElement("script");
    script.id = "raphael";
    script.src = "wheelnav/raphael.min.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.onload = () => setHasLoadedPhael(true);
    document.body.append(script);
  };

  const scriptAlreadyExists = () => {
    return (
      document.querySelector("script#raphael") !== null &&
      document.querySelector("script#wheelnav") !== null
    );
  };

  useEffect(() => {
    if (!scriptAlreadyExists()) {
      appendScript();
      appendWheelnavScript();
    }
  }, []);

  const appendWheelnavScript = () => {
    const script = document.createElement("script");
    script.id = "wheelnav";
    script.src = "wheelnav/wheelnav.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.onload = () => setHasLoadedWheelNav(true);
    document.body.append(script);
  };

  useEffect(() => {
    if (hasLoadedWheelNav && hasLoadedRephael) {
      // This demo use two wheels on each other
      let wheel = new window.wheelnav("wheelDiv");
      wheel.initWheel(["init", "create", "navigate", "refresh"]);
      wheel.createWheel();
    }
  }, [hasLoadedWheelNav, hasLoadedRephael]);
  return (
    <div className="App">
      <div id="wheelDiv"></div>
    </div>
  );
}

export default App;

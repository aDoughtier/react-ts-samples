import Router from "@/router";
import "@/assets/css/common.css";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  return <>{loading ? <div>loading</div> : <Router />}</>;
}

export default App;

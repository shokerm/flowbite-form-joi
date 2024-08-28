import Login from "./Login";
import LoginJoi from "./LoginJoi";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <Login />
      <div
        style={{
          width: "10px",
          borderLeft: "1px solid black",
          height: "100vh",
        }}
      ></div>
      <LoginJoi />
    </main>
  );
}

export default App;

import "./App.css";
import ThemeProvider, { useTheme } from "./Component/ThemeProvider";
import data from "../db.json";
import Task from "./Component/Task";
import ThemeToggle from "./Component/ThemeToggle";




function App() {
  const isthemeDark=useTheme()
  const textColor = isthemeDark ? 'text-red-900' : 'text-gray-900';
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <header className="flex justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
       
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            IIT MANDI 
          </h1>
          <ThemeToggle />
        </header>

        <main className="flex flex-col items-center justify-center p-4">
        <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>
      Learning Modules
    </h2>
          {data.data.map((taskdata, index) => (
            <Task key={index} taskdata={taskdata} index={index} />
          ))}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

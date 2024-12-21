import { useTheme } from "./ThemeProvider";

function ThemeToggle() {
    const { isthemeDark, handleToggle } = useTheme();
  
    return (
      <button
        onClick={handleToggle}
        className="p-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded shadow"
      >
        {isthemeDark ? "Switch to Dark Mode": "Switch to Light Mode"}
      </button>
    );
  }
  export default ThemeToggle
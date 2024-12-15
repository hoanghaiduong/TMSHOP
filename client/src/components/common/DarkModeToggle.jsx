import React, { useEffect, useState } from "react";

function DarkModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light" // Lấy trạng thái lưu trữ trong LocalStorage
  );

  // Cập nhật class của HTML khi theme thay đổi
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Lưu trạng thái theme vào LocalStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Hàm chuyển đổi giữa chế độ sáng và tối
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkModeToggle;

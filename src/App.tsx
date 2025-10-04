import "./App.css";

import { useMemo } from "react";

import { ResponsiveText } from "./components/ResponsiveText";
import { getNumberVariants } from "./utils/get-number-variants";

function App() {
  const testData = useMemo(() => {
    // ... логика генерации данных
    const data = [];
    data.push({ id: data.length,
      items: getNumberVariants(0) });
    data.push({ id: data.length,
      items: getNumberVariants(100) });
    data.push({ id: data.length,
      items: getNumberVariants(9999) });
    data.push({ id: data.length,
      items: getNumberVariants(99999) });
    data.push({ id: data.length,
      items: getNumberVariants(999999) });
    data.push({ id: data.length,
      items: getNumberVariants(9999999) });
    data.push({ id: data.length,
      items: getNumberVariants(9999999) });
    data.push({ id: data.length,
      items: getNumberVariants(99999999) });
    data.push({ id: data.length,
      items: getNumberVariants(999999999) });
    data.push({ id: data.length,
      items: getNumberVariants(9999999999) });
    data.push({ id: data.length,
      items: getNumberVariants(99999999999) });
    data.push({ id: data.length,
      items: getNumberVariants(999999999999) });
    data.push({ id: data.length,
      items: getNumberVariants(111111111) });
    data.push({ id: data.length,
      items: getNumberVariants(987654321) });
    data.push({ id: data.length,
      items: [
        "Какой-то очень длинный текст",
        "Слово текст пропало",
        "Какой-то очень длинный",
        "Не очень длинный",
        "Короткий текст",
      ] });
    for (let i = data.length; i < 1000; i++) {
      const randomNumber = Math.floor(Math.random() * 999_000_000_000);
      data.push({
        id: i,
        items: getNumberVariants(randomNumber),
      });
    }
    return data;
  }, []);

  return (
    <div className="app-container">
      <main className="app-main">
        {testData.map((data) => (
          <ResponsiveText
            items={data.items}
            key={data.id}
            // Возвращаем использование пропа align
            align="right"
          />
        ))}
      </main>
    </div>
  );
}

export default App;

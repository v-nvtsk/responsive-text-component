/**
 * Форматирует число в соответствии с указанными параметрами.
 *
 * @param {number} value - Число для форматирования.
 * @param {number} maxDigits - Максимальное количество знаков после запятой.
 * @param {number} [minDigits=0] - Минимальное количество знаков после запятой.
 * @param {boolean} [compact=false] - Использовать ли компактное представление (например, "1,2 тыс." вместо "1 200").
 * @returns {string} Отформатированная строка.
 */
const formatNumber = (
  value: number,
  maxDigits: number,
  minDigits = 0,
  compact = false,
): string => {
  return value.toLocaleString("ru-RU", {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
    notation: compact ? "compact" : "standard",
  });
};

/**
 * Возвращает массив строк, представляющих заданное число в различных форматах.
 *
 * Возвращаемый массив будет содержать как минимум одну строку, представляющую число с двумя знаками после запятой и без компактной нотации. Если заданное число равно или больше 1,000,000, то массив также будет содержать его компактное представление с количеством знаков после запятой до 3-х (например, "1,235 млн").
 *
 * @param {number} num - Число, которое нужно отформатировать.
 * @returns {string[]} Массив строк, представляющих заданное число в различных форматах.
 */
export const getNumberVariants = (num: number): string[] => {
  const variants: string[] = [];

  variants.push(formatNumber(num, 2, 2, false) + " RUB");

  if (num >= 1_000_000) {
    variants.push(formatNumber(num, 3, 0, true) + " RUB");
  }

  return variants;
};

const c = +prompt("Введите температуру в градусах Цельсия:");
const f = parseFloat(((9 / 5) * c + 32).toFixed(2));
alert(`Цельсий: ${c}, Фаренгейт: ${f}`);
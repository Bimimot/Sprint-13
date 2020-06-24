const express = require('express');
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, 'public'))); // доступ только к публичным файлам

app.listen(PORT);

// app.listen(PORT, () => {
//     // Если всё работает, консоль покажет, какой порт приложение слушает
//     console.log(`App listening on port ${PORT}`)
// })
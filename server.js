import express from "express";
import favicon from "express-favicon";
import { join } from "path";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const port = process.env.PORT || 8080;
const __dirname = path.dirname(__filename);

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();
app.use(favicon(__dirname + "/build/favicon.ico"));

//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(join(__dirname, "build")));

//простой тест сервера
app.get("/ping", function (req, res) {
  return res.send("pong");
});

//обслуживание html
app.get("/*", function (req, res) {
  res.sendFile(join(__dirname, "build", "index.html"));
});
app.listen(port);

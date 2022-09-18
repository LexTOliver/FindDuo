import express from "express";

const app = express();

// Home Page
app.get('/', (req, res) => {
  return res.send('Bem vindo ao FindDuo')
});

app.listen(3030, () => {console.log("FindDuo running on port 3030!")})
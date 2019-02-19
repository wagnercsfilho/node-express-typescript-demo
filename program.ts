import StartUp from "./startUp";

const port = process.env.PORT || "3000";

StartUp.app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});

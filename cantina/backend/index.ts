import express from "express";
import generateMenuBasedOnAvailableFood from "./src/services/ai/generateMenuBasedOnAvailableFood";
import generateMenuBasedOnRestrictions from "./src/services/ai/generareMenuBasedOnRestrictions";
import bodyParser from "body-parser";
import * as cantinaService from "./src/services/cantina";
import * as userService from "./src/services/users";
import { notificationService } from "./src/services/notifications";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());
const jsonParser = bodyParser.json();

interface User {
  id: string;
  name: string;
  walletBalance: number;
}

const users: User[] = [
  { id: "1", name: "Usuário 1", walletBalance: 100 },
  { id: "2", name: "Usuário 2", walletBalance: 50 },
];

interface CartItem {
  name: string;
  price: number;
}

interface Cart {
  [userId: number]: CartItem[];
}

const carts: Cart = {};

// Verificar saldo da carteira de um usuário
app.get("/balance/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  res.json({ balance: user.walletBalance });
});

// Adicionar itens no carrinho
app.post("/cart/:userId/add", (req, res) => {
  const userId = parseInt(req.params.userId);
  const items: CartItem[] = req.body.items;

  if (!carts[userId]) {
    carts[userId] = [];
  }

  carts[userId] = carts[userId].concat(items);
  console.log(carts);

  const totalAmount = calculateTotal(carts[userId]);

  res.json({
    message: `Itens adicionados ao carrinho com sucesso. Saldo total de: ${totalAmount}`,
  });
});

// Adicionar saldo à carteira do usuário
app.post("/add-balance/:userId", (req, res) => {
  const userId = req.params.userId;
  const email = req.body;
  const amount: number = req.body.amount;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  user.walletBalance += amount;
  notificationService(
    // userId,
    email,
    "Saldos adicionados",
    `${amount} adicionado à carteira`,
    String(Date.now()),
    "come-abacate-bem-hackaton"
  );

  res.json({ message: "Saldo adicionado à carteira com sucesso" });
});

// Subtrair o valor da compra da carteira do usuário
app.post("/checkout/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  const cart = carts[parseInt(userId)] || [];
  const totalAmount = calculateTotal(cart);

  if (user.walletBalance < totalAmount) {
    return res.status(400).json({ error: "Saldo insuficiente" });
  }

  user.walletBalance -= totalAmount;
  carts[parseInt(userId)] = [];

  res.json({ message: "Compra realizada com sucesso" });
});

// Retornar itens do carrinho de um usuário
app.get("/cart/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);

  if (!carts[userId]) {
    return res.status(404).json({ error: "Carrinho não encontrado" });
  }

  const cartItems = carts[userId];
  res.json({ items: cartItems });
});
// Rotas da AI
app.post("/api/generate", jsonParser, (req, res) => {
  generateMenuBasedOnAvailableFood(req, res);
});

app.post("/api/generateFromRestriction", jsonParser, (req, res) => {
  generateMenuBasedOnRestrictions(req, res);
});

// Rotas do ecommerce
app.get("/@layers:payments:Items:getRelated", jsonParser, (req, res) => {
  // const result = getItems();
  return res.json({ status: "okk" });
});

app.get("/@layers:payments:Tabs:getRelated", jsonParser, (req, res) => {
  // const result = tabsResult();
  return res.json({ status: "ok" });
});

// Rota para retornar os dados da cantina de um aluno
app.get("/cantina/:studentId", (req, res) => {
  const studentId = parseInt(req.params.studentId);
  const cantina = cantinaService.getCantinaByStudentId(studentId);

  if (!cantina) {
    return res.status(404).json({ error: "Cantina não encontrada" });
  }

  res.json({ cantina });
});

// Rota para retornar os itens mais vendidos de uma cantina
app.get("/cantina/:cantinaId/top-selling", (req, res) => {
  const cantinaId = parseInt(req.params.cantinaId);
  const topSellingItems = cantinaService.getTopSellingItems(cantinaId, 3); // Por exemplo, retornar os top 3 itens

  res.json({ topSellingItems });
});

// Rota para retornar os produtos da cantina por dia da semana
app.get("/cantina/:cantinaId/items/:dayOfWeek", (req, res) => {
  const cantinaId = parseInt(req.params.cantinaId);
  const dayOfWeek = parseInt(req.params.dayOfWeek);

  const itemsByDay = cantinaService.getItemsByDay(cantinaId, dayOfWeek);

  res.json({ itemsByDay });
});

// Rota para retornar os nomes dos usuários
app.get("/users/names", (req, res) => {
  // const userNames = userService.getAllUserNames();
  // const realted = userService.getUsersRelated(
  //   "64d227611b927d001696b821",
  //   "come-abacate-bem-hackaton"
  // );

  const result = [
    {
      // imagemAluno: require("@/assets/irmaoJorel.svg"),
      nome: "Irmão do Jorel",
      turma: "4ª B",
      saldo: "R$ 20,00",
      buttonLabel: "Ver conteúdo",
    },
    {
      // imagemAluno: require("@/assets/jorel.svg"),
      nome: "Jorel",
      turma: "8ª A",
      saldo: "R$ 25,50",
      buttonLabel: "Ver conteúdo",
    },
    {
      // imagemAluno: require("@/assets/nicolau.svg"),
      nome: "Nicolau",
      turma: "2ª ano C",
      saldo: "R$ 17,40",
      buttonLabel: "Ver conteúdo",
    },
  ];

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

function calculateTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + item.price, 0);
}

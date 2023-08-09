import express from "express";
import generate from "./src/services/ai/generate";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(express.json());
const jsonParser = bodyParser.json();

interface User {
  id: number;
  name: string;
  walletBalance: number;
}

const users: User[] = [
  { id: 1, name: "Usuário 1", walletBalance: 100 },
  { id: 2, name: "Usuário 2", walletBalance: 50 },
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
  const userId = parseInt(req.params.userId);
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
  const userId = parseInt(req.params.userId);
  const amount: number = req.body.amount;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  user.walletBalance += amount;

  res.json({ message: "Saldo adicionado à carteira com sucesso" });
});

// Subtrair o valor da compra da carteira do usuário
app.post("/checkout/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  const cart = carts[userId] || [];
  const totalAmount = calculateTotal(cart);

  if (user.walletBalance < totalAmount) {
    return res.status(400).json({ error: "Saldo insuficiente" });
  }

  user.walletBalance -= totalAmount;
  carts[userId] = [];

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

app.post("/api/generate", jsonParser, (req, res) => {
  generate(req, res);
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

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

function calculateTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + item.price, 0);
}

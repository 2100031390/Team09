const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('your-mongo-db-uri', { useNewUrlParser: true, useUnifiedTopology: true });

const PortfolioSchema = new mongoose.Schema({
  template: String,
  sections: Array,
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

app.post('/save', async (req, res) => {
  const { template, sections } = req.body;
  const portfolio = new Portfolio({ template, sections });
  await portfolio.save();
  res.send({ message: 'Portfolio saved successfully!' });
});

app.get('/portfolios', async (req, res) => {
  const portfolios = await Portfolio.find();
  res.send(portfolios);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

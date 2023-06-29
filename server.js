const QueryEngine = require('@comunica/query-sparql').QueryEngine;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const arrayifyStream = require('arrayify-stream').default;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const myEngine = new QueryEngine();

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Our Decentralized SPARQL Endpoint!</h1>
    <p>This is a SPARQL endpoint built on top of the Interplanetary File System (IPFS) as part of a Semantic Web project.</p>
    <p>You can send SPARQL queries to this endpoint by making a POST request to <code>/sparql</code> with your query in the body of the request.</p>
  `);
});

app.post('/sparql', async (req, res) => {
  const result = await myEngine.queryBindings(req.body.query, {
    sources: ['https://fragments.dbpedia.org/2015/en'],
  });
  const bindings = await arrayifyStream(result);
  res.json(bindings.map(binding => {
    let obj = {};
    binding.forEach((value, key) => {
      obj[key] = value.value;
    });
    return obj;
  }));
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server running on port ${port}`));

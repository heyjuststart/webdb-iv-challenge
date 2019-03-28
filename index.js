const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());
const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n*** API running on http://localhost:${port} ***\n`)
);

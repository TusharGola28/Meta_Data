import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import cors from 'cors';
import { log } from 'console';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
const pathToIndex = path.join(__dirname, '../../index.html');

app.get('/*', async (req, res) => {
  try {
    console.log(pathToIndex);
    const data = await fs.readFile(pathToIndex, 'utf-8');
    const pageTitle = 'Homepage - Welcome to my page';
    const updated = data.replace('__PAGE_META__', `${pageTitle}`);
    res.send(updated);
  } catch (err) {
    res.status(500).send('Error reading the file');
  }
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(pathToIndex, (err) => {
    if (err) {
      res.status(500).send('Error sending the file');
    }
  });
});

const port = process.env.PORT || 2010;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

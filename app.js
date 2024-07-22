import express from 'express';
import path from 'path';
import fs from 'fs';
import http from 'http';
import readline from 'readline';

const app = express();

const server = http.createServer((req, res) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Select: 1. Create File 2. Read File 3. Delete File : ', option => {
    if (option === '1') {
      rl.question('File name: ', filename => {
        fs.writeFile(filename, '', err => {  // Create an empty file
          if (err) {
            console.log('Error creating file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Error creating file');
          } else {
            console.log('Created Successfully!');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('File created successfully');
          }
          res.end();
          rl.close();
        });
      });
    } else if (option === '2') {
      rl.question('File name: ', filename => {
        fs.readFile(filename, 'utf8', (err, data) => {
          if (err) {
            console.log('Error reading file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Error reading file');
          } else {
            console.log('File content:', data);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
          }
          res.end();
          rl.close();
        });
      });
    } else if (option === '3') {
      rl.question('File name: ', filename => {
        fs.unlink(filename, err => {
          if (err) {
            console.log('Error deleting file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Error deleting file');
          } else {
            console.log('Deleted Successfully!');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('File deleted successfully');
          }
          res.end();
          rl.close();
        });
      });
    } else {
      console.log('Invalid option');
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.write('Invalid option');
      res.end();
      rl.close();
    }
  });
});

server.listen(8000, () => {
  console.log('Server running on port 8000');
});

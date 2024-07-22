import express from "express"
import path from "path"
import fs from "fs"
import http from "http"

const app= express();

const server =http.createServer(function(req,res){
   res.write("Hello world");
   fs.writeFile
   res.end();
})

server.listen(8000, () => {
    console.log(`Server running on port 8000`);
  });
  
import express from 'express'

const app=express()

app.get("/", (_, res) => {
    res.end("server sucessfully running");
  });

export default app
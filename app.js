// const express = require("express")
// const app = express()

// const fetch = require("node-fetch")

// app.listen(process.env.PORT)
const notionStyling = document.querySelector("#mainNotion")
const notionDocId = "5d4233f93b934109a08b48cab2407c51";

fetch("https://potion-api.now.sh/html?id=" + notionDocId)
  .then(res => res.text())
  .then(text => {
    document.querySelector("#mainNotion").innerHTML = text
  })

  notionStyling.classList.add("mainNotion")

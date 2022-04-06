//Import 
const express = require("express")
const cors = require("cors")

//Implementasi
const app = express()
app.use(cors())

app.use(express.static(__dirname))

//Endpoint Admin
const admin = require('./routes/admin')
app.use("/admin", admin)

//Endpoint customer
const customer = require('./routes/customer');
app.use("/customer", customer)

//Endpoint product
const product = require('./routes/product');
app.use("/product", product)

//endpoint transaksi
const transaksi = require('./routes/transaksi');
app.use("/transaksi", transaksi)

//Run Server (Penutup)
app.listen(8080, () => {
    console.log("Server run on port 8080");
})


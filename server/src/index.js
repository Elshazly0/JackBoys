// const express = require('express')
// const app = express()
// var cors = require('cors')

// app.use(cors())

// const amazon = require('./amazon')

// const port = process.env.PORT || 4040


// // app.get('/', async (req, res) => {
// //     await res.send("coz")
// // })



// app.get('/:search', async (req, res) => {
//     // get parameter from url
//     let search = req.params.search


//     let products_amazon = await amazon(search)



//     // send all scraping data to client
//     await res.send({
//         amazon: products_amazon
//     })
// })



// app.listen(port, () => {
//     console.log(`server runs on http://localhost:${port}`)
// })
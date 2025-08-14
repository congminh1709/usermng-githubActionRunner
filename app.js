const express = require('express')
const app = express()
const PORT = 3000
const VERSION = "1.1"

app.get('/', (req, res) => {
    res.status(200).json({
        meta: {
            code: 200,
            message: `server ${VERSION} OK`,
        }
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`RestAPI ${VERSION} is running at port ${process.env.PORT || PORT}`);
});
const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = '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'

app.post('/complete', async (req,res)=> 
{
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user",content: req.body.message}],
            max_tokens: 100,
        })

    }
    try{
        const response =  await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch(error) {
        console.error(error)
    }
})

app.listen(PORT, () => console.log('RUNIING ON PORT' + PORT))
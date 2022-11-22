import express from 'express';

const app = express();
app.use(express.json()) // NOTE: This middleware transforms the req.body to json

const PORT = 3000;

app.get('/ping', (_req, res) => { // NOTE: The `_req` is telling typescript to ignore the unused parameter 
    console.log("someone ping here! " + new Date().toLocaleDateString());
    res.send("pongi")
})

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
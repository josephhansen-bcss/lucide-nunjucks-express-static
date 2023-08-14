import express from 'express'
const app = express()
import nunjucks from 'nunjucks'


nunjucks.configure(['src/views', 'src/includes', 'src/assets'] , {
    autoescape: true,
    express: app,
    watch: true
})



app.get('/', (req, res) => {
    res.render('index.html', {root: '.'})
})

app.get('/icons/style.css', (req, res) => {
    res.type('text/css')
    res.sendFile('src/assets/lucide/css/l.css', {root: '.'})
})

app.get('/icons/:icon', (req, res) => {
    res.type('image/svg+xml')
    const icon = req.params.icon
    res.sendFile('src/assets/lucide/icons/'+icon+'.svg', {root: '.'})
})



app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
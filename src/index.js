const app= require('./app')

const port=process.env.PORT 

app.listen(port,()=>{
    console.log('Server is up on port '+port)
})
app.get('/people', function (req, res) {
    res.send('hello');
})
//app.listen(8080, () => console.log('AdminJS is running under localhost:8080/admin'))

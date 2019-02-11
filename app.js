var express=require('express')
var app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
app.get('/',(req,res)=>{
res.send('welcome')
})
app.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })
  app.get('/user/:id', function (req, res, next) {
    res.send('USER')
  })
  app.listen(3030,()=>{
      console.log('server id listening at port 3030')
  })
const express=require('express');
const app=express();
const port=3000;

app.get('/holamundo',(req,res)=>{
    res.send('¡Hola mundo!');
}
)
app.listen(port,()=>{
    console.log('La aplicación se está ejecutando por el puerto '+`${port}`)
})
//Connection Module
const express = require('express');
const app = express();
app.use(express.json());

// *****************************GET******************************
app.get('/task', (req,res)=>{
  return res.json({message: 'THIS TASK IS---------Get'});
});


// ******************************POST***********************************

app.post('/task',(req,res)=>{
  console.log(req.body);
  return res.json({message: 'THIS TASK IS ------------Post'});
});

//  *************************PUT******************************

app.put('/task', (req,res)=>{
    return res.json({message: 'THIS TASK IS---------Put'});
  });

//   ********************Deleted******************************

app.delete('/task', (req,res)=>{
    return res.json({message: 'THIS TASK IS---------Delete'});
  });

//Local Server Host
app.listen(5000,()=>{
  console.log('EXPRESS SERVER IS RUNNING....');
});


const prompt = require("prompt")
const fs = require("fs")

prompt.get("filepath",(err,result)=>{
    fs.readFile(result.filepath,'utf-8',(err,data)=>{
        newData = JSON.parse(data)
        console.log(newData[1],typeof(newData))
    })
})
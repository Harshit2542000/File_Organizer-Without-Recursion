let fs=require('fs');
const { METHODS } = require('http');
let path=require('path');

function treeFunction(srcPath)
{
    let BaseName=path.basename(srcPath);
    console.log(BaseName);
    let content=fs.readdirSync(srcPath);
    let allEntities="";
    console.log("\t|");
    for(let i=0;i<content.length;i++)
    {
        allEntities+="\t"+"├──"+content[i]+"\n";
    }
    console.log(allEntities);
}
module.exports={
    treeFun:treeFunction
};

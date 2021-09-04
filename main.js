let helpObj=require('./Commands/help.js');
let treeObj=require('./Commands/tree.js');
let organizeObj=require('./Commands/organize.js')
let inputargv=process.argv.slice(2);
let command=inputargv[0];
let path=inputargv[1];
switch(command)
{
    case "help":
        helpObj.helpFun();
        break;
    case "tree":
        treeObj.treeFun(path);
        break;
    case "organize":
        organizeObj.organizeFun(path);
        break;
    default:
        console.log("Invalid Command");
        break;
}


const mongoose=require('mongoose')


todoSchema={
    Todolist:String  
}

const todoModel=mongoose.model('todo',todoSchema);
module.exports=todoModel
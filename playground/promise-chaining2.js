require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('66af93f1dd228c7b66f73f5f').then((task) => {
    console.log(task)

    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e);
})

const deleteTaskAndCount = async (id)=>{
    const task = Task.findByIdAndDelete(id)
    const count = Task.countDocuments({completed: false})

    return count;
}

deleteTaskAndCount('').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e);
})
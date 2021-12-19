require('../src/db/mongoose')
const Task = require('../src/model/task')

// Task.findByIdAndDelete("5e86ceffec9288237f4ebf18").then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })

    return count
}

deleteTaskAndCount("5e86ce9b706637236cd12e89").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
require('../src/db/mongoose')
const User = require('../src/model/user')

// User.findByIdAndUpdate("5e86cb389e96ba215c150521", { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments( { age })
    return count
}

updateAgeAndCount("5e86cb389e96ba215c150521", 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
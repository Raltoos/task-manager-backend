require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('66af589f7100b52fce021bde', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})

const updateAgeAndCount = async (id, age)=>{
    const user = User.findByIdAndUpdate(id, { age })
    const count = User.countDocuments({ age })

    return count 
}

updateAgeAndCount('', 2).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})
const db = require("../data/db-config");

module.exports = {find, findById, findByUsername, addUser, updateUser, removeUser};


async function find() {
    return await db("users");
}

async function findById(id) {
    try {
        return await db("users").where({id}).first();
    } catch (err) {
        return "Error finding user: " + err;
    }
}

async function findByUsername(username) {
    try{
        return await db("users").where({username}).first();
    } catch(err) {
        return "Error finding user: " + err;
    }
}



async function addUser (newUser) {
   
    try {

        const newSchedId = await db("schedules").insert({personal_schedule: true});

        const editedNewUser = {...newUser, schedule_id: newSchedId};

        const id = await db("users").insert(editedNewUser);
        return findById(id);
    } catch(err) {
        return "Error adding user: " + err;
    }
    
}

async function updateUser(id, newUser) {
    try {

        await db("users").where({id}).update(newUser);

        return findById(id);
         
    } catch(err) {
        return "Error updating user: " + err;
    }
}

async function removeUser(id) {
    try {
        return await db('users').where({id}).del();
 
     } catch(err) {
         return "Error deleting user: " + err;
     }
}
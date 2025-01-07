const connection = require("./../db")

const allBooks = () => {
    const query = "SELECT * FROM Books"
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err){
                reject(err)
                console.log("ERROR WHILE FETCHING ALL BOOKS: ", err)
            }else{
                resolve(results)
            }
        })
    })
}


module.exports = { allBooks } 
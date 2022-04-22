

db.createUser ( {user: "francois", pwd: "francois", roles: ["readWrite"] } )

db.createCollection('chapters');

db.chapters.insertMany([
    {
        title: 'git', 
        index : "1", 
        nbrOfLessons: 20
    }, 
    {
        title: 'devops', 
        index : "2", 
        nbrOfLessons: 30
    }
]);

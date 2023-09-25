db.createUser({
    user: process.env.ME_CONFIG_MONGODB_AUTH_USERNAME,
    pwd: process.env.ME_CONFIG_MONGODB_AUTH_PASSWORD,
    roles: [{
        role: "readWrite",
        db: process.env.ME_CONFIG_MONGODB_AUTH_DATABASE
    }]
});

db.auth(process.env.ME_CONFIG_MONGODB_AUTH_USERNAME, process.env.ME_CONFIG_MONGODB_AUTH_PASSWORD);
const {createClient, } = require("redis");

const redisClient = createClient({
    url:process.env.REDIS_URL,
});

redisClient.on("error",(error)=>{
    console.log("Redis error:" , error);
})

const connectRedis = async()=>{
    await redisClient.connect();
}

module.exports = {
    redisClient,
    connectRedis
}




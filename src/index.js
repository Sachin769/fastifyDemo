const fastify = require("fastify")({
    logger: true,
    // http2:true,                 //HTTP/2 support. Default is `false`
    // bodyLimit: 1048576,          //Maximum payload size in bytes. Default is 1048576 (1 MB).
    // keepAliveTimeout:5000       //Duration (in ms) to keep connections alive. Default is 5000 ms.
});


/*

//this hook usefull to know is server is ready or not to serve.
fastify.addHook("onReady", function listener(done) {
    console.log("Server is Ready to Take a Request");
    done()
})

//this hook usefull when I want when server is closed and db connection should closed this kind of thing we can did in listern function.
fastify.addHook("onClose", function listener() {
    console.log("Server is Stopping");
})

*/


//one way to route
fastify.get("/ping", (req, resp) => {
    // fastify.log.info("Server is up onnn Port:", PORT);
    return "pong"
})

fastify.route({
    url: "/hello",
    method: "GET",
    handler: function () {
        return "world"
    }
})


const PORT = 3000;

async function start() {
    try {
        await fastify.listen({ port: PORT });
        console.log("Server is up on Port:", PORT);
        // fastify.close();
    } catch (error) {
        console.log(error);
    }
}

start();
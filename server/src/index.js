import app from "./config/app";
import initGateway from "./config/apollo";

(async () => {
    const port = process.env.GATEWAY_PORT;
    const server = await initGateway();

    server.applyMiddleware({app, cors: false});
    app.listen({port}, () => {
        console.log(`Gateway Server 🛡️ready at http://localhost:${port}${server.graphqlPath}`)
    })
})();
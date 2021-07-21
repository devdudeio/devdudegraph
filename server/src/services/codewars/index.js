import {ApolloServer} from "apollo-server";
import {buildFederatedSchema} from "@apollo/federation";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import CodewarsDatasource from "./dataSources/CodewarsDatasource";

(async () => {
    const port = process.env.CODEWARS_SERVICE_PORT;
    const server = new ApolloServer({
        schema: buildFederatedSchema([{
            typeDefs, resolvers
        }]),
        dataSources: () => {
            return {
                codewarsAPI: new CodewarsDatasource()
            };
        }
    })
    const {url} = await server.listen({port});
    console.log(`Codewars service ⚔️ ready at ${url}`);
})();





import {ApolloGateway} from "@apollo/gateway";
import {ApolloServer} from "apollo-server-express";
import waitOn from "wait-on";

export default async function () {
    const options = {
        resources: [
            `tcp:${process.env.CODEWARS_SERVICE_PORT}`,
        ]
    };
    await waitOn(options).catch(error => {
        console.log("Error waiting for services:", error);

    });
    const gateway = new ApolloGateway({
        serviceList: [
            {name: "codewars", url: process.env.CODEWARS_SERVICE_URL},
        ]
    });

    return new ApolloServer({
        gateway,
        subscriptions: false
    })
};
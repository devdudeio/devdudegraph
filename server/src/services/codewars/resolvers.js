
const resolvers = {
    Query: {
        myCodewarsUser(_, __, {dataSources}) {
            return dataSources.codewarsAPI.getMyCodewarsUser();
        },
    },

};

export default resolvers;
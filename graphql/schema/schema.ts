import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql';

import {
    resolvers as leagueResolvers,
    mutations as leagueMutations,
} from './leagues';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            ...leagueResolvers,
        }),
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
            ...leagueMutations,
        }),
    }),
});

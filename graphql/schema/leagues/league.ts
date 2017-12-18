import {
    GraphQLID,
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType
} from 'graphql';

import { Address, CreateAddress } from '../address';

const fields = {
    description: {
        type: GraphQLString,
    },
    name: {
        type: GraphQLString,
    }
};

const League = new GraphQLObjectType({
    name: 'League',
    description: 'League type definition',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        address: {
            type: Address
        },
        ...fields
    })
});

const CreateLeague = new GraphQLInputObjectType({
    name: 'CreateLeague',
    description: 'Create a new league',
    fields: () => ({
        address: {
            type: CreateAddress
        },
        ...fields
    })
});

export {
    CreateLeague,
    League
};

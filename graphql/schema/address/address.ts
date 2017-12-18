import {
    GraphQLID,
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType
} from 'graphql';

const fields = {
    addressLine1: {
        type: GraphQLString,
    },
    addressLine2: {
        type: GraphQLString,
    },
    city: {
        type: GraphQLString,
    },
    state: {
        type: GraphQLString,
    },
    zip: {
        type: GraphQLString,
    }
};

const Address = new GraphQLObjectType({
    name: 'Address',
    description: 'Physical local address',
    fields: () => ({
        ...fields
    })
});

const CreateAddress = new GraphQLInputObjectType({
    name: 'CreateAddress',
    description: 'Create a new address',
    fields: () => ({
        ...fields
    })
});

export { Address, CreateAddress };

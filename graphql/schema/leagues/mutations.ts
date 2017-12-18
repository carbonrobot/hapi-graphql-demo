import { GraphQLNonNull, GraphQLList, GraphQLString } from 'graphql';

import { LeagueService } from '../../../services';
import { CreateLeague, League } from './league';

export default {
    createLeague: {
        type: League,
        args: {
            input: {
                type: new GraphQLNonNull(CreateLeague)
            }
        },
        resolve: async (rootValue, { input }) => {
            const service = new LeagueService();
            return service.update(input, <any>{});
        }
    }
};

import { GraphQLNonNull, GraphQLList, GraphQLString } from 'graphql';

import { LeagueService } from '../../../services';
import { League } from './league';

export default {
    leagues: {
        type: new GraphQLList(League),
        resolve: () => {
            const service = new LeagueService();
            return service.list({}).then(results => {
                return results.results;
            });
        }
    },
    league: {
        type: League,
        args: {
            id: {
                type: GraphQLString,
                description: 'The primary key'
            }
        },
        resolve: (root, { id }, { request }) => {
            const service = new LeagueService();
            return service.get(id);
        }
    }
};

import { PluginFunction } from 'hapi';
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';

import config from '../config';
import schema from './schema/schema';

/**
 * Registers the plugin
 */
const register: PluginFunction<any> = function (server, options, next) {

    const plugins = [];

    const paths = {
        graphql: `/graphql`,
        graphiql: `/graphiql`
    };

    plugins.push({
        register: graphqlHapi,
        options: {
            path: paths.graphql,
            graphqlOptions: request => ({
                context: {
                    request
                },
                schema: schema,
                pretty: true
            }),
            route: {
                cors: true,
                auth: {
                    strategy: 'jwt',
                    mode: 'optional'
                }
            }
        }
    });

    if (config.debug) {
        plugins.push({
            register: graphiqlHapi,
            options: {
                path: paths.graphiql,
                graphiqlOptions: {
                    endpointURL: paths.graphql
                }
            }
        });
    }

    server.register(plugins, () => {
        return next();
    });
};

// required for hapi plugins
register.attributes = {
    pkg: {
        name: 'graphqlModule',
        version: '1.0.0'
    }
};

export default register;

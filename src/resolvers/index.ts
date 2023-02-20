import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { spaceResolvers, spaceSchemaTypeDefs } from './space/index.js';

export const resolvers = mergeResolvers([
    spaceResolvers
]);

export const typeDefs = mergeTypeDefs([
    spaceSchemaTypeDefs,
]);
import { spacecraftResolver } from './spacecrafts/index.js';

export const spaceResolvers = { 

    Query: {
        spacecrafts: () => spacecraftResolver,
    },

};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("@nestjs/graphql");
var node_path_1 = require("node:path");
var definitionsFactory = new graphql_1.GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: (0, node_path_1.join)(process.cwd(), 'src/graphql.schema.ts'),
    outputAs: 'class',
});

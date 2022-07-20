// const projects = [
//   {
//     id: '1',
//     clientId: '1',
//     name: 'eCommerce Website',
//     description:
//       'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
//     status: 'In Progress',
//   },
//   {
//     id: '2',
//     clientId: '2',
//     name: 'Dating App',
//     description:
//       'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
//     status: 'In Progress',
//   },
//   {
//     id: '3',
//     clientId: '3',
//     name: 'SEO Project',
//     description:
//       'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
//     status: 'In Progress',
//   },
//   {
//     id: '4',
//     clientId: '4',
//     name: 'Design Prototype',
//     description:
//       'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
//     status: 'Done',
//   },
//   {
//     id: '5',
//     clientId: '5',
//     name: 'Auction Website',
//     description:
//       'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
//     status: 'In Progress',
//   },
// ];

// // Clients
// const clients = [
//   {
//     id: '1',
//     name: 'YouCodes',
//     email: 'louis@louisyou.com',
//     phone: '123-123-1234',
//   },
//   {
//     id: '2',
//     name: 'Natasha Romanova',
//     email: 'blackwidow@gmail.com',
//     phone: '223-567-3322',
//   },
//   {
//     id: '3',
//     name: 'Thor Odinson',
//     email: 'thor@gmail.com',
//     phone: '324-331-4333',
//   },
//   {
//     id: '4',
//     name: 'Steve Rogers',
//     email: 'steve@gmail.com',
//     phone: '344-562-6787',
//   },
//   {
//     id: '5',
//     name: 'Bruce Banner',
//     email: 'bruce@gmail.com',
//     phone: '321-468-8887',
//   },
// ];

// module.exports = { projects, clients };

const Project = require('../models/Project')
const Client = require('../models/Client')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString},
        description: { type: GraphQLString},
        status: { type: GraphQLString},
        client: {
            type: ClientType,
            resolve(parent, args){
                return Client.findById(parent.clientId);
            }
        }
    })
});

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString},
        email: { type: GraphQLString},
        phone: { type: GraphQLString}
    })
});
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find();
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Project.findById(args.id);
            }
        },
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return Project.find();
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Client.findById(args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema ({
    query: RootQuery
})
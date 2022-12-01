const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList} = require('graphql');
const {UserModel, PostModel, CommentModel} = require('../models')


const UserType = new GraphQLObjectType({
    name : "User",
    description : "User Type",
    fields : ()=> ({
        id :  {type : GraphQLID},
        username : {type : GraphQLString},
        email :  {type : GraphQLString},
        displayName :  {type : GraphQLString}
    })
})


const PostType = new GraphQLObjectType({
    name : "Post",
    description : "Post Type",
    fields : ()=> ({
        id :  {type : GraphQLID},
        title : {type : GraphQLString},
        body :  {type : GraphQLString},
        author : {
            type : GraphQLString,
            resolve(parent, args){
                return UserModel.findById(parent.authorId)
            }
        },
        comments : {
            type : GraphQLList(GraphQLString),
            resolve(parent, args){
                return CommentModel.find({ postId : parent.id })
            }
        },

    })
})


const CommentType = new GraphQLObjectType({
    name : "Comment",
    description : "Comment type",
    fields : ()=> ({
        id : {type : GraphQLID},
        comment : {type : GraphQLString},
        user : {
            type : UserType,
            resolve(parent, args){
                return UserModel.findById(perent.userId)
            }
        },
        post : {
            type : PostType,
            resolve(){
                return PostModel.findById(parent.postId)
            }
        }
    })
})

module.exports = {UserType, PostType, CommentType}


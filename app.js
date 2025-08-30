$(function() {
    // --- THE DATA MODEL ---
    // Represents a SINGLE blog post.
    const Post = Backbone.Model.extend({
        // This is the most important line. It tells Backbone how to talk to
        // your Rails API to get, update, or delete a SINGLE post.
        // For a post with id: 5, Backbone knows to go to 'http://localhost:3000/posts/5'
        urlRoot: 'http://localhost:3000/posts'
    });

     // --- THE DATA COLLECTION ---
    // Represents a LIST of blog posts.
    const Posts = Backbone.Collection.extend({
        // Tells this Collection that it will be holding a list of 'Post' models.
        model: Post,

        // This tells the Collection where to get the ENTIRE LIST of posts.
        // When we call .fetch(), it will make a GET request to this URL.
        url: 'http://localhost:3000/posts'
    });
});

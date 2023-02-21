function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this._comments = [];
        }
        get comments() {
            return this._comments;
        }
        addComment(value) {
            this._comments.push(value);
        }
        toString() {
            let result = [];
            result.push(super.toString(), `Rating: ${this.likes - this.dislikes}`);
            if (this._comments.length == 0) {
                return result.join('\n');
            }
            result.push('Comments:');
            this._comments.forEach(comment => result.push(` * ${comment}`));
            return result.join('\n');
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            let result = [];
            result.push(super.toString(), `Views: ${this.views}`);
            return result.join('\n');
        };
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}
const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let blogPost = new classes.BlogPost("Post", "Content", 50);
blogPost.view(50)
console.log(blogPost.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
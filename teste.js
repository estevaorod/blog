var PostInstance = require('./post/post');
var CommentInstance = require('./comment/comment');

PostInstance.Post.findById(1).then((resp) => {
    console.log(resp.txt);
});


CommentInstance.Commnet.findAll({ limit: 1}).then((resp) => {
    console.log(resp[0].txt);
});


PostInstance.Post.create({
    date: Date.now(),
    txt: 'Meu post'
})
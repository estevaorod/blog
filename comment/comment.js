var db = require('../config/database');

class Comment{
    constructor(id, postId, txt){
        this.id = id;
        this.postId = postId;
        this.txt = txt;
    }
    save(){

    }
}
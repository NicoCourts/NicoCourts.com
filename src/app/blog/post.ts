export class Post {
    constructor(
        public _id:         number,
        public isshort:    boolean,
        public title:      string,
        public urltitle:    string,
        public visible:    boolean,
        public date:       string,
        public body:       string
    ) { }
    }

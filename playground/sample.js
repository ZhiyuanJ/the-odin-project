function book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function(){
        return(title + " by " + author + ", " + pages + " pages, " + read )
    }
}

function player(name, marker){
    this.name = name,
    this.marker = marker
}

const player1 = new player("tim", "X");

const hobbit = new book("the hobbit", "J.R.R", 295, "not read");


console.log(player1.name)


player.prototype.sayHello = function(){
    console.log("This is a player")
}
player1.sayHello()
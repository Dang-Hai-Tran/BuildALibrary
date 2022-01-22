class Media {
	constructor(title, rating = [], isCheckOut = false) {
		this._title = title;
		this._rating = rating;
		this._isCheckOut = isCheckOut;
	}
	get title() {
		return this._title;
	}
	get rating() {
		return this._rating;
	}
	get isCheckOut() {
		return this._isCheckOut;
	}
	getAverageRating() {
		return this._rating.reduce((a, b) => a + b) / this._rating.length;
	}
	toggleCheckOutStatus() {
		this._isCheckOut = !this._isCheckOut;
		return this._isCheckOut;
	}
	addRating(rate) {
		this._rating.push(rate);
	}
}
class Book extends Media {
	constructor(title, rating = [], isCheckOut = false, author, pages) {
		super(title, rating, isCheckOut);
		this._author = author;
		this._pages = pages;
	}
	get author() {
		return this._author;
	}
	get pages() {
		return this._pages;
	}
}
class Movie extends Media {
	constructor(title, rating, isCheckOut, director, runtime) {
		super(title, rating, isCheckOut);
		this._director = director;
		this._runtime = runtime;
	}
	get director() {
		return this._director;
	}
	get runtime() {
		return this._runtime;
	}
}

const historyOfEverything = new Book(
	"A Short History of Nearly Everything",
	[],
	false,
	"Bill Bryson",
	544
);
console.log(historyOfEverything.pages);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Speed", [], false, "Jan de Bont", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

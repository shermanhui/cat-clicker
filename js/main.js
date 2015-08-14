var catData = [
	{
		clickCount: 0,
		name: 'Testy',
		imgSrc: 'img/Nyan-ani.gif',
		imgAttr: 'Something',
		nickname: [{name: 'TESTER'}, {name: 'TT'}]
	},{
		clickCount: 0,
		name: 'Tim',
		imgSrc: 'img/Nyan-ani.gif',
		imgAttr: 'Something',
		nickname: [{name: 'TIMMY'}, {name: 'TIMMAY'}]
	},{
		clickCount: 0,
		name: 'Timothy',
		imgSrc: 'img/Nyan-ani.gif',
		imgAttr: 'Something',
		nickname: [{name: 'TI'}, {name: 'TT'}]
	},{
		clickCount: 0,
		name: 'Timolino',
		imgSrc: 'img/Nyan-ani.gif',
		imgAttr: 'Something',
		nickname: [{name: 'TI'}, {name: 'TT'}]
	},{
		clickCount: 0,
		name: 'Timmonen',
		imgSrc: 'img/Nyan-ani.gif',
		imgAttr: 'Something',
		nickname: [{name: 'TI'}, {name: 'TT'}]
	}
];

var Cat = function(data){
	var self = this;
	self.clickCount = ko.observable(data.clickCount),
	self.name = ko.observable(data.name),
	self.imgSrc = ko.observable(data.imgSrc),
	self.imgAttr = ko.observable(data.imgAttr),
	self.nickname = ko.observable(data.nickname),

	self.level = ko.computed(function(){
		if (self.clickCount() <= 10){
			return "infant";
		} else if (self.clickCount() <= 30){
			return "child"
		} else if (self.clickCount() <= 50){
			return "teen"
		} else if (self.clickCount() <= 100){
			return "adult"
		} else {
			return "grandmaster"
		}

	});
};

var myViewModel = function(){
	var self = this;

	this.catList = ko.observableArray([]);

	catData.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat){
		self.currentCat(clickedCat)
	};

	this.setName = function(clickedName){
		self.currentCat().name(clickedName.name)
	};


};

ko.applyBindings(new myViewModel());

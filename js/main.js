var catData = [
	{
		clickCount: 0,
		name: 'Something',
		imgSrc: 'img/Nyan-ani.gif',
		imgAttr: 'Something'
	},{
		clickCount: 0,
		name: 'Something1',
		imgSrc: 'img/Nyan-ani.gif',
		imgAttr: 'Something'
	},{
		clickCount: 0,
		name: 'Something2',
		imgSrc: 'img/Nyan-ani.gif',
		imgAttr: 'Something'
	},{
		clickCount: 0,
		name: 'Something3',
		imgSrc: 'img/Nyan-ani.gif',
		imgAttr: 'Something'
	},{
		clickCount: 0,
		name: 'Something4',
		imgSrc: 'img/Nyan-ani.gif',
		imgAttr: 'Something'
	}
];

var Cat = function(data){
	var self = this;
	self.clickCount = ko.observable(data.clickCount),
	self.name = ko.observable(data.name),
	self.imgSrc = ko.observable(data.imgSrc),
	self.imgAttr = ko.observable(data.imgAttr)
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


};

ko.applyBindings(myViewModel);

// var $nyans = $('.nyan-cats');
// var $nyanOne = $('#nyan-cat-1');// currently unused variables
// var $nyanTwo = $('#nyan-cat-2');// currently unused variables
// var $nyanThree = $('#nyan-cat-3');// currently unused variables

// var $nameOne = $('#name-one');
// var $nameTwo = $('#name-two');
// var $nameThree = $('#name-three');
// var $nameFour = $('#name-four');
// var $nameFive = $('#name-five');

// var $counter = $('#counter-one');
// var $counter2 = $('#counter-two');
// var $counter3 = $('#counter-three');
// var $counter4 = $('#counter-four');
// var $counter5 = $('#counter-five');

// var clickCountOne = 0;
// var clickCountTwo = 0;
// var clickCountThree = 0;
// var clickCountFour = 0;
// var clickCountFive = 0;

// var cats = [$nameOne, $nameTwo, $nameThree, $nameFour, $nameFive];
// var numCats = cats.length;
// var names = ['Ned', 'Jaime', 'Jon', 'Arya', 'Sansa', 'Tyrion', 'Hodor', 'Petyr', 'Khal', 'Khaleesi', 'Ygritte', 'Catelyn', 'Podrick', 'Brienne'];
// var nameLength = names.length;

// var catRows = $('#cat-rows');
// var catDiv = '<div id="cat-div" class="col-md-4"></div>';
// var catDivId = $('#cat-div');
// var catTitle = '<h2 id="name">Nyan!</h2>';
// var catImg = '<img id="nyan-cat" class="nyan-cats" src="img/Nyan-ani.gif"/>';
// var catCounter = '<p id="counter-one"></p>';
// var formattedCat = catTitle;
// // console.log(formattedCat);
// // catRows.append(catDiv);
// // catDivId.append(formattedCat);

// //console.log(clickCountOne, clickCountTwo, clickCountThree);

// // this function randomly names the three cats using the array of GoT character names provided
// // iterates through a the number of cats and inputs the name!
// var nameCats = function(){
// 	for (var i = 0; i < numCats; i++) {
// 		var catName = names[Math.floor(Math.random() * nameLength)];
// 		var cat = cats[i];
// 		cat.text(catName + ' Nyan');
// 	}
// };

// var clickTracker = function() {
// 	// Trying to work with closures here...but it's a bit of a mess! To be completed!
// 	// for (var i = 0; i <= numCats; i++){
// 	// 	(function(){
// 	// 		var catId = i;
// 	// 		$('#nyan-cat-' + catId).click(function(){
// 	// 			console.log(catId);
// 	// 			var clickCount = 'clickCount' + catId;
// 	// 			console.log(clickCount);
// 	// 			$counter.text('Current Click Count = ' + clickCount);
// 	// 		});
// 	// 	})();
// 	// };

// 	//experimentation on parseInt..
// 	// $nyans.click(function(){
// 	// 	var count = parseInt($(this).data('click')) || 0;
// 	// 	count++;
// 	// 	$(this).data('click', count);
// 	// 	$counter.text('Current Click Count = ' + count);
// 	// 	$counter2.text('Current Click Count = ' + count);
// 	// 	$counter3.text('Current Click Count = ' + count);
// 	$nyans.click(function(){
// 		var clickedItemId = null;
// 		// Practicing usage of "this" to grab the last object clicked, in this case the individual Nyan cat id
// 		// so we can identify and increment the appropriate clicker
// 		// this article helped with clarifying "this" http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
// 		clickedItemId = $(this).attr('id');
// 		//console.log(clickedItemId);
// 		//console.log($nyanOne);
// 		if (clickedItemId == "nyan-cat-1") {
// 			clickCountOne ++;
// 			$counter.text('Current Click Count = '+ clickCountOne);
// 		} else if (clickedItemId == "nyan-cat-2") {
// 			clickCountTwo ++;
// 			$counter2.text('Current Click Count = '+ clickCountTwo);
// 		} else if (clickedItemId == "nyan-cat-3"){
// 			clickCountThree ++;
// 			$counter3.text('Current Click Count = ' + clickCountThree);
// 		} else if (clickedItemId == "nyan-cat-4"){
// 			clickCountFour ++;
// 			$counter4.text('Current Click Count = ' + clickCountFour);
// 		} else if (clickedItemId == "nyan-cat-5"){
// 			clickCountFive ++;
// 			$counter5.text('Current Click Count = ' + clickCountFive);
// 		}
// 	});
// };

// // var hideMe = function(){
// // 	var item = document.getElementById(divID)
// // 	if item {
// // 		if (item.className == 'hidden'){
// // 			item.className = 'unhidden';
// // 		} else {
// // 			item.className = 'hidden'
// // 		}
// // 	}
// // };

// nameCats();
// clickTracker();
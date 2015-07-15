var $nyans = $('.nyan-cats');
var $nyanOne = $('#nyan-cat-one');
var $nyanTwo = $('#nyan-cat-two');
var $nyanThree = $('#nyan-cat-three');

var $nameOne = $('#name-one');
var $nameTwo = $('#name-two');
var $nameThree = $('#name-three');

var $counter = $('#counter-one');
var $counter2 = $('#counter-two');
var $counter3 = $('#counter-three');

var clickCountOne = 0;
var clickCountTwo = 0;
var clickCountThree = 0;

var cats = [$nameOne, $nameTwo, $nameThree];
var numCats = cats.length;
var names = ['Ned', 'Jaime', 'Jon', 'Arya', 'Sansa', 'Tyrion'];

console.log(clickCountOne, clickCountTwo, clickCountThree);

var nameCats = function(){
	for (var i = 0; i < numCats; i++) {
		var catName = names[Math.floor(Math.random() * 6)]
		var cat = cats[i];
		cat.text(catName + ' Nyan');
	}
};

$nyanOne.click(function () {
	clickCountOne += 1;
	$counter.text('Current Click Count = '+ clickCountOne);
});

$nyanTwo.click(function () {
	clickCountTwo += 1;
	$counter2.text('Current Click Count = '+ clickCountTwo);
});

$nyanThree.click(function () {
	clickCountThree += 1;
	$counter3.text('Current Click Count = '+ clickCountThree);
});

nameCats();
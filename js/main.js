var $nyan = $('#nyan-cat');
var $counter = $('#counter-p')
var clickCount = 0;

console.log(clickCount);

$nyan.click(function () {
	clickCount += 1;
	$counter.text('Current Click Count = '+ clickCount);
});


var fitbitPhoto = document.getElementById('fitbit-photo');

var blackButton = document.getElementById('black-square');
var orangeButton = document.getElementById('orange-square');
var purpleButton = document.getElementById('purple-square');
var pinkButton = document.getElementById('pink-square');

var time = document.getElementById('fitbit-time');
time.innerHTML = constructTime();

blackButton.addEventListener('click', function() {
	fitbitPhoto.src = "https://i.imgur.com/iOeUBV7.png";
});

orangeButton.addEventListener('click', function() {
	fitbitPhoto.src = "https://i.imgur.com/PTgQlim.png";
});

purpleButton.addEventListener('click', function() {
	fitbitPhoto.src = "https://i.imgur.com/xSIK4M8.png";
});

pinkButton.addEventListener('click', function() {
	fitbitPhoto.src = "https://i.imgur.com/Zygu7I3.png";
});

function tick() {
	setInterval(constructTime, 1000);
};

function constructTime() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	time.innerHTML = (hours + ":" + minutes + ":" + seconds);
	return (hours + ":" + minutes + ":" + seconds);
}

tick();

var timeButton = document.getElementById('time-button');
var heartButton = document.getElementById('heartrate-button');
var heartContainer = document.getElementById('heartrate-container');


timeButton.addEventListener('click', function() {
	time.classList.add('show');
	time.classList.remove('hide');
	heartContainer.classList.remove("show");
	heartContainer.classList.add("hide");

});

heartButton.addEventListener('click', function() {
	heartContainer.classList.add('show');
	heartContainer.classList.remove('hide');
	time.classList.remove('show');
	time.classList.add('hide');
});

var buyButton = document.getElementById('buynow-button');

buyButton.addEventListener('click', function() {
	window.open('https://www.fitbit.com/global/us/products');
});


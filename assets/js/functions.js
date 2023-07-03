$(document).ready(function () {

	function nav() {

		$('.nav-toggle').click(function () {

			$('.nav').toggleClass('open');

		});

	}

	nav();

});

// premier carousel
const carousel = [
	{
		img: src = "assets/img/full-slide/thumb-1.jpg",
	},

	{
		img: src = "assets/img/full-slide/thumb-2.jpg",
	},
	{
		img: src = "assets/img/full-slide/thumb-3.jpg",
	},
];

const img = document.getElementById("image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// initialise le premier element
let currentItem = 0;

// telécharge le premier element
window.addEventListener("DOMContentLoaded", function () {
	const item = carousel[currentItem];
	img.src = item.img;
});

// montrer la premiere immage
function showImage(foto) {
	const item = carousel[foto];
	img.src = item.img;
}
// le prochain image
nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > carousel.length - 1) {
		currentItem = 0;
	}
	showImage(currentItem);
});
// image précédent
prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = carousel.length - 1;
	}
	showImage(currentItem);
});



// Ajouter le MAP
function initialize() {
	var OptionCarte = L.map('macarte').setView([45.65, -75.61], 5);

	var OpSLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '© OpenStreetMap contributors',
		maxZoom: 10
	});

	OptionCarte.addLayer(OpSLayer);

	var marker = L.marker([45.65, -75.61]);
	marker.addTo(OptionCarte);
	//marker.bindPopup('is here').openPopup();OptionCarte
	
}


// fluidité du scroll
var defilementFluide = {
	vitesse: 0,
	delay: 10,
	timer: null,
	scrollSpeed: 4,
	inertia: 0.95,
	init: function () {
		this.setEventsListeners();
	},
	setEventsListeners: function () {
		(function (self) {
			var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"
			document.addEventListener(mousewheelevt, function (e) { self.setSpeed(e) }, false);
		})(this);
	},
	setSpeed: function (e) {
		this.vitesse += e.wheelDelta < 0 ? -this.scrollSpeed : this.scrollSpeed;
		if (this.timer == null) {
			this.timer = setTimeout(this.defilementFluide, this.delay, this);
		}
		//e.preventDefault();
	},
	defilementFluide: function (scope) {
		var self = scope;
		self.vitesse *= self.inertia;

		window.scrollTo(0, window.scrollY - self.vitesse);

		if (self.vitesse < self.inertia && self.vitesse > -self.inertia) {
			self.vitesse = 0;
			clearTimeout(self.timer);
			self.timer = null;
		} else {
			self.timer = setTimeout(self.defilementFluide, self.delay, self);
		}
	}
}

defilementFluide.init();
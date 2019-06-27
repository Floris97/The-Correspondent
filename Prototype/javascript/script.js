//////// ANIMATIONS H1
var microphone = document.getElementById("microphone");
var dropmic = new Audio('./assets/audio/dropmic.mp3');

window.addEventListener("load", onLoad);

function onLoad() {
  document.getElementById('streep3').classList.toggle('streepblink');
  microphone.classList.toggle('drop');
  dropmic.play(Audio);
}


//////// ANIMATIONS H2
var skratch = new Audio('./assets/audio/skratch.mp3');

document.getElementById('naald').addEventListener("click", skrr);

function skrr() {
	skratch.play();
}

var scratchplaat = new Audio('./assets/audio/scratchplaat.mp3');

document.getElementById('plaat').addEventListener("click", scratch);

function scratch() {
	scratchplaat.play();
}

//////// ANIMATIONS H3

//////// ANIMATIONS H4

//////// ANIMATIONS H5

var tap = new Audio('./assets/audio/mictapping.mp3');

document.getElementById('mic').addEventListener("click", tappingsound);

function tappingsound() {
	tap.play();
}

var headsettap = false
document.getElementById('koptelefoon').addEventListener("click", headsetsound);

function headsetsound() {
  if(headsettap == false){
   headsettap = true;
   track4.volume = 0.2;
}
else {
  track4.volume = 1.0;
  headsettap = false;
}
}

//////// ANIMATIONS H6

var tvon = false;
var distort = new Audio('./assets/audio/tvdistort.mp3');
document.getElementById('draaiding').addEventListener("click", switchprogram);
document.getElementById('draaiding2').addEventListener("click", switchprogram);

function switchprogram() {
	if(tvon == false){
	distort.play();
	tvon= true;
  document.getElementById("draaiding").classList.toggle('draaidingoff');
  document.getElementById("mtvraps").classList.toggle('mtvrapsoff');
  document.getElementById("draaiding2").classList.toggle('draaiding2on');
  document.getElementById("schoen").classList.toggle('schoenon');
} else {
  document.getElementById("draaiding").classList.toggle('draaidingoff');
  document.getElementById("mtvraps").classList.toggle('mtvrapsoff');
  document.getElementById("draaiding2").classList.toggle('draaiding2on');
  document.getElementById("schoen").classList.toggle('schoenon');
  distort.play();
	}
}

//////// ANIMATIONS H7



//////// Music EVENTS
var track1 = new Audio('assets/audio/canikickit.mp3');
var track2 = new Audio('assets/audio/killermike.mp3');
var track3 = new Audio('assets/audio/cruisininmy64.mp3');
var track4 = new Audio('assets/audio/indaclub.mp3');
var track5 = new Audio('assets/audio/badboysforlife.mp3');
var track6 = new Audio('assets/audio/changes.mp3');
var track7 = new Audio('assets/audio/alright.mp3');


//////// Music on
var active = false;
document.getElementById('play2').addEventListener("click", playmusic);

function playmusic() {
	if(active == false){
	track1.play();
	active = true;
	document.getElementById("play2").classList.toggle('playoff');
	document.getElementById("pause2").classList.toggle('pauseon');
} else {
	document.getElementById("play2").classList.toggle('playoff');
	document.getElementById("pause2").classList.toggle('pauseon');
	track1.pause();
	track1.currentTime = 0;
	active = false;
	}
}

//////// Music on
var active = false;
var cassettebandjeroll= new Audio('./assets/audio/cassettebandjeroll.mp3');
document.getElementById('play3').addEventListener("click", playmusic2);

function playmusic2() {
	if(active == false){
	track2.play();
	active = true;
  cassettebandjeroll.play();
  cassettebandjeroll.loop = true;
	document.getElementById("play3").classList.toggle('playoff');
	document.getElementById("pause3").classList.toggle('pauseon');
  document.getElementById('weel1').classList.toggle('weel1spinning');
  document.getElementById('weel2').classList.toggle('weel2spinning');
} else {
	document.getElementById("play3").classList.toggle('playoff');
	document.getElementById("pause3").classList.toggle('pauseon');
  document.getElementById('weel1').classList.toggle('weel1spinning');
  document.getElementById('weel2').classList.toggle('weel2spinning');
	track2.pause();
	track2.currentTime = 0;
  cassettebandjeroll.pause();
	active = false;
	}
}

//////// Music on
var active = false;
var cassettebandjeklik= new Audio('./assets/audio/cassettebandjeklik.mp3');
document.getElementById('play4').addEventListener("click", playmusic3);

function playmusic3() {
	if(active == false){
	track3.play();
	active = true;
  cassettebandjeklik.play();
	document.getElementById("play4").classList.toggle('playoff');
	document.getElementById("pause4").classList.toggle('pauseon');
  document.getElementById('sound').classList.toggle('soundmoving');
} else {
	document.getElementById("play4").classList.toggle('playoff');
  document.getElementById("pause4").classList.toggle('pauseon');
	document.getElementById("sound").classList.toggle('soundmoving');
	track3.pause();
	track3.currentTime = 0;
  cassettebandjeklik.pause();
	active = false;
	}
}

//////// Music on
var active = false;
document.getElementById('play5').addEventListener("click", playmusic4);

function playmusic4() {
	if(active == false){
	track4.play();
	active = true;
	document.getElementById("play5").classList.toggle('playoff');
	document.getElementById("pause5").classList.toggle('pauseon');
  document.getElementById('recording').classList.toggle('recordingblink');
} else {
	document.getElementById("play5").classList.toggle('playoff');
	document.getElementById("pause5").classList.toggle('pauseon');
  document.getElementById('recording').classList.toggle('recordingblink');
	track4.pause();
	track4.currentTime = 0;
	active = false;
	}
}

//////// Music on
var active = false;
document.getElementById('play6').addEventListener("click", playmusic5);

function playmusic5() {
	if(active == false){
	track5.play();
	active = true;
	document.getElementById("play6").classList.toggle('playoff');
	document.getElementById("pause6").classList.toggle('pauseon');
} else {
	document.getElementById("play6").classList.toggle('playoff');
	document.getElementById("pause6").classList.toggle('pauseon');
	track5.pause();
	track5.currentTime = 0;
	active = false;
	}
}

//////// Music on
var active = false;
document.getElementById('play7').addEventListener("click", playmusic6);

function playmusic6() {
	if(active == false){
	track6.play();
	active = true;
	document.getElementById("play7").classList.toggle('playoff');
	document.getElementById("pause7").classList.toggle('pauseon');
  document.getElementById('turnup').classList.toggle('schuifbeweeg');
  document.getElementById('turnup2').classList.toggle('schuifbeweeg2');
  document.getElementById('turnup3').classList.toggle('schuifbeweeg3');
  document.getElementById('turnup4').classList.toggle('schuifbeweeg4');
} else {
	document.getElementById("play7").classList.toggle('playoff');
	document.getElementById("pause7").classList.toggle('pauseon');
	track6.pause();
	track6.currentTime = 0;
	active = false;
	}
}

//////// Music on
var active = false;
document.getElementById('play8').addEventListener("click", playmusic7);

function playmusic7() {
	if(active == false){
	track7.play();
	active = true;
	document.getElementById("play8").classList.toggle('playoff');
	document.getElementById("pause8").classList.toggle('pauseon');
  document.getElementById("plaat2").classList.toggle('plaat2rol');
} else {
	document.getElementById("play8").classList.toggle('playoff');
	document.getElementById("pause8").classList.toggle('pauseon');
  document.getElementById("plaat2").classList.toggle('plaat2rol2');
	track7.pause();
	track7.currentTime = 0;
	active = false;
	}
}


//////// SCROLLING EVENT
var myFullpage = new fullpage('#fullpage', {
		sectionsColor: ['#252425', '#252425', '#252425', '#252425', '#252425', '#252425', '#252425', '#252425'],
    navigation: true,
    navigationPosition: 'right',
    keyboardScrolling: true,
	});

	//////// ALL AVAILABLE OPTIONS
	// var myFullpage = new fullpage('#fullpage', {
	// 	//Navigation
	// 	menu: '#menu',
	// 	lockAnchors: false,
	// 	anchors:['firstPage', 'secondPage'],
	// 	navigation: false,
	// 	navigationPosition: 'right',
	// 	navigationTooltips: ['firstSlide', 'secondSlide'],
	// 	showActiveTooltip: false,
	// 	slidesNavigation: false,
	// 	slidesNavPosition: 'bottom',
	//
	// 	//Scrolling
	// 	css3: true,
	// 	scrollingSpeed: 700,
	// 	autoScrolling: true,
	// 	fitToSection: true,
	// 	fitToSectionDelay: 1000,
	// 	scrollBar: false,
	// 	easing: 'easeInOutCubic',
	// 	easingcss3: 'ease',
	// 	loopBottom: false,
	// 	loopTop: false,
	// 	loopHorizontal: true,
	// 	continuousVertical: false,
	// 	continuousHorizontal: false,
	// 	scrollHorizontally: false,
	// 	interlockedSlides: false,
	// 	dragAndMove: false,
	// 	offsetSections: false,
	// 	resetSliders: false,
	// 	fadingEffect: false,
	// 	normalScrollElements: '#element1, .element2',
	// 	scrollOverflow: false,
	// 	scrollOverflowReset: false,
	// 	scrollOverflowOptions: null,
	// 	touchSensitivity: 15,
	// 	normalScrollElementTouchThreshold: 5,
	// 	bigSectionsDestination: null,
	//
	// 	//Accessibility
	// 	keyboardScrolling: true,
	// 	animateAnchor: true,
	// 	recordHistory: true,
	//
	// 	//Design
	// 	controlArrows: true,
	// 	verticalCentered: true,
	// 	sectionsColor : ['#ccc', '#fff'],
	// 	paddingTop: '3em',
	// 	paddingBottom: '10px',
	// 	fixedElements: '#header, .footer',
	// 	responsiveWidth: 0,
	// 	responsiveHeight: 0,
	// 	responsiveSlides: false,
	// 	parallax: false,
	// 	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	// 	cards: false,
	// 	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
	//
	// 	//Custom selectors
	// 	sectionSelector: '.section',
	// 	slideSelector: '.slide',
	//
	// 	lazyLoading: true,
	//
	// 	//events
	// 	onLeave: function(origin, destination, direction){},
	// 	afterLoad: function(origin, destination, direction){},
	// 	afterRender: function(){},
	// 	afterResize: function(width, height){},
	// 	afterResponsive: function(isResponsive){},
	// 	afterSlideLoad: function(section, origin, destination, direction){},
	// 	onSlideLeave: function(section, origin, destination, direction){}
	// });
	// ```

  function openNav() {
    document.getElementById("kopje1").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("kopje1").style.height = "0%";
  }

  function openNav2() {
    document.getElementById("kopje2").style.height = "100%";
  }

  function closeNav2() {
    document.getElementById("kopje2").style.height = "0%";
  }

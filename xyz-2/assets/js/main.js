$(document).ready(function(){

var word1 = [
	"The slings and arrows",
	"Love looks not with",
	"Good night, good night!",
	"What’s in a name?",
	"There was a star danced",
	"I would my horse"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "to be, or not",
  "but with the mind",
  "therefore is winged",
  "that which we call",
  "hear my dog",
  "bark at a crow"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "that is the question.",
  "against a sea of troubles.",
  "Cupid painted blind.",
  "parting is such sweet sorrow.",
  "under that was I born.",
  "till it be morrow."
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);

});
var readlineSync = require('readline-sync');
//top scores
let score=0;

var topScores=[{
name: "Sarvesh",
score: 10
},
{
  name: "Prakash",
  score:9
}
]

var questions= [{
  question:"What is Captain America's real name?\n a)Johnny Storm b)Steve Rogers\n",
  answer: "b"
},{
  question:"How does the Marvel hero Captain America get his powers?\na)Hydra experiment b)U.S. military experiment\n",
  answer: "b"
},{
  question:"What duo created Captain America?\na)Jack Kirby and Joe Simon b)Sheldon Mayer and Gardner Fox\n",
  answer: "a"
},{
  question:"True or false: Marvel's first version of a Captain America movie went straight to video in the U.S\na)True b)False\n",
  answer: "a"
},{
  question:"What is Captain America's primary weapon?\na)Shield b)Machine-Gun\n",
  answer: "a"
},{
  question:"What is the name of the French martial artist and frequent Captain America antagonist who also appears in the movie Captain America: The Winter Soldier?\na)La Guisarme b)Batroc the Leaper\n",

  answer: "b"
},
{
  question:"When was the feature film Captain America: The First Avenger released?\na)2010  b)2011\n ",
  answer: "b"
},{
  question:"Which actor plays Captain America in the movie franchise trilogy?\na)Chris Evans b)Sebastian Stan\n",
  answer: "a"
},{
  question:"What group of superheroes did Captain America team up with before the Avengers?\na)the Invaders b)the Justice League\n",
  answer: "a"
},{
  question:"What organization does Captain America battle in the movie Captain America: The First Avenger?\na)Hydra b)S.H.I.E.L.D.\n",
  answer: "b"
},{
  question:"What is Captain America's shield made of?\na)titanium b)vibranium\n",
  answer: "b"
},{
  question:"Who is the Marvel character Samuel L. Jackson plays in the Captain America and Avengers movies?\na)Nick Fury b)Agent Phil Coulson\n",
  answer: "a"
}
  
]


function welcome(){
var userName = readlineSync.question('May I have your name please? ');
console.log("Welcome "+userName +" to Captain America Quiz")


}

function play(question,answer)
{
  var answer1=readlineSync.question(question)
  if(answer.toUpperCase()===answer1.toUpperCase())
  {
    console.log("you are right")
    score++
  }
  else{
    console.log("wrong")
    score--
  }
  console.log("Your total score is "+score+"\n ------------------")


}

function game(){
  for(i=0;i<questions.length;i++)
{
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}
}

function highScore(){
console.log("Now check out Top Scorer, if u have beaten the top score please mail me your screen shot I'll update it")

topScores.map(score=>console.log(score.name, ":", score.score))
}

welcome();
game();
highScore();



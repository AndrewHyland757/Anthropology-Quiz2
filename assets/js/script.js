

// array of questions to be used in the quiz
const questions = [{
    question: 'The earliest humans first appear in what epoch?',
    A: 'Oligocene',
    B: 'Paleocene',
    C: 'Miocene',
    D: 'Pliocene',
    correct: "choiceC"
},
{
    question: 'In most small-scale, non-industrial societies, social organization is based largely on.....?',
    A: 'Occupation',
    B: 'Education',
    C: 'Social class',
    D: 'Kinship affiliation',
    correct: "choiceD"
},
{
    question: "What is a ritual held at a certain point in a person's life to mark the end of one stage and the beginning of another called?",
    A: 'Quartering',
    B: 'Ceremony',
    C: 'Rite of passage',
    D: 'Sanction',
    correct: "choiceC"
},
{
    question: 'What is learned, and shared behaviors and beliefs?',
    A: 'Culture',
    B: 'Food',
    C: 'Language',
    D: 'Enthnicity',
    correct: "choiceA"
},
{
    question: 'What is the term for the process of creating a new culture by combining elements from different cultures?',
    A: 'Cultural fusion',
    B: 'Globalization',
    C: 'Cultural appropriation',
    D: 'Cultural-hybridization',
    correct: "choiceD"
},
{
    question: 'What animals did Jane Goodall study?',
    A: 'Gorillas',
    B: 'Chimpanzees',
    C: 'Orangutans',
    D: 'Baboons',
    correct: "choiceB"
},
{
    question: 'How many languages are currently spoken in the world?',
    A: 'Over 10,000',
    B: 'Around 1,000',
    C: 'Around 7,000',
    D: 'Around 3,000',
    correct: "choiceC"
},
{
    question: 'What is the revolution from hunting and gathering to food production called?',
    A: 'The Pastoral Revolution',
    B: 'The Organic Revolution',
    C: 'The Neolithic Revolution',
    D: 'The Cultivation Revolution',
    correct: "choiceC"
},
{
    question: 'What did Jetro Tull invent?',
    A: 'The steam engine',
    B: 'The seed drill',
    C: 'The spinning jenny',
    D: 'A rock band',
    correct: "choiceB"
},
{
    question: 'The Sentinelese, a famous uncontacted tribe, can be found where?',
    A: 'The Andaman Islands',
    B: 'Senegal',
    C: 'The Amazon Rainforest',
    D: 'Papa New Guinea',
    correct: "choiceA"
},
{
    question: 'How many bones in the human body?',
    A: '206',
    B: '106',
    C: '706',
    D: '1,006',
    correct: "choiceA"
},
{
    question: 'Which of these events occurred first?',
    A: 'The French Revolution',
    B: 'The Industrial Revolution',
    C: 'The American Revolution',
    D: 'The Enlightenment',
    correct : "choiceD"
}
];

const currentQuestion = document.getElementById("question-text");
const currentOptionA = document.getElementById("choiceA");
const currentOptionB = document.getElementById("choiceB");
const currentOptionC = document.getElementById("choiceC");
const currentOptionD = document.getElementById("choiceD");
const score = document.getElementById("score-container");
const buttons = document.getElementsByTagName("button")
const scoreTotal = "/10";

// Sets the score and updates after each question
let scoreCorrect = 0;

score.textContent =  scoreCorrect + scoreTotal


// The number of questions the player starts with.
let questionsRemaining = 0;



// All the questions index numbers that have been  used will be put into this array. 
let usedQuestions = [];
let currentIndex



function startGame(){

    questionsRemaining = 10
    
    usedQuestions = []
    getNewQuestion()
}

function getNewQuestion(){
    currentIndex = Math.floor(Math.random() * questions.length)
    
    if (usedQuestions.includes(currentIndex)){
        getNewQuestion()
    }else{
    usedQuestions.push(currentIndex)
    questionsRemaining--
    
    currentQuestion.textContent = questions[currentIndex].question;
    currentOptionA.textContent = questions[currentIndex].A;
    currentOptionB.textContent = questions[currentIndex].B;
    currentOptionC.textContent = questions[currentIndex].C;
    currentOptionD.textContent = questions[currentIndex].D;

}







}






function checkAnswer(clickedAnswer){
    
    if (clickedAnswer.id == questions[currentIndex].correct){
        console.log('Correct')
         
         clickedAnswer.style.backgroundColor = "rgb(106, 194, 105)"
         clickedAnswer.style.color = "rgb(0,0,0)"
        scoreCorrect++
       getNewQuestion()
        
    }else{
        
        clickedAnswer.style.backgroundColor = "rgb(210, 4, 45)"
        clickedAnswer.style.color = "rgb(0,0,0)"
       
        console.log("Incorrect")
       getNewQuestion()
    }
}









startGame()
/*
// Function to show the current question. The parameter "x" will be an index number of the questions array.
function displayQuestion(x){
    currentQuestion.textContent = questions[x].question;
}

// Function to show the current question options. The parameter "x" will be an index number of the questions array.
function displayOptions(x){
    currentOptionA.textContent = questions[x].A;
    currentOptionB.textContent = questions[x].B;
    currentOptionC.textContent = questions[x].C;
    currentOptionD.textContent = questions[x].D;
}


function playGame(){


//Checks if the question has already been used and, if not, it: shows the questions and its four options, 
//adds the index number to the usedQuestions array and decreases the questionsRemaining by one. 
    if (usedQuestions.includes(currentIndex)){
        playGame()
     }else{
        displayQuestion(currentIndex)
        displayOptions(currentIndex)
        usedQuestions.push(currentIndex)
        questionsRemaining --
     }


}






function checkAnswer(clickedAnswer){
    if (clickedAnswer.id == questions[currentIndex].correct){
        console.log('Correct')
         //nextQuestiion()
         clickedAnswer.style.backgroundColor = "rgb(106, 194, 105)"
         clickedAnswer.style.color = "rgb(0,0,0)"
        scoreCorrect +1
       
        
    }else{
        // nextQuestiion()
        clickedAnswer.style.backgroundColor = "rgb(210, 4, 45)"
        clickedAnswer.style.color = "rgb(0,0,0)"
       
        console.log("Incorrect")
       
    }
}
/*

// next question 
function nextQuestiion(){
    if (questionsRemaining > 0){
    currentIndex = Math.floor(Math.random() * questions.length)
    playGame()
}
}
*/
//playGame()

//nextQuestiion()



/*
while ( questionsRemaining > 0){
    playGame()
}
*/
















/*
let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let usedQuestions = [];
let questionCounter = 0;

const maxQuestions = 10;







function startGame(){
    questionCounter = 0;
    score = 0;
    usedQuestions = [];
    getNewQuestion()
}

function getNewQuestion(){
    
    const questionIndex = Math.floor(Math.random() * questions.length)

    if (usedQuestions.includes(questionIndex)){
        getNewQuestion()
    }else{
    usedQuestions.push(questionIndex)
    questionCounter++
    
    question.textContent = questions[questionIndex].question;
    currentOptionA.textContent = questions[questionIndex].A;
    currentOptionB.textContent = questions[questionIndex].B;
    currentOptionC.textContent = questions[questionIndex].C;
    currentOptionD.textContent = questions[questionIndex].D;
    }

    
    
    
    buttons.addEventListener("click", function() {
        this.style.backgroundColor = "red";
        console.log("works")
      });





    }

    
buttons.forEach

    


    startGame()


    

*/

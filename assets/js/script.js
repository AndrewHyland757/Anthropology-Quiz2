// array of questions to be used in the quiz
const questions = [{
    question: 'The earliest humans first appear in what epoch?',
    A: 'Oligocene',
    B: 'Paleocene',
    C: 'Miocene',
    D: 'Pliocene',
    correct: 'Miocene'
},
{
    question: 'In most small-scale, non-industrial societies, social organization is based largely on.....?',
    A: 'Occupation',
    B: 'Education',
    C: 'Social class',
    D: 'Kinship affiliation',
    correct: 'Kinship affiliation'
},
{
    question: "What is a ritual held at a certain point in a person's life to mark the end of one stage and the beginning of another called?",
    A: 'Quartering',
    B: 'Ceremony',
    C: 'Rite of passage',
    D: 'Sanction',
    correct: 'Rite of passage'
},
{
    question: 'What is learned, and shared behaviors and beliefs?',
    A: 'Culture',
    B: 'Food',
    C: 'Language',
    D: 'Enthnicity',
    correct: 'Culture'
},
{
    question: 'What is the term for the process of creating a new culture by combining elements from different cultures?',
    A: 'Cultural fusion',
    B: 'Globalization',
    C: 'Cultural appropriation',
    D: 'Cultural-hybridization',
    correct: 'Cultural-hybridization'
},
{
    question: 'What animals did Jane Goodall study?',
    A: 'Gorillas',
    B: 'Chimpanzees',
    C: 'Orangutans',
    D: 'Baboons',
    correct: 'Chimpanzees'
},
{
    question: 'How many languages are currently spoken in the world?',
    A: 'Over 10,000',
    B: 'Around 1,000',
    C: 'Around 7,000',
    D: 'Around 3,000',
    correct: 'Around 7,000'
},
{
    question: 'What is the revolution from hunting and gathering to food production called?',
    A: 'The Pastoral Revolution',
    B: 'The Organic Revolution',
    C: 'The Neolithic Revolution',
    D: 'The Cultivation Revolution',
    correct: 'The Neolithic Revolution'
},
{
    question: 'What did Jetro Tull invent?',
    A: 'The steam engine',
    B: 'The seed drill',
    C: 'The spinning jenny',
    D: 'A rock band',
    correct: 'The seed drill'
},
{
    question: 'The Sentinelese, a famous uncontacted tribe, can be found where?',
    A: 'The Andaman Islands',
    B: 'Senegal',
    C: 'The Amazon Rainforest',
    D: 'Papa New Guinea',
    correct: 'The Andaman Islands'
},
{
    question: 'How many bones in the human body?',
    A: '206',
    B: '106',
    C: '706',
    D: '1,006',
    correct: '206'
},
{
    question: 'Which of these events occurred first?',
    A: 'The French Revolution',
    B: 'The Industrial Revolution',
    C: 'The American Revolution',
    D: 'The Enlightenment',
    correct : 'The Enlightenment'
}
];


let currentQuestion = document.getElementById("question-text");
let currentOptionA = document.getElementById("choiceA");
let currentOptionB = document.getElementById("choiceB");
let currentOptionC = document.getElementById("choiceC");
let currentOptionD = document.getElementById("choiceD");






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

// A function to return the current answer
function currentAnswer(x) {
    return questions[x].correct;
}

// All the questions index numbers that have been  used will be put into this array. 
let usedQuestions = [];

// This is the number of questions the player starts with.
let questionsRemaining = 10;

/*
// A function to return the current answer
function generateAnswer(x) {
    return questions[x].correct;


function checkAnswer(){
    if (playerChoice == currentAnswer(x)){
}
*/

function answerButtonColorChange(x){
    if (playerChoice == questions[x].correct){
        buttons.style.backgroundColor = "rgb(106, 194, 105)"
    }else{
        buttons.style.backgroundColor = "rgb(210, 4, 45)"
        
    }
}

let score = document.getElementById("progress");
let scoreCorrect = 0;
let scoreTotal = "/10"
score.textContent = scoreCorrect + scoreTotal



let buttons = getElementsByClassName("choice")
buttons.addEventListener("click", answerButtonColorChange)

function playGame(){

    // Generates a randon number based on the amount of questions in the questions array
     let y = Math.floor(Math.random() * questions.length)

    /* Checks if the question has already been used and, if not, it: shows the questions and its four options, 
    adds the index number to the usedQuestions array and decreases the questionsRemaining by one. */
     if (usedQuestions.includes(y)){
        playGame()
     }else{
        displayQuestion(y)
        displayOptions(y)
        usedQuestions.push(y)
        questionsRemaining--
     }
     if (playerChoice == questions[y].correct){

     }
     answerButtonColorChange(y)
     
        
     }





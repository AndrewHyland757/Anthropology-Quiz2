

// Array of questions to be used in the quiz
const questions = [
{
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
    correct: 'choiceC'
},

{
    question: 'What do we call the study of non-human primates?',
    A: 'Zoology',
    B: 'Primatology',
    C: 'Entomology',
    D: 'Anthropology',
    correct: 'choiceB'
},
{
    question: "What is the term used to describe the process of learning one's culture as a child?",
    A: 'Enculturation',
    B: 'Acculturation',
    C: 'Assimilation',
    D: 'Adaptation',
    correct: 'choiceA'
},
{
    question: 'A a society without a centralized government is caleed a(n)....?',
    A: 'Anarchy',
    B: 'Democracy',
    C: 'Monarchy',
    D: 'Republic',
    correct: 'choiceA'
},
{
    question: 'What is the term used to describe a society where descent is traced through the female line?',
    A: 'Unilineal',
    B: 'Patrilineal',
    C: 'Bilateral',
    D: 'Matrilineal',
    correct: 'choiceD'
},
{
    question: 'What is the term used to describe a type of economic system where goods and services are traded without the use of money?',
    A: 'Capitalism',
    B: 'Communism',
    C: 'Market economy',
    D: 'Barter economy',
    correct: 'choiceD'
},
{
    question: 'Which of the following is NOT considered a factor that influences cultural change?',
    A: 'Technology',
    B: 'Globalization',
    C: 'Climate',
    D: 'Religion',
    correct: 'choiceC'
},
{
    question: 'What is the term used to describe a system of social stratification where status is determined by birth?',
    A: 'Meritocracy',
    B: 'Caste system',
    C: 'Feudalism',
    D: 'Democracy',
    correct: 'choiceB'
},
{
    question: 'Which of the following is NOT considered a type of marriage?',
    A: 'Monogamy',
    B: 'Polygamy',
    C: 'Endogamy',
    D: 'Heterogamy',
    correct: 'choiceD'
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
},
{
    question: 'What do we call the study of ancient human remains?',
    A: 'Paleontology',
    B: 'Anthropology',
    C: 'Archaeology',
    D: 'Forensics',
    correct: 'choiceC'
},
{
    question: 'What is the nickname for the earliest stone tools made by our ancestors?',
    A: 'Pebble gadgets',
    B: 'Rock-a-doodle-dos',
    C: 'Flintstones',
    D: 'Oldowan tools',
    correct: 'choiceD'
},

{
    question: 'What do we call the study of language and its structure?',
    A: 'Linguistics',
    B: 'Polyglotology',
    C: 'Lexiconomy',
    D: 'Verbalism',
    correct: 'choiceA'
},
{
    question: 'A belief system that worships nature and natural phenomena is called....?',
    A: 'Animism',
    B: 'Zoolatry',
    C: 'Botanology',
    D: 'Elementalism',
    correct: 'choiceA'
},
{
    question: 'When different groups come into firsthand contact, the exchange of cultural is called...? ',
    A: 'Multiculturalism',
    B: 'Cultural diffusion',
    C: 'Melting pot',
    D: 'Cultural exchange',
    correct: 'choiceB'
},
{
    question: 'Who proposed the theory of natural selection as a mechanism for evolution?',
    A: 'Sigmund Freud',
    B: 'Marie Curie',
    C: 'Charles Darwin',
    D: 'Isaac Newton',
    correct: 'choiceC'
},
{
    question: 'What is the name for a cultural feature that is passed from one generation to another?',
    A: 'Genotype',
    B: 'Artefact',
    C: 'Meme',
    D: 'Allele',
    correct: 'choiceC'
},
{
    question: 'Which of the following is NOT a primate?',
    A: 'Mandrill',
    B: 'Lemur',
    C: 'Ape',
    D: 'Iguana',
    correct: 'choiceD'
},
{
    question: 'What do we call the process of exchanging gifts between groups?',
    A: 'Bartering',
    B: 'Reciprocity',
    C: 'Trade',
    D: 'Bargaining',
    correct: 'choiceB'
},   
{
    question: 'Which of the following is NOT a famous archaeological site?',
    A: 'Machu Picchu',
    B: 'Newgrange',
    C: 'Great Wall of China',
    D: 'Pompeii',
    correct: 'choiceC'
},
{
    question: "What is the term for the practice of marrying within one's own local social or cultural group?",
    A: 'Exogamy',
    B: 'Polygamy',
    C: 'Homogamy',
    D: 'Endogamy',
    correct: 'choiceD'
},
{
    question: 'Who is famous for discovering the tomb of Tutankhamun in Egypt?',
    A: 'Mary Leakey',
    B: 'Michael Davitt',
    C: 'Howard Carter',
    D: 'Zahi Hawass',
    correct: 'choiceC'
},
{
    question: 'What is the ancient Irish alphabet called?',
    A: 'Cherokee',
    B: 'Hieroglyphs',
    C: 'Ogham',
    D: "N'Ko",
    correct: 'choiceC'
},
{
    question: 'The Americas before European colonization is refered to as ...',
    A: 'The Aztec era',
    B: 'The Pre-Columbian era',
    C: 'The Indian era',
    D: 'The Pre-America era',
    correct: 'choiceB'
}
];

const start = document.getElementById("start");
const quiz = document.getElementById("quiz-container");
const currentQuestion = document.getElementById("question-text");
const currentOptionA = document.getElementById("choiceA");
const currentOptionB = document.getElementById("choiceB");
const currentOptionC = document.getElementById("choiceC");
const currentOptionD = document.getElementById("choiceD");
//let score = document.getElementById("score-container");
const progress = document.getElementById("progress");
const buttons = document.getElementsByTagName("button")
const scoreTotal = "/10";
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("scoreContainer");

let scoreMessage = ""
let count = 0;
const questionTime = 20; // 20s
const gaugeWidth = 300; // 300px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;


let scoreCorrect = 0;
/*

// Sets the score and updates after each question

let correctScore = 0
score.textContent =  correctScore + scoreTotal

*/


// The number of questions the player starts with.
let questionsRemaining = 0;

//buttons//.style.backgroundColor ="rgb(106, 194, 105)"

// All the questions index numbers that have been  used will be put into this array. 
let usedQuestions = [];
let currentIndex

// Functiion to change the selected button back to a white background after being clicked
function resetButtonColor(){
    currentOptionA.style.backgroundColor = "rgb(255,255,255)"
    currentOptionB.style.backgroundColor = "rgb(255,255,255)"
    currentOptionC.style.backgroundColor = "rgb(255,255,255)"
    currentOptionD.style.backgroundColor = "rgb(255,255,255)"
}



function showCounter() {                                // count less that 20s
    if (count <= questionTime) {
        timeGauge.style.width = count * gaugeUnit + "px"; // increment  bar
        count++                                            // increment count
    } 
    if (count > questionTime){
        questionsRemaining--
        if (questionsRemaining = 0){
        getNewQuestion()
        }else{
         scoreRender()
       }
    }
}


/*
function showProgress() {
    for (let qIndex = 0; qIndex <= 10; qIndex++) {
        progress.innerHTML += "<div class='prog'></div>";
    }
}
*/

// Function to change the button color
 function buttonAnswerColor(button, backgroundColor, fontColor){
    button.style.backgroundColor =  backgroundColor                  
    button.style.color = fontColor                            
 }


function startGame(){
    questionsRemaining = 10
    usedQuestions = []
    scoreCorrect = 0
    //showProgress()
    start.classList.add("hide");
    quiz.classList.remove("hide");
    getNewQuestion()
}

function getNewQuestion(){
    //timeGauge.style.width
    resetButtonColor()
    clearInterval(TIMER)
        count = 0
    currentIndex = Math.floor(Math.random() * questions.length)
    
    if (usedQuestions.includes(currentIndex)){
        getNewQuestion()
    }else{
        
        TIMER = setInterval(showCounter, 1000);
   
        
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
        scoreCorrect ++ 
        //score.textContent =  correctScore + scoreTotal
        buttonAnswerColor(clickedAnswer, "rgb(106, 194, 105)",  "rgb(0,0,0)")
        //clearInterval(TIMER)
        //count = 0
        if (questionsRemaining > 0){
        setTimeout(getNewQuestion, 750)
        }else{
            scoreRender()
        }

    }else{
       buttonAnswerColor(clickedAnswer,"rgb(210, 4, 45)", "rgb(0,0,0)" )
       
        //clearInterval(TIMER)
        //count = 0
        console.log("Incorrect")
        if (questionsRemaining > 0){
            setTimeout(getNewQuestion, 750)
            }else{
                scoreRender()
            }
        }
}


function scoreRender(){
    quiz.classList.add("hide");
    scoreDiv.style.display = "block";
    // calculate the amount of question percent answered by the user
    const scorePerCent =  scoreCorrect * 10


    
                if (scorePerCent >= 80){
                    scoreMessage = "Excelent!"
                }else if (scorePerCent >= 60){
                    scoreMessage = "Nice try!"
                }else if (scorePerCent >= 40){
                    scoreMessage =  "Oh well!"
                }else {
                    scoreMessage = "Better luck next time!"
                }

                

                
                
    scoreDiv.innerHTML += "<p>Your score is "+ scorePerCent +"%.<br>" + scoreMessage +"</p>";
}





start.addEventListener("click", startGame);

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

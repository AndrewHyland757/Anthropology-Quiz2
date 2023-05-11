// array of questions to be used in the quiz
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
const progress = document.getElementById("progress");
const buttons = document.getElementsByTagName("button")
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("scoreContainer");

let scoreMessage = "";
let count = 0;
let scoreCorrect = 0;


// The number of questions the player starts with.
let questionsRemaining = 0;

// all the questions index numbers that have been used will be put into this array. 
let usedQuestions = [];

// function to change the button color
function buttonAnswerColor(button, backgroundColor, fontColor){
    button.style.backgroundColor =  backgroundColor;             
    button.style.color = fontColor;                           
 }
// function to change the selected button back to a white background after being clicked
function resetButtonColor(){
    currentOptionA.style.backgroundColor = "rgb(255,255,255)";
    currentOptionB.style.backgroundColor = "rgb(255,255,255)";
    currentOptionC.style.backgroundColor = "rgb(255,255,255)";
    currentOptionD.style.backgroundColor = "rgb(255,255,255)";
}

// set question time and display the time guage
const questionTime = 30; 
const gaugeWidth = 300; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;

function showCounter() {   
    // if the counter is less than the question time (30 seconds)                            
    if (count <= questionTime){
        // increase time guage by one unit
        timeGauge.style.width = count * gaugeUnit + "px"; 
        // increment the counter by 1
        count++  
    // if time runs out                                          
    } else{
        // decrease the questions remainng
        questionsRemaining--;
        // checks if there are questions left
        if (questionsRemaining = 0){
            // if not, show the score
            scoreRender();
        }else{
            // if so, show new question
            getNewQuestion();
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
// function to start hte game and display the first queation
function startGame(){
    // removes the start button
    start.classList.add("hide");
    // reveals the question and answer elements
    quiz.classList.remove("hide");
    // sets the amount of questions in the quiz
    questionsRemaining = 10;
    // array of used index numbers
    usedQuestions = [];
    // sets the score
    scoreCorrect = 0;
    // calls the new question
    getNewQuestion();
}

// function to generate a new question
function getNewQuestion(){
    // button color is reset
    resetButtonColor();
    // time guage is reset
    clearInterval(TIMER);
    // generate a random number to apply to the questions array
    currentIndex = Math.floor(Math.random() * questions.length);
    // checks the number has not been used before
    if (usedQuestions.includes(currentIndex)){
        // if so, goes back to generate a new question
        getNewQuestion();
    // if the number has not been used
    }else{
    // sets the time guage
    TIMER = setInterval(showCounter, 1000);
    // adds the current  question index  to the usedQuestions array
    usedQuestions.push(currentIndex);
    // decreases the remaining questions by one
    questionsRemaining--;
    // displays the current question and answer options using the randomally generated index
    currentQuestion.textContent = questions[currentIndex].question;
    currentOptionA.textContent = questions[currentIndex].A;
    currentOptionB.textContent = questions[currentIndex].B;
    currentOptionC.textContent = questions[currentIndex].C;
    currentOptionD.textContent = questions[currentIndex].D;
    }
}

// function to check if answer is correct or not
function checkAnswer(clickedAnswer){
    // if  answer is correct
    if (clickedAnswer.id == questions[currentIndex].correct){
        // increase score by 1
        scoreCorrect ++ ;
        // button changes to green
        buttonAnswerColor(clickedAnswer, "rgb(106, 194, 105)",  "rgb(0,0,0)");
        // reset count
        count = 0;
        // checks if there are remaining questions left 
        if (questionsRemaining > 0){
        // get new questiono after 1 second wait
        setTimeout(getNewQuestion, 1000);
        // if not displays score   
        }else{
        scoreRender();
        }
    // if answer is not correct
    }else{
        // button changes to red
        buttonAnswerColor(clickedAnswer,"rgb(210, 4, 45)", "rgb(0,0,0)" );
        // reset count
        count = 0;
        // checks if there are remaining questions left and if so, generates new question
        if (questionsRemaining > 0){
            // get new question after 1 second wait
            setTimeout(getNewQuestion, 1000);
            }else{
            // if not displays score
            scoreRender();
        }
     }
}

// function to show the score at the end of the game 
function scoreRender(){
    // removes the questions and answer displays
    quiz.classList.add("hide");
    /// shows the score div
    scoreDiv.style.display = "block";
    // calculates the score of the user in percent 
    let scorePerCent =  scoreCorrect * 10;
    // displays a message based on the player score 
    if (scorePerCent >= 80){
        scoreMessage = "Excelent!";
    }else if (scorePerCent >= 60){
        scoreMessage = "Nice try!";
    }else if (scorePerCent >= 40){
        scoreMessage =  "Not bad!";
    }else {
        scoreMessage = "Better luck next time!";
    }
    // loads the player score and message to the dom
    scoreDiv.innerHTML += "<p>Your score is "+ scorePerCent +"%.<br>" + scoreMessage +"</p>";
}

// start game button event listener
start.addEventListener("click", startGame);


// questions array
const questions = [{
    question: 'The earliest humans first appear in what epoch?',
    A: 'Oligocene',
    B: 'Paleocene',
    C: 'Miocene',
    D: 'Pliocene',
    correct: 'C'
},
{
    question: 'In most small-scale, non-industrial societies, social organization is based largely on.....?',
    A: 'Occupation',
    B: 'Education',
    C: 'Social class',
    D: 'Kinship affiliation',
    correct: 'D'
},
{
    question: "What is a ritual held at a certain point in a person's life to mark the end of one stage and the beginning of another called?",
    A: 'Quartering',
    B: 'Ceremony',
    C: 'Rite of passage',
    D: 'Sanction',
    correct: 'C'
},
{
    question: 'What is learned, and shared behaviors and beliefs?',
    A: 'Culture',
    B: 'Food',
    C: 'Language',
    D: 'Enthnicity',
    correct: 'A'
},
{
    question: 'What is the term for the process of creating a new culture by combining elements from different cultures?',
    A: 'Cultural fusion',
    B: 'Globalization',
    C: 'Cultural appropriation',
    D: 'Cultural-hybridization',
    correct: 'D'
},
{
    question: 'What animals did Jane Goodall study?',
    A: 'Gorillas',
    B: 'Chimpanzees',
    C: 'Orangutans',
    D: 'Baboons',
    correct: 'B'
},
{
    question: 'How many languages are currently spoken in the world?',
    A: 'Over 10,000',
    B: 'Around 1,000',
    C: 'Around 7,000 ',
    D: 'Around 3,000',
    correct: 'C'
},
{
    question: 'What is the revolution from hunting and gathering to food production called?',
    A: 'The Pastoral Revolution',
    B: 'The Organic Revolution',
    C: 'The Neolithic Revolution',
    D: 'The Cultivation Revolution',
    correct: 'C'
},
{
    question: 'What did Jetro Tull invent?',
    A: 'The steam engine',
    B: 'The seed drill',
    C: 'The spinning jenny',
    D: 'A rock band',
    correct: 'B'
},
{
    question: 'The Sentinelese, a famous uncontacted tribe, can be found where?',
    A: 'The Andaman Islands',
    B: 'Senegal',
    C: 'The Amazon Rainforest',
    D: 'Papa New Guinea',
    correct: 'A'
},
{
    question: 'How many bones in the human body?',
    A: '206',
    B: '106',
    C: '706',
    D: '1,006',
    correct: 'A'
},
{
    question: 'Which of these events occurred first?',
    A: 'The French Revolution',
    B: 'The Industrial Revolution',
    C: 'The American Revolution',
    D: 'The Enlightenment',
    correct : 'D'
}
];


let currentQuestion = document.getElementById("question-text");
let currentOptionA = document.getElementById("choiceA");
let currentOptionB = document.getElementById("choiceB");
let currentOptionC = document.getElementById("choiceC");
let currentOptionD = document.getElementById("choiceD");


function displayQuestion(x){
    current questions[x].question;
}

function displayOptions(x){
    currentOptionA.textContent = questions[x].A;
    currentOptionB.textContent = questions[x].B;
    currentOptionC.textContent = questions[x].C;
    currentOptionD.textContent = questions[x].D;
}


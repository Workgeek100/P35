var form, voter, survey;
var count = 0;
var question_1, question_2, question_3;
var email;
var question1, question2, question3;
var database;
var form_input, submit, title, greeting;
var question_1_value, question_2_value, question_3_value
var voterEmailList = [];
var vote1 = [];
var vote2 = [];
var vote3 = [];



function setup(){
//create the canvas
createCanvas(displayWidth-100, displayHeight-100);
//link to the database
database = firebase.database();
//create the greeting
greeting = createElement('h1');
greeting.html("Welcome to the school survey");
greeting.position(displayWidth/3,displayHeight/50);
//create the title
title = createElement('h2');
title.html("Free Food for the Poor in School");
title.position(displayWidth/3+30,displayHeight/20+50);
//create the first question
question1 = createElement('h3');
question1.html("1. Should we give free meals including breakfast, tea and lunch to the poor in our school?");
question1.position(displayWidth/6, displayHeight/7+100);
//create the options for the first question
question_1 = createRadio();
question_1.option("YES");
question_1.option("NO");
question_1_value = question_1.value();
question_1.position(displayWidth/6, displayHeight/4+60);
//create the second question
question2 = createElement('h3');
question2.html("2. Will you be willing to give a small amount as donations for the meals every month?");
question2.position(displayWidth/6,displayHeight/3+50);
//create the options for the second question
question_2 = createRadio();
question_2.option("YES, OF COURSE");
question_2.option("NO, NOT AT ALL");
question_2.option("MAYBE");
question_2_value = question_2.value();
question_2.position(displayWidth/6, displayHeight/3+100);
//create the third question
question3 = createElement('h3');
question3.html("3. How much will you be willing to give as a donation every month?");
question3.position(displayWidth/6, displayHeight/3+150);
//create the options for the third question
question_3 = createRadio();
question_3.option("Rs. 100");
question_3.option("Rs. 500");
question_3.option("Rs. 1000");
question_3.option("MORE THAN Rs. 1000");
question_3.option("LESS THAN Rs. 100");
question_3.option("I WOULD NOT LIKE TO GIVE ANY DONATION");
question_3_value = question_3.value();
question_3.position(displayWidth/6, displayHeight/3+200);
//create the email input
email = createElement('h2');
email.html("Your E-mail ID");
email.position(displayWidth/3, displayHeight-250)
email_input = createInput();
email_input.position(displayWidth/3+180, displayHeight-225);
//create the submit button
submit = createButton("Submit Your Response");
submit.html("SUBMIT");
submit.position(displayWidth/3+120, displayHeight-150);

}

function draw(){
    background(100,200,100);
    drawSprites();

    submit.mousePressed(()=>{

    vote1.push(question_1.value())
    vote2.push(question_2.value())
    vote3.push(question_3.value())
    

    voterEmailList.push(email_input.value())

    question_1_vote();
    question_2_vote();
    question_3_vote();
   
  
count = count+1

    updateVoterCount()
    updateInputEmail()

    })


}

function question_1_vote(){
database.ref('/').update({
    vote1 : vote1
})
}

function question_2_vote(){
database.ref('/').update({
vote2 : vote2
})
}

function question_3_vote(){
database.ref('/').update({
vote3 : vote3
})
}  



function updateInputEmail() {
database.ref('/').update({
voterEmail :voterEmailList
})
} 

 function updateVoterCount(){
 database.ref('/').update({
 voterCount : count
})
}

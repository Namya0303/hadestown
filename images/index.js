    //QUIZ JAVASCRIPT FILE

    // Questions

    var qone = {
        question: "Which two characters is the story based on?",
        optionone: "Zues and Orpheus",
        optiontwo: "Orpheus and Eurydice",
        optionthree: "Apollo and Calliope",

    };

    var qtwo = {
        question: "Which Mythology are we based on?",
        optionone: "Norse",
        optiontwo: "Greek",
        optionthree: "Eyptian",
    };

    var qthree = {
        question: "When did we premiere?",
        optionone: "2016",
        optiontwo: "2012",
        optionthree: "2014",
    }

    var qfour = {
        question: "Hades is the name of both the Greek god of the underworld and the realm where he reigns. Which of the following statements about Hades is true?",
        optionone: "He is the brother of Zeus",
        optiontwo: "He is the only Greek god not to live on Mt. Olympus",
        optionthree: "Both A and B",
    }

    var qfive = {
        question: "In mythology, how does Eurydice come to find herself in Hades?",
        optionone: "She falls in love with Hades and agrees to become his bride",
        optiontwo: "Her soul travels there when she is killed by a snakebite",
        optionthree: "She and Orpheus travel there together",
    }


// Get Question Functions -->

var questions = {
    question1: function queone(){
        document.getElementById('op1').innerHTML = qone.optionone;
        document.getElementById('op2').innerHTML = qone.optiontwo;
        document.getElementById('op3').innerHTML = qone.optionthree;
        document.getElementById('q').innerHTML = qone.question;
    },
    
    questiontwo: function quetwo() {
        document.getElementById('op1').innerHTML = qtwo.optionone;
        document.getElementById('op2').innerHTML = qtwo.optiontwo;
        document.getElementById('op3').innerHTML = qtwo.optionthree;
        document.getElementById('q').innerHTML = qtwo.question;
    },
    
    questionthree: function quethr () {
        document.getElementById('op1').innerHTML = qthree.optionthree;
        document.getElementById('op2').innerHTML = qthree.optiontwo;
        document.getElementById('op3').innerHTML = qthree.optionone;
        document.getElementById('q').innerHTML = qthree.question;
    },
    
    questionfour: function quefou (){
        document.getElementById('op1').innerHTML = qfour.optionone;
        document.getElementById('op2').innerHTML = qfour.optiontwo;
        document.getElementById('op3').innerHTML = qfour.optionthree;
        document.getElementById('q').innerHTML = qfour.question;
    },
    
    questionfive: function quefiv (){
        document.getElementById('op1').innerHTML = qfive.optionone;
        document.getElementById('op2').innerHTML = qfive.optiontwo;
        document.getElementById('op3').innerHTML = qfive.optionthree;
        document.getElementById('q').innerHTML = qfive.question;
    }
}

// Feeding the questions to index.html
    questions.question1();
    $("#submit").attr("onclick", "B()");
    $("#next").attr("onclick", "Next(), reset()")

   
// NEXT WALE FUNCTIONS


    // Question 1 to 2

    function Next() {
        questions.questiontwo();
        $("#submit").attr("onclick", "B()");
        $("#next").attr("onclick", "Nextt(), reset()");
        $("#previous").attr("onclick", "previous(), reset()");
    }


    // question 2 to 3

    function Nextt() {
        questions.questionthree();
        $("#submit").attr("onclick", "C()");
        $("#previous").attr("onclick", "previouss(), reset()");
        $("#next").attr("onclick", "Nexttt(), reset()");
    }

    // question 3 to 4

    function Nexttt() {
        questions.questionfour();
        $("#submit").attr("onclick", "A()");
        $("#next").attr("onclick", "Nextttt(), reset()");
        $("#previous").attr("onclick", "previousss(), reset()");
    }
    // question 4 to 5

    function Nexttt() {
        questions.questionfive();
        $("#submit").attr("onclick", "B()");
        $("#previous").attr("onclick", "previoussss(), reset()");
    }

    

// PREVIOUS WALE FUNCTIONS

    // question 5 to 4

    function previoussss(){
        questions.questionfour();
        $("#submit").attr("onclick", "C()");
        $("#previous").attr("onclick", "previousss(), reset()");
        $("#next").attr("onclick", "Nextttt(), reset()");
    }

    // question 4 to 3

    function previousss(){
        questions.questionthree();
        $("#submit").attr("onclick", "C()");
        $("#previous").attr("onclick", "previouss(), reset()");
        $("#next").attr("onclick", "Nexttt(), reset()");
    }

    // question 3 to 2

    function previouss(){
        questions.questiontwo();
        $("#submit").attr("onclick", "B()");
        $("#previous").attr("onclick", "previous(), reset()");
        $("#next").attr("onclick", "Nextt(), reset()");
    }

    // question 2 to 1

    function previous(){
        questions.question1();
        $("#submit").attr("onclick", "B()");
        $("#next").attr("onclick", "Next(), reset()");
    }


// Answer Functions  ---> 

    function A() {
        $(".one").addClass("Answer");
        document.getElementById("Option1").checked = true;
        setTimeout(2000);
    }

    function B() {

        $(".two").addClass("Answer");
        document.getElementById("Option2").checked = true;
    }

    function C() {

        $(".three").addClass("Answer");
        document.getElementById("Option3").checked = true;
    }

// Reset Function

    function reset() {
        $(".yeet").removeClass("Answer");
        document.getElementsByClassName("Optio").checked = true;
    }

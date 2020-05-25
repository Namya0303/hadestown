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

    
// Feeding the questions to index.html
    
document.getElementById('op1').innerHTML = qone.optionone;
document.getElementById('op2').innerHTML = qone.optiontwo;
document.getElementById('op3').innerHTML = qone.optionthree;
document.getElementById('q').innerHTML = qone.question;

// Answer wali animation for he first two question
    function myFunction(){
        $(".two").addClass("Answer");
        document.getElementById("Option2").checked = true;
       setTimeout(2000);
    } 

// Question 1 to 2 wala switch

    function Next(){
        
        document.getElementById('op1').innerHTML = qtwo.optionone;
        document.getElementById('op2').innerHTML = qtwo.optiontwo;
        document.getElementById('op3').innerHTML = qtwo.optionthree;
        document.getElementById('q').innerHTML = qtwo.question;
        $(".two").removeClass("Answer")
        $("#next").attr("onclick","Nextt()")
        $("#previous").attr("onclick","previous()")
    }


// question 2 to 3

    function Nextt(){
        document.getElementById('op1').innerHTML = qthree.optionone;
        document.getElementById('op2').innerHTML = qthree.optiontwo;
        document.getElementById('op3').innerHTML = qthree.optionthree;
        document.getElementById('q').innerHTML = qthree.question;
        $("#submit").attr("onclick","check()")
        $(".two").removeClass("Answer")
        $("#previous").attr("onclick","previouss()")
    }

// Answer wali animation for question 3

// NICE.
    function check(){
        $(".one").addClass("Answer");
        document.getElementById("Option1").checked = true;
       setTimeout(2000);
    }

// Question 2 to 1

    function previous() {
        document.getElementById('op1').innerHTML = qone.optionone;
        document.getElementById('op2').innerHTML = qone.optiontwo;
        document.getElementById('op3').innerHTML = qone.optionthree;
        document.getElementById('q').innerHTML = qone.question;
        $(".two").removeClass("Answer")
        $("#next").attr("onclick","Next()")
    }

// Question 3 to 2
    function previouss(){
        document.getElementById('op1').innerHTML = qtwo.optionone;
        document.getElementById('op2').innerHTML = qtwo.optiontwo;
        document.getElementById('op3').innerHTML = qtwo.optionthree;
        document.getElementById('q').innerHTML = qtwo.question;
        $("#next").attr("onclick","Nextt()")
        $("#submit").attr("onclick","myFunction()")
        $(".one").removeClass("Answer")
        $("#previous").attr("onclick","previous()")
    }
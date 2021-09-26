// Quiz_js.js
const quiz = [{
    
        Question: "1) 'HTML' Full Form ?",
        a: "Hypertext Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "None of these",
        correct_ans: 'a'
    },
    {
        Question: "2) 'CSS' Full Form",
        a: "Creative Style Shots",
        b: "Creative Style Sheets",
        c: "Cascading Style Shots",
        d: "Cascading Style Sheet",
        correct_ans: 'd'
    },
    {
        Question: "3) Select the option to make a list that lists the items with bullets?",
        a: "None",
        b: "UI",
        c: "OI",
        d: "list",
        correct_ans: 'b'
    }
];

//lable
const qus = document.getElementById("qus");
const opt_a = document.getElementById("a1");
const opt_b = document.getElementById("b1");
const opt_c = document.getElementById("c1");
const opt_d = document.getElementById("d1");
const btn = document.getElementById("btn");
// radio
const rdo_a=document.getElementById("a");
const rdo_b=document.getElementById("b");
const rdo_c=document.getElementById("c");
const rdo_d=document.getElementById("d");
//check  radio
var answer=undefined;
var score = 0;
var ans 

var Quiz_no = 0;
myfunction();
function myfunction()
{
    // var i=1;
    const current_qus = quiz[Quiz_no];
    qus.innerText = current_qus.Question;
    opt_a.innerText = current_qus.a;
    opt_b.innerText = current_qus.b;
    opt_c.innerText = current_qus.c;
    opt_d.innerText = current_qus.d;
   document.getElementById("btn").style.backgroundColor="#6600cc"  
    // alert(Quiz_no+"my function");
    
}
var i=0;
btn.addEventListener("click", () =>
{
  
       // const ans = find_checked();
     ans = find_checked();
       
   
    if (ans == quiz[Quiz_no].correct_ans)
    {
        // alert("iam in correct ans if loop")
        score+=2;
        document.getElementById("score").innerText = score;
         document.getElementById("btn").style.backgroundColor="green";
        //  opt_a.style.backgroundColor="lightgreen";
        //  opt_a.style.opacity="80%";
        
    }
    else
    {
        document.getElementById("btn").style.backgroundColor="red";
        score-=1;
        document.getElementById("score").innerText = score;
    }
     if (Quiz_no < quiz.length-1)
    {

        Quiz_no++;
         setInterval(myfunction, 1000);
        // myfunction();
    } 
    //    else
    //      {
    //         swal("Good job!", "You completed the Quiz!", "success");
    //      }
        // alert(quiz.length)
        if(Quiz_no>quiz.length-1)
        {
             swal("Good job!", "You completed the Quiz!", "success");
        }
 
});


function find_checked()
{
    
    const answers_check = document.querySelectorAll(".opt_ans");
    // var i=1;
      let ans=undefined;
     //var  ans=undefined;
    answers_check.forEach(
        (ael)=>
        {
            
            // alert(i++)
            if(ael.checked)
            {
                ans=ael.id;
                ael.checked=false;  
                // document.getElementById("btn").style.backgroundColor="#6600cc"
                
               
            }
        }    
        );
    // alert(ans);
     return ans;  
}
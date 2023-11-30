var score;
calculateGrade(80);

function calculateGrade(score)
{
    switch(true)
    {
        case score<35:
            console.log("Grade C");
            break;
        case score>=35 && score<50:
            console.log("Grade B");
            break;
        case score>=50 && score<80:    
            console.log("Grade A");
            break;
        case score>=80:    
            console.log("Grade A+");
            break;    
    }
}
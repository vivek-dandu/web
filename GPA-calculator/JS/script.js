function calc()
{
   
    credits = [];
    grade = [];
    totCredits = 0, sum = 0;
    if(document.getElementById("c1").value.length == 0)
        alert("Please provide a valid input");
    else{
        for(i = 1; i <= 10; i++)
        {
            id = "c" + i.toString();
            ele = document.getElementById(id).value
            if(ele.length > 0)
            {
                credits[i-1] = parseFloat(ele);
                totCredits += credits[i-1];
            }
        }

        for(i = 1; i <= credits.length; i++)
        {
            id = "g" + i.toString();
            ele = document.getElementById(id).value;
            if(ele == "O")
                grade[i-1] = 10;
            else if(ele == "A+")
                grade[i-1] = 9;
            else if(ele == "A")
                grade[i-1] = 8;
            else if(ele == "B+")
                grade[i-1] = 7;
            else if(ele == "B")
                grade[i-1] = 6;
            else
                grade[i-1] = 5;
        }

        for(i = 0; i < credits.length; i++)
        {
            sum += (credits[i] * grade[i]);
        }
        console.log(grade);
        console.log(credits);
        gpa = sum / totCredits;
        document.getElementById("gpa").innerHTML = gpa;
    }
}
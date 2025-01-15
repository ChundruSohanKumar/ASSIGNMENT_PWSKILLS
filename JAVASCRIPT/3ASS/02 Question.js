    function studentGrade(marks){
        if (marks > 90){
            console.log("your are in A grade")
        }else if (marks >= 70 && marks <= 90){
            console.log("your are in B grade")
        }else if (marks >= 50 && marks < 70){
            console.log("your are in C grade")
        }else{
            console.log("your are in F grade")
        }
    }

    studentGrade(70)
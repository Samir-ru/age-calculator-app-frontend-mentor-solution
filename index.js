
function calculateAge() {
    let birth_day = document.querySelectorAll('.b_in')[0].value;
    let birthMonth = document.querySelectorAll('.b_in')[1].value;
    let birthYear = document.querySelectorAll('.b_in')[2].value;
    let birthDate = new Date(birthYear, birthMonth - 1, birth_day);
    let today = new Date();

    //calculation
    let yearsOld = today.getFullYear() - birthDate.getFullYear();
    let monthOld = today.getMonth() - birthDate.getMonth();
    let daysOld = today.getDate() - birthDate.getDate();


    //error correction
    if (monthOld < 0) {
        yearsOld--;
        monthOld += 12;
    }
    if (daysOld < 0) {
        monthOld--;
        let daysInMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        daysOld += daysInMonth;
    }
    document.getElementById('years').textContent = yearsOld;
    document.getElementById('months').textContent = monthOld;
    document.getElementById('days').textContent = daysOld;



//for year
    if (birthYear > today.getFullYear()){
        document.getElementsByClassName("err")[2].textContent = "Must be a valid year";
        for(let i = 0; i < 3; i++)
        {
            document.getElementsByClassName("age_out")[i].innerHTML = "--"
        }
        document.getElementsByClassName("b_in")[2].classList.add("error_border");
        document.getElementsByClassName("label")[2].classList.add("error");
    }
    else if (birthYear == 0){
        document.getElementsByClassName("err")[2].textContent = "This field is required"
        for(let i = 0; i < 3; i++)
        {
            document.getElementsByClassName("age_out")[i].innerHTML = "--"
        }
        document.getElementsByClassName("b_in")[2].classList.add("error_border");
        document.getElementsByClassName("label")[2].classList.add("error");
    }
    else{
        document.getElementsByClassName("b_in")[2].classList.remove("error_border");
        document.getElementsByClassName("label")[2].classList.remove("error");
        document.getElementsByClassName("err")[2].textContent = "";
    }


//for month
    if (birthMonth > 12)
    {
        document.getElementsByClassName("err")[1].textContent = "Must be a valid month";
        for(let i = 0; i < 3; i++)
        {
            document.getElementsByClassName("age_out")[i].innerHTML = "--";
        }
        document.getElementsByClassName("b_in")[1].classList.add("error_border");
        document.getElementsByClassName("label")[1].classList.add("error");
    }
    else if (birthMonth == 0)
    {
        document.getElementsByClassName("err")[1].textContent = "This field is required";
        for(let i = 0; i < 3; i++)
        {
            document.getElementsByClassName("age_out")[i].innerHTML = "--"
        }
        document.getElementsByClassName("b_in")[1].classList.add("error_border");
        document.getElementsByClassName("label")[1].classList.add("error");
    }
    else{
        document.getElementsByClassName("b_in")[1].classList.remove("error_border");
        document.getElementsByClassName("label")[1].classList.remove("error");
        document.getElementsByClassName("err")[1].textContent = "";
    }


//for day
    if (birth_day > 31)
    {
        document.getElementsByClassName("err")[0].textContent = "Must be a valid date";
        for(let i = 0; i < 3; i++)
        {
            document.getElementsByClassName("age_out")[i].innerHTML = "--";
        }
        document.getElementsByClassName("b_in")[0].classList.add("error_border");
        document.getElementsByClassName("label")[0].classList.add("error");
    }
    else if (birth_day == 0)
    {
        document.getElementsByClassName("err")[0].textContent = "This field is required"
        for(let i = 0; i < 3; i++)
        {
            document.getElementsByClassName("age_out")[i].innerHTML = "--"
        }
        document.getElementsByClassName("b_in")[0].classList.add("error_border");
        document.getElementsByClassName("label")[0].classList.add("error");
    }
    else{
        document.getElementsByClassName("b_in")[0].classList.remove("error_border");
        document.getElementsByClassName("label")[0].classList.remove("error");
        document.getElementsByClassName("err")[0].textContent = "";
    }
}


document.addEventListener("DOMContentLoaded", function(){
    const correct_btn = document.getElementById("correct-btn");
    correct_btn.addEventListener('click', function(){
        window.location.href="main.html";
    })

    const wrong_btn = document.getElementById("wrong-btn");
    wrong_btn.addEventListener('click', function(){
        document.getElementById("response").innerHTML = "Only CSE Department is Available";
    })
})

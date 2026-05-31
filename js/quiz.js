let topic = localStorage.getItem("topic");
let qList = questions[topic];

let index = 0;
let score = 0;

document.getElementById("topicTitle").innerText = topic;

show();

function show(){

    let q = qList[index];

    document.getElementById("progressText").innerText =
    "Question " + (index+1) + " / " + qList.length;

    document.getElementById("question").innerText = q.q;

    let options = document.getElementById("options");
    options.innerHTML = "";

    q.a.forEach((opt, i) => {
        let btn = document.createElement("button");
        btn.innerText = opt;

        btn.onclick = () => check(i);

        options.appendChild(btn);
    });

    document.getElementById("feedback").innerText = "";
    document.getElementById("score").innerText = "Score: " + score;
}

function check(i){

    let q = qList[index];

    if(i === q.correct){
        score += 10;
        document.getElementById("feedback").innerText =
        "✅ Correct! " + q.exp;
    } else {
        document.getElementById("feedback").innerText =
        "❌ Wrong! " + q.exp;
    }

    document.getElementById("score").innerText = "Score: " + score;
}

function next(){

    index++;

    if(index >= qList.length){

        localStorage.setItem("score", score);
        localStorage.setItem("total", qList.length * 10);

        window.location.href = "result.html";

    } else {
        show();
    }
}

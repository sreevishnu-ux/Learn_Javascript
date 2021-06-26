const correctAnswers =  ['A', 'A', 'A', 'A'];

const form = document.querySelector('.quiz-form');

const result  = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();


    let score = 0;

    const userAnswers = [form.Q1.value,form.Q2.value, form.Q3.value, form.Q4.value];

    //to check answers

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }

        console.log(score);


    });

    //show result on page
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;

        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }

    },30);
});



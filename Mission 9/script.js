
const correctAnswers = {
    q1: 'orange',
    q2:'Messi',
    q3:['BUT','Licence'],
    q4:'4',
    q5:'CSS',
    q6:'CNIL',
    q7:['Vert','Rouge'],
    q8:'Louis Vitton',
    q9:['Football','Basketball'],
    q10:'25',
};
function Correction() {
    let score = 0;

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        
        if (Array.isArray(correctAnswer)) {
            const selectedOptions = Array.from(document.querySelectorAll(`input[name="${question}"]:checked`))
                .map(option => option.value);

            if (
                correctAnswer.every(answer => selectedOptions.includes(answer)) &&
                selectedOptions.length === correctAnswer.length
            ) {
                score++;
            }
        } else {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.value === correctAnswer) {
                score++;
            }
        }
    }

    alert(`Votre score est : ${score}/${Object.keys(correctAnswers).length}`);
}

function Effacer() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });

    console.log("Tous les champs ont été réinitialisés.");
}


function corrige()
{window.location.href="corrige.html"}

function retour()
{window.location.href="index.html"}
var DataBaseAlunos = [
    {
        name: "Maria",
        altura: 1.71,
        age: 25,
        sex: "F",
        room: "Trindade",
        matematica: [6.2, 7.0, 10.0]
    },
    {
        name: "José",
        altura: 1.85,
        age: 43,
        sex: "M",
        room: "Trindade",
        matematica: [7.0, 6.2, 6.5]
    },
    {
        name: "João",
        altura: 1.55,
        age: 22,
        sex: "M",
        room: "Trindade",
        matematica: [10.0, 9.5, 9.2]
    },
    {
        name: "Ricardo",
        altura: 1.86,
        age: 40,
        sex: "M",
        room: "Trindade",
        matematica: [6.0, 5.5, 8.6]
    },
    {
        name: "Joana",
        altura: 1.65,
        age: 40,
        sex: "F",
        room: "Trindade",
        matematica: [10.0, 8.5, 9.5]
    }
];

function MediaDosAlunos() {

    for (let i = 0; i < DataBaseAlunos.length; i++) {
        let soma = 0;

        for (let j = 0; j < DataBaseAlunos[i].matematica[j]; j++) {

            soma += (DataBaseAlunos[i].matematica[j])
            var media = soma / 3;
        }

        console.log(`Aluno: ${DataBaseAlunos[i].name}\nTurma: ${DataBaseAlunos[i].room}\nMédia Matemática: ${media.toFixed(1)}`)
    }
}

MediaDosAlunos()
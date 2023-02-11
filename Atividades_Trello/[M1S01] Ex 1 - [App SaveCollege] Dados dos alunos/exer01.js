var alunos = [
    {
        name: "Maria",
        height: 1.71,
        age: 25,
        sex: "F",
        room: "Trindade"
    },
    {
        name: "José",
        height: 1.85,
        age: 43,
        sex: "M",
        room: "Trindade"
    },
    {
        name: "João",
        height: 1.55,
        age: 22,
        sex: "M",
        room: "Trindade"
    },
    {
        name: "Ricardo",
        height: 1.86,
        age: 36,
        sex: "M",
        room: "Trindade"
    },
    {
        name: "Joana",
        height: 1.65,
        age: 40,
        sex: "F",
        room: "Trindade"
    }
];

for (let i = 0; i < alunos.length; i++) {
    console.log(`Name: ${alunos[i].name}\nHeight: ${alunos[i].height}\nAge: ${alunos[i].age}\nSex: ${alunos[i].sex}\nRoom: ${alunos[i].room}`)
}

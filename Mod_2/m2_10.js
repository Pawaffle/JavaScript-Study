const qty = parseInt(prompt('Gimme-Gimme your number of candidates'));
const candidates = []

for (let i = 1; i <= qty; i++) {
    let newName = prompt(`Gimme-Gimme name of candidat #${i}`);
    candidates.push({
        name : newName,
        votes : 0
    })
}

const voteQty = parseInt(prompt('Gimme-Gimme your number of voters'));

for (let i = 1; i <= voteQty; i++) {
    const newVote = prompt(`Voter ${i}, who are you voting for? Please enter the name`)
    for (let j = 0; j < qty; j++) {
        if (candidates[j]['name'] == newVote) {
            candidates[j]['votes'] ++
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0]['name']} with ${candidates[0]['votes']} votes`)
console.log('results:')
for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i]['name']} : ${candidates[i]['votes']}`)
}


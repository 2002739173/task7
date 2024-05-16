function checkVowelOrConsonant() {
    let char = document.getElementById('charInput').value.toLowerCase();

    if (char.length !== 1 || !char.match(/[a-z]/i)) {
        document.getElementById('result').textContent = 'Please enter a single letter.';
        return;
    }

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(char)) {
        document.getElementById('result').textContent = 'Output: vowel';
    } else {
        document.getElementById('result').textContent = 'Output: consonant';
    }
}

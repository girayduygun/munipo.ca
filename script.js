let randomWord = null;

function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];

    document.getElementById('word').innerHTML = randomWord.french;
    document.getElementById('turkishMeaning').innerHTML = `Turkish: ${randomWord.turkish}`;
    document.getElementById('englishMeaning').innerHTML = `English: ${randomWord.english}`;
    document.getElementById('source').innerHTML = `Source: ${randomWord.source}`;

    // Hide meanings and reset French word display
    document.getElementById('turkishMeaning').style.display = "none";
    document.getElementById('englishMeaning').style.display = "none";
    document.getElementById('source').style.display = "none";
    document.getElementById('word').style.display = "block";
}

function generateRandomMeaning() {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];

    document.getElementById('word').innerHTML = randomWord.french;
    document.getElementById('turkishMeaning').innerHTML = `Turkish: ${randomWord.turkish}`;
    document.getElementById('englishMeaning').innerHTML = `English: ${randomWord.english}`;
    document.getElementById('source').innerHTML = `Source: ${randomWord.source}`;

    // Show meanings and hide French word initially
    document.getElementById('turkishMeaning').style.display = "block";
    document.getElementById('englishMeaning').style.display = "block";
    document.getElementById('source').style.display = "block";
    document.getElementById('word').style.display = "none";
}

function toggleMeanings() {
    const turkishMeaning = document.getElementById('turkishMeaning');
    const englishMeaning = document.getElementById('englishMeaning');
    const source = document.getElementById('source');

    if (turkishMeaning.style.display === "none" && englishMeaning.style.display === "none" && source.style.display === "none") {
        turkishMeaning.style.display = "block";
        // englishMeaning.style.display = "block";
        source.style.display = "block";
    } else {
        turkishMeaning.style.display = "none";
        englishMeaning.style.display = "none";
        source.style.display = "none";
    }
}

function toggleFrench() {
    const word = document.getElementById('word');
    if (word.style.display === "none") {
        word.style.display = "block";
    } else {
        word.style.display = "none";
    }
}

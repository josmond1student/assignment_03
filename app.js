// Application functionality

// variables pointing to DOM objects
const wordInput = document.getElementById('wordInput');
const findRhymesButton = document.getElementById('findRhymes');
const resultsDiv = document.getElementById('results');

// initialize an array variable
let rhymesData = [];

// the next three statements are outside the scope of any function
// therefore they run when this file loads

// fetch the JSON data
fetch('rhymes.json')
    .then(response => response.json())
    .then(data => rhymesData = data)
    .catch(error => console.error('Error loading rhymes:', error));

// add the click event listener
findRhymesButton.addEventListener('click', () => {
    const word = wordInput.value.trim();
    word ? displayResults(findRhymes(word)) : resultsDiv.innerHTML = '<p>Please enter a word.</p>';
});

// pass the 'Enter' key listener to the click event listener
wordInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') findRhymesButton.click();
});

// This function is called to find the rhymes for the word entered
function findRhymes(word) {
    word = word.toLowerCase();
    if (rhymesData[word]) return rhymesData[word].rhymes;
    return null;
}

// This function is called to display the results
function displayResults(rhymes) {
    if (rhymes) {
        // resultsDiv variable defined at top of page
        resultsDiv.innerHTML = '<h3>Rhymes:</h3>';
        resultsDiv.innerHTML += '<ul>';
        resultsDiv.innerHTML += rhymes.map(rhyme => `<li>${rhyme}</li>`).join('');
        resultsDiv.innerHTML += '</ul>'
    } else {
        resultsDiv.innerHTML = '<p>No rhymes found for this word.</p>';
    }
}
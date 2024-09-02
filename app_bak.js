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
fetch('rhymes.json').then(function (response) {
    return response.json();
}).then(function (data) {
    rhymesData = data;
}).catch(function (error) {
    console.error('Error loading rhymes:', error);
});

// this makes the app work without the need for a form element
findRhymesButton.addEventListener('click', function () {
    const word = wordInput.value.trim();
    if (word) {
        // call function below to get the rhymes
        const rhymes = findRhymes(word);
        // call function below to display results
        displayResults(rhymes);
    } else {
        resultsDiv.innerHTML = '<p>Please enter a word.</p>';
    }
});

// this makes it work by pressing the Enter key
wordInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        // passes event to statement above
        findRhymesButton.click();
    }
});

// This function is called to find the rhymes for the word entered
function findRhymes(word) {
    word = word.toLowerCase();
    if (rhymesData[word]) {
        return rhymesData[word].rhymes;
    }
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
// Adding Install Button Functionality
let deferredPrompt;
const installButton = document.getElementById('installButton');

window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = event;
    // Update UI to show the install button
    installButton.style.display = 'inline-block';

    installButton.addEventListener('click', () => {
        // Hide the app provided install promotion
        installButton.style.display = 'none';
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
});

// Check if the app is already installed
window.addEventListener('appinstalled', () => {
    // Hide the app provided install promotion
    installButton.style.display = 'none';
    console.log('PWA was installed');
});

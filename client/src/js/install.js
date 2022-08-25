const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit'),
    console.log("event" + event),
        event.preventDefault();

        //stores events
        window.deferredPrompt = event;

        //remove hidden class
        butInstall.classList.toggle('hidden', false);
    });


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
            return;
        }

            //show the prompt
                promptEvent.prompt();

            //reset deferred prompt var -- only to be used once
                window.deferredPrompt = null,
                butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clears the prompt
        console.log('install hit'),
        window.deferredPrompt = null;
});

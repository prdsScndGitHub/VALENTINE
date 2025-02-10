document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const catImage = document.querySelector("img");
    const buttonsContainer = document.querySelector(".buttons");
    const h1 = document.querySelector(".captions");

    // Create a hidden image in the corner
    const cornerImage = document.createElement("img");
    cornerImage.src = "evil-larry-larry.gif"; // Change this to your actual image
    cornerImage.style.position = "fixed";
    cornerImage.style.bottom = "10px";
    cornerImage.style.right = "10px";
    cornerImage.style.width = "150px"; // Adjust size as needed
    cornerImage.style.display = "none"; // Initially hidden

    document.body.appendChild(cornerImage);

    yesButton.addEventListener("click", function () {
        // Remove the buttons and caption
        buttonsContainer.style.display = "none";
        h1.style.display = "none";
        catImage.style.display = "none";

        // Create a container for the GIFs
        const gifContainer = document.createElement("div");
        gifContainer.style.display = "flex";
        gifContainer.style.justifyContent = "center";
        gifContainer.style.alignItems = "center";
        gifContainer.style.gap = "20px"; // Space between GIFs
        gifContainer.style.marginTop = "20px";

        // Create the main 'good-morning.gif'
        const mainGif = document.createElement("img");
        mainGif.src = "good-morning.gif";
        mainGif.style.width = "250px"; // Adjust size
        mainGif.style.height = "auto";

        // Create the extra GIF 1 (left side)
        const extraGif1 = document.createElement("img");
        extraGif1.src = "catjam-cat.gif"; // Replace with your actual GIF
        extraGif1.style.width = "200px"; // Adjust size
        extraGif1.style.height = "auto";

        // Create the extra GIF 2 (right side)
        const extraGif2 = document.createElement("img");
        extraGif2.src = "gangnamcat.gif"; // Replace with your actual GIF
        extraGif2.style.width = "200px"; // Adjust size
        extraGif2.style.height = "auto";

        // Append the GIFs to the container
        gifContainer.appendChild(extraGif1);
        gifContainer.appendChild(mainGif);
        gifContainer.appendChild(extraGif2);

        // Append the container to the body
        document.body.appendChild(gifContainer);

        // Create a new sparkle-glitter GIF and add it to the body
        const sparkleGif = document.createElement("img");
        sparkleGif.src = "sparkle-glitter.gif";
        sparkleGif.style.position = "absolute";
        sparkleGif.style.top = "50%";
        sparkleGif.style.left = "50%";
        sparkleGif.style.transform = "translate(-50%, -50%)";
        sparkleGif.style.width = "300px"; // Adjust size as needed

        document.body.appendChild(sparkleGif);

        // Add a "Thank you" caption below the GIFs
        const thankYouText = document.createElement("h2");
        thankYouText.innerText = "YAY THANK YOU!!! I LOVE YOU ";
        thankYouText.style.textAlign = "center";
        thankYouText.style.marginTop = "10px";
        thankYouText.style.color = "red";
        thankYouText.style.fontFamily = "Arial, sans-serif";

        document.body.appendChild(thankYouText);

        // Change the background music
        const oldMusic = document.querySelector("embed");
        if (oldMusic) oldMusic.remove(); // Remove previous background music

        const newMusic = document.createElement("embed");
        newMusic.src = "happy-happy-happy-cat.mp3"; // Change this to your actual new music file
        newMusic.loop = true;
        newMusic.hidden = true;
        newMusic.autostart = true;

        document.body.appendChild(newMusic);
    });

    window.moveButton = function () {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    };

    // Show the image when the cursor gets near the "No" button
    document.addEventListener("mousemove", function (event) {
        const noButtonRect = noButton.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Define a "danger zone" around the button
        const buffer = 100; // Distance in pixels before triggering the image

        if (
            mouseX > noButtonRect.left - buffer &&
            mouseX < noButtonRect.right + buffer &&
            mouseY > noButtonRect.top - buffer &&
            mouseY < noButtonRect.bottom + buffer
        ) {
            cornerImage.style.display = "block"; // Show image when near
        } else {
            cornerImage.style.display = "none"; // Hide image when far
        }
    });
});
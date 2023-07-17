// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- GET OS ACCESS AND LOAD PLAYER CONTROLS --

/*
    This class gets user OS and load 
    game controls based on it.
*/

let userDevice = "";

// Get user Operative System to import controls.
function getOS() {

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // Get navigator and OS data array.
    let userOS = navigator.userAgent.split(" ");
    console.log(userOS);

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // Check for OS.
    userOS.forEach((item) => {

        // ---- ---- ---- ---- ---- ---- ---- ---- 

        // Lower case userOS data.
        let text = item.toLowerCase();

        // Check for Windows.
        if (text.includes("win")) {

            console.log("Device: Windows.");
            userDevice = "pc";
            // Import PC controls.
            importPlayerPCControls();
            return;
        }

        // ---- ---- ---- ---- ---- ---- ---- ---- 

        // Check of Linux.
        if (text.includes("linux")) {

            console.log("Device: Linux.");
            userDevice = "pc";

            // Import PC controls.
            importPlayerPCControls();
            return;
        }

        // ---- ---- ---- ---- ---- ---- ---- ---- 

        // Check for Mac.
        if (text.includes("mac")) {

            console.log("Device: Mac.");
            userDevice = "pc";

            // Import PC controls.
            importPlayerPCControls();
            return;
        }

        // ---- ---- ---- ---- ---- ---- ---- ---- 

        // Check for iOS.
        if (text.includes("ios")) {

            console.log("Device: iOS.");
            userDevice = "mobile";

            // TODO: import Mobile Controls.
            return;
        }

        // ---- ---- ---- ---- ---- ---- ---- ---- 

        // Check for Android.
        if (text.includes("android")) {

            console.log("Device: Android.");
            userDevice = "mobile";

            // TODO: import Mobile Controls.
            return;
        }

        // ---- ---- ---- ---- ---- ---- ---- ---- 
    });

    console.log("User Device: " + userDevice);

    // ---- ---- ---- ---- ---- ---- ---- ---- 
}

// ---- ---- ---- ---- ---- ---- ---- ---- 
function saveConfig() { // Saves the configuration to localStorage
    localStorage.setItem("clockConfig", JSON.stringify(config));
}

function loadConfig() { // Loads the configuration from localStorage OR generates it and triggers saveConfig()
    if(localStorage.getItem("clockConfig")) {
        config = JSON.parse(localStorage.getItem("clockConfig"));
    } else {
        // Generate Config
        config = { // Initial configuration
            "tps": "2",
            "debug": true,
            "edit_mode": true,
            "one_rem": "24px",
            "myWatchface": [
                {
                    "x": "10px",
                    "y": "500px",
                    "type": "createblock",
                    "id": 1
                },
                {
                    "x": "100px",
                    "y": "200px",
                    "type": "seconds",
                    "id": 2
                },
                {
                    "x": "200px",
                    "y": "300px",
                    "type": "minutes",
                    "id": 3
                },
                {
                    "x": "400px",
                    "y": "100px",
                    "type": "reset",
                    "id": 4
                },
                {
                    "x": "500px",
                    "y": "200px",
                    "type": "tickcounter",
                    "id": 5
                },
                {
                    "x": "700px",
                    "y": "200px",
                    "type": "supposedtickscounter",
                    "id": 6
                },
                {
                    "x": "800px",
                    "y": "200px",
                    "type": "tickpercentage",
                    "id": 7
                }
            ]
        }
        saveConfig(); // Save config after generating it
    }
}

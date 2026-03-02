const http = require("http");
const PORT = 8089;



const server = http.createServer((req, res) => {
    
    const url = req.url
    console.log(url, 'url');

    if(url === "/") {
        res.write("Hello Welcome XYZ \n")
        res.write("This is a fitness website \n")
        res.end();
    } else if (url === "/abouts") {
        res.setHeader("Content-Type", 'text/plain')
        // behind the scenes end first writes the response and than ends it
        // due to this line only you get response
        // after then end you cant do anything
        res.end("this website is created by Utkarsh");
    } else if (url === "/contact") {

        res.setHeader("Content-Type", 'text/plain')

        res.write("Email: thakurutkarsh2@gmail.com")
        res.write("phone: 3377446617")
        res.end("Fax: 7733-7738-119");
    } else if (url === "/fitness") {
        const fitnessRegieme = {
            name: "utkarsh",
            age: 22,
            heigh: 5.10,
            shouldSleep8Hours: true,
            workout: ["cycling", "heavy weights"],
            gymAdress: {
                city: "banglore",
                pincode: 99473,
                street: "hsr street"
            }
        }

        const stringifiedReegieme = JSON.stringify(fitnessRegieme);

        // metadata -> talks about the REAL data  (set header )

        // we are talking about the real data stringifiedReegieme 
        // we are saying event thought we are sending string but it should be treated as 
        // JSON
        res.setHeader("Content-Type", 'application/json')
        res.end(stringifiedReegieme);

    }

});


server.listen(PORT, () => {
    console.log("Thumbs up server is listning on PORT", PORT);
})
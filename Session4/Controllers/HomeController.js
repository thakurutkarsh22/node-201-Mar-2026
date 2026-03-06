function HomeResponse (req, res) {
    res.status(200).send("Hello Welcome XYZ \n This is a fitness website EXPRESS get")
}


function AboutResponse  (req, res) {
    res.status(200).send("this website is created by Utkarsh express")
}

function ContactResponse (req, res)  {
    res.status(200).send("Email: thakurutkarsh2@gmail.com EXPRESS !!!!!!!!!")
}

module.exports = {HomeResponse, AboutResponse, ContactResponse}
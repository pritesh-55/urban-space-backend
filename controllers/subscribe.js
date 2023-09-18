async function subscribe(req,res){

    const email = req.body.email 

    const transporter = nodemail.createTransport({
        service: 'gmail',
        auth: {
            user: 'priteshsrivastava502@gmail.com',
            pass: `wsutqlzkggbixedt`   
        }
    })

    let mailGenerator = new mailgen({
        theme: 'default',
        product: {
            name: 'WM Services',
            link: 'https://mailgen.js/'
            // logo: 'https://mailgen.js/img/logo.png'
        }
    })

    let Response = {
        body:{
            name: `${email}`, 
            intro: 'Thank you for Subscribing our website, keep updated with us through email',
        },
        outro:'Do not share this OTP to anyone'
    }

    let mail = mailGenerator.generate(Response)

    const mailOptions = {
        from: 'PRITESH <priteshsrivastava502@gmail.com>',
        to: `${email}`,
        subject: 'Subscribe WM Services',
        html: mail
    }

    const sentmail = await transporter.sendMail(mailOptions, ()=>{
        console.log(`The mail is sent to ${email}`);
    })
}

module.exports = subscribe
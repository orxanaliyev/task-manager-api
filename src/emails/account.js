
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dev.orkhan@gmail.com',
        subject: 'Welcome to the Task Manager APP',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dev.orkhan@gmail.com',
        subject: 'Cancelation email',
        text: `Why you left us ${name} brooo :(`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// const msg = {
//     to: 'dev.orkhan@gmail.com',
//     from: 'dev.orkhan@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this will work okay!'
// }

// sgMail.send(msg)
// .then( () => {}, error => {
//     console.log(error)

//     if (error.response) {
//         console.log(error.response.body)
//     }
// })
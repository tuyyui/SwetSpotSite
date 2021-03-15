import React from 'react'



const ChatBot = require('react-simple-chatbot')


function CustomChatBot (props)
{
    const steps = [
        {
            id: "Greet",
            message: "Hello, Welcome to SwetSpot",
            trigger: "What's your email address"
          },
          {
            id: "What's your email address",
            message: "Please type your email address",
            trigger: "Waiting user input for email"
          },
          {
            id: "Waiting user input for email",
            user: true,
            trigger: "What message you would like to send"
          },
          {
            id: "Message",
            message: "We got your message",
            trigger: "Done"
          },
          {
            id: "Done",
            message: "Have a great day !!",
            end: true
          }
    ]
    return <CustomChatBot steps = {steps} />;
}

export default CustomChatBot
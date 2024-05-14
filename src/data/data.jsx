import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaSass,
    FaNode,
    FaDatabase
} from "react-icons/fa"

const Data = {
    Home:{
        title:"Front-End Developer",
        description:"Welcome! Here you can find a sample of my projects, skills and experience in creating attractive and functional interfaces. I'm excited to share my work with you and show how my passion for design and programming is reflected in every project I participate in. I hope you enjoy your visit and find inspiration in my work!",
        project:[
            {
                icon: <FaReact style={{color:"#00e1ff"}}/>,
                title:"Stats poke",
                description:"Consuming an api with react. It is a small app that shows Pokémon statistics.",
                link:"https://api-consumption.onrender.com"
            },
            {
                icon: <FaReact style={{color:"#00e1ff"}}/>,
                title:"Send form",
                description:"Send Form. allows you to send emails, through Nodemailer. You can attach images, videos, documents, etc.",
                link:"https://frontend-ww2q.onrender.com"
            },
            {
                icon: <FaNode style={{color:"#6ce000"}}/>,
                title:"Notes",
                description:"CRUD notes app, react was used for the frontend, nodejs for the backend, and the firebase service as a database.",
                link:"https://crud-notes-70of.onrender.com"
            }
        ]
    },
    Projects:[
        {
            icon: <FaReact style={{color:"#00e1ff"}}/>,
            title:"Stats poke",
            description:"Consuming an api with react. It is a small app that shows Pokémon statistics.",
            link:"https://api-consumption.onrender.com"
        },
        {
            icon: <FaReact style={{color:"#00e1ff"}}/>,
            title:"Send form",
            description:"Send Form. allows you to send emails, through Nodemailer. You can attach images, videos, documents, etc.",
            link:"https://frontend-ww2q.onrender.com"
        },
        {
            icon: <FaNode style={{color:"#6ce000"}}/>,
            title:"Notes",
            description:"CRUD notes app, react was used for the frontend, nodejs for the backend, and the firebase service as a database.",
            link:"https://crud-notes-70of.onrender.com"
        }
    ],
    Contact:{
        title:"Contact",
        description:"Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at w1lson4li3s@gmail.com . I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can find me on https://instagram.com/. Thanks again for your interest, and I look forward to hearing from you!"
    },
    NotFound:{},
    redes:{
        linkedin:"https://www.linkedin.com/in/wilson-rivero-275963243",
        instagram:"",
        envelope:"w1lson4li3s@gmail.com"
    }
};

export default Data;
const axios = require("axios");

const dummyTodos = [
    {
        title: "Write Monthly Report",
        description:
            "Compile and document the progress and achievements of the month.",
        status: "todo",
    },
    {
        title: "Create Marketing Campaign",
        description:
            "Develop a marketing campaign to promote the new product launch.",
        status: "inprogress",
    },
    {
        title: "Attend Team Training",
        description:
            "Participate in the team training session on the latest technology trends.",
        status: "done",
    },
    {
        title: "Review Code Pull Requests",
        description:
            "Review and provide feedback on code pull requests from team members.",
        status: "todo",
    },
    {
        title: "Plan Team Building Event",
        description:
            "Organize and plan a team-building event for the upcoming month.",
        status: "inprogress",
    },
    {
        title: "Update Documentation",
        description:
            "Ensure that project documentation is up-to-date and reflects the latest changes.",
        status: "done",
    },
    {
        title: "Conduct User Interviews",
        description:
            "Interview users to gather feedback on the usability of the application.",
        status: "todo",
    },
    {
        title: "Optimize Database Queries",
        description:
            "Identify and optimize slow-performing database queries in the application.",
        status: "inprogress",
    },
    {
        title: "Draft Blog Post",
        description:
            "Write a blog post on a relevant industry topic for the company blog.",
        status: "done",
    },
    {
        title: "Review Product Roadmap",
        description:
            "Review and provide input on the product roadmap for the next quarter.",
        status: "todo",
    },
    {
        title: "Implement Responsive Design",
        description:
            "Implement responsive design updates for better mobile user experience.",
        status: "inprogress",
    },
    {
        title: "Test Security Vulnerabilities",
        description:
            "Conduct security testing to identify and address potential vulnerabilities.",
        status: "done",
    },
    {
        title: "Collaborate on Feature Design",
        description:
            "Collaborate with the design team to finalize the user interface for a new feature.",
        status: "todo",
    },
    {
        title: "Coordinate Team Standup",
        description:
            "Facilitate and coordinate the daily standup meeting for the development team.",
        status: "inprogress",
    },
    {
        title: "Document API Endpoints",
        description:
            "Document the various API endpoints used in the application for reference.",
        status: "done",
    },
    {
        title: "Resolve Customer Support Tickets",
        description:
            "Address and resolve customer support tickets in a timely manner.",
        status: "todo",
    },
    {
        title: "Sprint Planning Meeting",
        description:
            "Participate in the sprint planning meeting to prioritize tasks for the next iteration.",
        status: "inprogress",
    },
    {
        title: "Update Social Media Profiles",
        description:
            "Update and maintain the company's social media profiles with the latest news and content.",
        status: "done",
    },
    {
        title: "Research New Technologies",
        description:
            "Conduct research on emerging technologies that could benefit the development process.",
        status: "todo",
    },
    {
        title: "Create Demo Video",
        description:
            "Prepare a demo video showcasing the key features of the latest product release.",
        status: "inprogress",
    },
];

const numberOfRequests = 20;

const makePostRequests = async () => {
    try {
        for (let i = 0; i < numberOfRequests; i++) {
            const response = await axios.post(
                "http://localhost:3001/todo",
                dummyTodos[i]
            );
            console.log(`Request ${i + 1}: ${response.status}`);
        }
    } catch (error) {
        console.error("Error making requests:", error.message);
    }
};

// Call the function to make the requests
makePostRequests();

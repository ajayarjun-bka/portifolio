var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/header.html",
            controller: "intro"
        })
        .when("/projects", {
            templateUrl: "partials/projects.html",
            controller: "projects"
        })
        .when("/experience", {
            templateUrl: "partials/experience.html",
            controller: "experience"
        })
        .when("/wip", {
            templateUrl: "partials/wip.html"
            //controller: "about"
        })
        .when("/contact", {
            templateUrl: "partials/contact.html",
            controller: "contact"
        })
        .otherwise({
            templateUrl: "partials/404.html"
            //redirectTo: "/"
        });
});


app.controller("intro", function ($scope) {
    $scope.bio = {
        name: "AJAY ARJUN",
        headline: "Java Developer | Full Stack Developer",
        //headline: "",
        shortIntro: "I am pursuing Masters in Computer Science from The University of Texas at Arlington. " +
        "I am passionate about Cloud Computing, Big Data and Web development." +
        " I have developed full-stack (MEAN, React/Angular + Firebase, React/Angular " +
        "+ Express) and client-side applications (React, Angular), applications. and have a strong grasp of object-oriented " +
        "programming principles and design patterns. Currently I am focussing on gaining expertise in developing " +
        "responsive single page applications using React and Redux.",
        ps: "Kindly go through the ",
        ps1: "and",
        ps2: " sections to know more about me"
    };
});

app.controller("projects", function ($scope) {
    $scope.skills = {
        programmingLanguages: "Java, JavaScript, Python, C++",
        javascript: "ES6, Node, React, Redux, AngularJs, Express, Socket.io",
        webTechnologies: "HTML5, CSS3, SCSS, JSP, Spring MVC",
        cloudTechnologies: "AWS [RDS, EC2, S3, Elastic beanstalk], Google App Engine, Microsoft Azure, IBM Bluemix",
        databases: " MySQL, MongoDB, SQL Server, Oracle 10g ",
        others: "Windows, Linux, Eclipse, Maven, Git, Agile methodology"
    };
    $scope.projectDetails = [{
        title: "HTKS Game using Nao Robot for Children Suffering from Executive Function Disorder",
        description: "Implemented Head, Toes, Knees, and Shoulders (HTKS) task switching game using NAO robot which " +
        "serves as rehabilitation therapy for children affected with Executive Function disorder. Built a user interface " +
        "for controlling the NAO robot to play task switching game and other basic tasks. Developed a video recognition " +
        "module to evaluate whether the children are performing the tasks correctly using Kinect camera.",
        technologies: "Python, Java Script, Java Servlets, Nao Qi Framework, Choregraphe 2.43, Unity Engine, Kinect Studio",
        github: "www"
    },
        {
            title: " Secure Cloud Storage",
            description: "Cloud application developed using python that encrypts and uploads the file into IBM Bluemix " +
            "storage container. It allows the user to download the decrypted file, list all the files and deleting " +
            "specified file that is available in the container. Implemented separate containers and version control for each user.",
            technologies: "Python, AES encryption, IBM Bluemix",
            github: "www"
        },
        {
            title: " Database Caching using Elastic Storage",
            description: "A web application connected to Amazon S3, that acts as a repository for historical weather " +
            "data. The users were allowed generate random queries over the weather data to to view details for a city, " +
            "sort the data, finding peak value, or by climatic condition. Implemented memcache to cache frequent " +
            "queries by hashing. Reduced Database access by 10X times. ",
            technologies: "Python, AWS Elastic Storage, S3, Python-flask",
            github: "www"
        },

        {
            title: " Hadoop Map Reduce and K-Means Clustering on Earthquake data set",
            description: "Implemented Hadoop Map reduce multi-node cluster on Amazon Web Services to analyze earthquake " +
            "data set for relationship between magnitude and depth, to identify if the magnitude is increasing over a " +
            "fixed period. Performed K means clustering on the output from Map Reduce job to group data as per " +
            "requirements and visualize it as scatter plots, histograms and bar graphs using R and shiny server. ",
            technologies: "Python, R, AWS, S3",
            github: "www"
        },
        {
            title: "Static Code Analyzer for Security Analysis",
            description: "Implemented online static code analyzer as REST APIs to analyze C/C++ and python code for " +
            "common programming vulnerabilities. Generated reports of the results and stored a copy under respective " +
            "users to track vulnerabilities. Implemented sanitization of inputs to avoid vulnerabilities like buffer " +
            "overflow and cross site scripting. Performed stress testing using JMeter.",
            technologies: "Node.js, Angularjs, Expressjs, AWS EC2",
            github: "www"
        },
        {
            title: "Photo Sharing App on Google App Engine",
            description: "Developed a web app on google app engine which allows users to upload a picture and share it " +
            "publicly, comment on pictures and set privacy. Used NO-SQL database to support performance and auto scaling " +
            "based on user load.Handles multiple user sessions and stress tested using JMeter.",
            technologies: "Google App Engine ,Python,Flask,MongoDB",
            github: "www"
        },
        {
            title: "K-NN with Cross Validation",
            description: "Implemented K-NN using different distance measures such as Euclidean, Polynomial kernel and " +
            "Radial basis kernel. It included preprocessing steps such as cleaning and normalization of data and 10-FCV " +
            "to divide the data set into training and testing samples",
            technologies: "Python",
            github: "www"
        }

    ]
});

app.controller("contact", function ($scope) {
    $scope.info = {
        linkedin: "https://www.linkedin.com/in/ajayarjun/",
        github: "https://github.com/ajayarjun-bka",
        email: "ajayarjun.baalakrishnan@gmail.com",
        phone: "682-252-3332"
    }
});

app.controller("experience", function ($scope) {
    $scope.jobs = [{
        company: "MS.SWAMINATHAN RESEACH FOUNDATION",
        position: "WEB DEVELOPER INTERN",
        period: "JAN 2014 - MAR 2014",
        roles: ["Performed requirement analysis and developed a planning system using Java, to schedule conferences " +
        "among branch research centers and training sessions to students to increase productivity.", "Carried out " +
        "migration of website from PHP to Java environment."
        ]
    }, {
        company: "INFOSYS LIMITED, INDIA",
        position: "SYSTEM ENGINEER",
        period: "SEP 2014 - MAY 2015",
        roles: ["Contributed in the development of the website for Glaxo Smith Kline, using Adobe CQ 5.6, JavaScript, and jQuery.",
            "Authored and published web forms, and performed functionality testing.", "Lead a team of 3 members in the development of an " +
            "internal system to track issues, and monitor resource allocation."]
    }, {
        company: "HERACLIA LAB, UTA",
        position: "RESEARCH PROJECT",
        period: "JAN 2016 - MAY 2016",
        roles: ["Carried out a research on Attention-deficit/hyperactivity disorder with a team of # Members.",
            "Carried out a pilot study and collected feedback from experts for the basis for research" +
            "Built a interactive application with web interface to control a Humanoid robot which served as a medium to " +
            "connect with children affected with ADHD", "Published the research proceedings to PETRA 2016."
        ]
    }]
});

// nav()
// {
//     var nav = $('#')
// }

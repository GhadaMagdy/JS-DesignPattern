/*
This is empty on purpose! Your code to build the resume will go here.
 */
$(function () {

    var model = {
        bio: {

            name: "Ghada",
            role: "Front End Developer",
            contacts: {
                mobile: "01114870429",
                email: "ghada.magdy@itworx.com",
                github: "GhadaMagdy",
                twitter: "Ghada.twitter",
                location: "Area 7B – Block J – Free Zone – Nasr City, Egypt",
            },
            welcomeMessage: "Hello in My Resume",
            skills: ["HTML5", "CSS3", "Angular2", "JavaScript", "Bootstrap", "SASS"],
            biopic: "string url",
            display: function () { },//function display
        },
        education: {
            schools: [
                {
                    name: "ElMonira",
                    location: "El Syda Zainab",
                    degree: "Secondry school",
                    majors: ["array of strings", "Math"],
                    dates: " string (works with a hyphen between them)",
                    url: "string (optional)"
                },
                {
                    name: "Faculty of Computers and Information",
                    location: "El Giza",
                    degree: "BS.",
                    majors: ["array of strings", "Computer Science"],
                    dates: " string (works with a hyphen between them)",
                    url: "string (optional)"
                }

            ],

            onlineCourses: [
                {
                    title: 'string',
                    school: 'string',
                    dates: 'string(works with a hyphen between them)',
                    url: ' string'
                }
            ],
            display: function () { }
        },
        work : {

            jobs: [
                {
                    employer: "ITWORX",
                    title: "Front End Developer",
                    location: "Area 7B – Block J – Free Zone – Nasr City, Egypt",
                    dates: "string (Can be 'in progress')",
                    description: "string"
                }
            ],
            display: function () { }
        },
        projects : {
            projects: [
                {
                    title: "string" ,
                    dates: 'string(works with a hyphen between them)',
                    description: 'string',
                    images: ['array with string urls']
                }
            ],
            display: function(){}
        }
    };

    var octopus = {
        init:function(){

        },
        getBioData:function(){
            return model.bio;

        },
        getEducationData :function(){
            return model.education;
        },
        getWorkData :function(){
            return model.work;
        },
        getProjectsData :function(){
            return model.projects;
        }
        
        

    };
   var resumeView={
       init:function(){
           this.contacts=octopus.getBioData();
           this.education=octopus.getEducationData();
           this.work=octopus.getWorkData();
           this.projects=octopus.getProjectsData();

           this.contactsTemplate=$('#topContacts');
           this.render();
       },
       render:function(){

       }

   } 

     
});
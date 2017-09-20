/*
This is empty on purpose! Your code to build the resume will go here.
 */
$(function () {

    var model = {
        bio: {

            name: "Ghada Magdy",
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
            biopic: "./images/fry.jpg",
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
                    dates: "Jul 2017-Present . 3 mos",
                    description: "Creating User Experience & Interactivity"
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
            resumeView.init();

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
           this.bio=octopus.getBioData();
           this.education=octopus.getEducationData();
           this.work=octopus.getWorkData();
           this.projects=octopus.getProjectsData();

           this.header=$('#header');
           this.topContacts=$("#topContacts");
           this.workExperience=$("#workExperience");
           this.projects=$("#projects");
           this.education=$("#education");
           
           
           this.renderContacts();
           this.renderWorks();
       },
       renderContacts:function(){
        var HTMLheaderName = `<h1 id="name">${this.bio.name}</h1>`;
        var HTMLheaderRole = `<span class="role">${this.bio.role}</span><hr>`;

        var HTMLmobile = `<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">${this.bio.contacts.mobile}</span></li>`;
        var HTMLemail = `<li class="flex-item"><span class="orange-text">email</span><span class="white-text">${this.bio.contacts.email}</span></li>`;
        var HTMLtwitter = `<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">${this.bio.contacts.twitter}</span></li>`;
        var HTMLgithub = `<li class="flex-item"><span class="orange-text">github</span><span class="white-text">${this.bio.contacts.github}</span></li>`;
        var HTMLlocation = `<li class="flex-item"><span class="orange-text">location</span><span class="white-text">${this.bio.contacts.location}</span></li>`;
        
        var HTMLbioPic = `<img src=${this.bio.biopic} class="biopic">`;
        var HTMLwelcomeMsg = `<span class="welcome-message">${this.bio.welcomeMessage}</span>`;
        
        var HTMLskillsStart =` <h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>`;
        var HTMLskills = `<li class="flex-item"><span class="white-text">%data%</span></li>`;
        this.header.prepend(HTMLheaderName+HTMLheaderRole);
        this.topContacts.append(HTMLmobile);
        this.topContacts.append(HTMLemail);
        this.topContacts.append(HTMLtwitter);
        this.topContacts.append(HTMLgithub);
        this.topContacts.append(HTMLlocation);
        this.header.append(HTMLbioPic);
        this.header.append(HTMLwelcomeMsg);
        this.header.append(HTMLskillsStart);
        this.skills=$("#skills");
        for(var i=0;i<this.bio.skills.length;i++){
            this.skills.append(`<li class="flex-item"><span class="white-text">${this.bio.skills[i]}</span></li>`);
            
        }

       },
       renderWorks:function(){
        
        var HTMLworkStart = '<div class="work-entry"></div>';        
           for(var i=0;i<this.work.jobs.length;i++)
            {
                this.workExperience.append(HTMLworkStart);
                var HTMLworkEmployer = `<a href="#">${this.work.jobs[i].employer}`;
                var HTMLworkTitle = ` - ${this.work.jobs[i].title}</a>`;
                var HTMLworkDates = `<div class="date-text">${this.work.jobs[i].dates}</div>`;
                var HTMLworkLocation = `<div class="location-text"${this.work.jobs[i].location}</div>`;
                var HTMLworkDescription = `<p><br>${this.work.jobs[i].description}</p>`;
                $(".work-entry").append(HTMLworkEmployer+HTMLworkTitle);
                $(".work-entry").append(HTMLworkDates+HTMLworkLocation);
                $(".work-entry").append(HTMLworkDescription);
          
            }
       },
       renderProjects:function(){},
       renderEducation:function(){},

   } 

     octopus.init();
});
$(function () {
    var model = {
        students:
        [
            {
                name: 'Slappy the Frog',
                daysMissdCalls: 0

            },
            {
                name: 'Lilly the Lizard',
                daysMissdCalls: 0

            },
            {
                name: 'Paulrus the Walrus',
                daysMissdCalls: 0

            },
            {
                name: 'Gregory the Goat',
                daysMissdCalls: 0

            },
            {
                name: 'Adam the Anaconda',
                daysMissdCalls: 0

            },
        ],
        numOfDayes: 12


    };
    var tableHeaderView = {
        init: function () {
            this.tableHeader = document.getElementById('tableHeader');
            this.studentName = document.createElement('th');
            this.studentName.className = "name-col";

            this.missdCalls = document.createElement('th');
            this.missdCalls.className = "missed-col";
            this.NoDay = octopus.getDayes();
            tableHeaderView.render();
        },
        render: function () {
            this.studentName.innerHTML = "Student Name";
            this.tableHeader.appendChild(this.studentName);

            for (var i = 0; i < this.NoDay; i++) {
                var dayNum = document.createElement('th');
                dayNum.innerHTML = i + 1;
                this.tableHeader.appendChild(dayNum);


            }
            this.missdCalls.innerHTML = "Days Missed-col";
            this.tableHeader.appendChild(this.missdCalls);

        }
    };
    var studentsView = {
        init: function () {
            this.studentList = octopus.getStudents();
            this.dayNo=octopus.getDayes();
            this.tableBody = document.getElementById('tableBody');
            this.render();


        },
        render: function () {
            debugger;
            for (var i = 0; i < this.studentList.length; i++) {
                var student=this.studentList[i];
                var tr=document.createElement('tr');
                tr.className="student";
                var tdName=document.createElement('td');
                tdName.className="name-col";
                tdName.innerHTML=student.name;
                tr.appendChild(tdName);
                for (var j = 0; j < this.dayNo; j++) {
                    var td=document.createElement('td');
                    td.className="attend-col";
                    var checkbox=document.createElement('input');
                    checkbox.type="checkbox";
                    td.appendChild(checkbox);
                    tr.appendChild(td);
                }
                var tdMissdCalls=document.createElement('td');
                tdMissdCalls.className="missed-col";
                tdMissdCalls.innerHTML=student.daysMissdCalls;
                tr.appendChild(tdMissdCalls);
                this.tableBody.appendChild(tr);
                    
            }

        }
    }
    var octopus = {
        init: function () {
            tableHeaderView.init();
            studentsView.init();

        },
        getDayes: function () {
            return model.numOfDayes;
        },
        getStudents: function () {
            return model.students;
        }
    };
    octopus.init();
});
$(function () {
    var model = {
        students:
        [
            {
                name: 'Slappy the Frog',
                daysMissd: 12,
                checkeddayes: []

            },
            {
                name: 'Lilly the Lizard',
                daysMissd: 12,
                checkeddayes: []

            },
            {
                name: 'Paulrus the Walrus',
                daysMissd: 12,
                checkeddayes: []

            },
            {
                name: 'Gregory the Goat',
                daysMissd: 12,
                checkeddayes: []

            },
            {
                name: 'Adam the Anaconda',
                daysMissd: 12,
                checkeddayes: []

            },
        ],
        numOfDayes: 12,
        fillCheckedDay: function () {
            for (var i = 0; i < student; i++) {
                for (var j = 0; j < numOfDayes; j++) {
                    student[i].checkeddayes.push(false);

                }

            }
        },
        getStudentList:function(){
            if(localStorage.students){
                model.students=JSON.parse(localStorage.students);
                
            }
            else{
                localStorage.students=JSON.stringify(model.students);
                
            }
            return model.students;
        }


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
            this.dayNo = octopus.getDayes();
            this.tableBody = document.getElementById('tableBody');
            this.render();


        },
        render: function () {
            debugger;
            this.tableBody.innerHTML = '';
            for (var i = 0; i < this.studentList.length; i++) {
                var student = this.studentList[i];
                var tr = document.createElement('tr');
                tr.className = "student";
                var tdName = document.createElement('td');
                tdName.className = "name-col";
                tdName.innerHTML = student.name;
                tr.appendChild(tdName);
                for (var j = 0; j < this.dayNo; j++) {
                    var td = document.createElement('td');
                    td.className = "attend-col";
                    var checkbox = document.createElement('input');
                    checkbox.type = "checkbox";
                    checkbox.addEventListener('click', (function (dayNo, _student) {
                        return function () {
                            if (this.checked) {
                                octopus.upadteDayMissed(dayNo, _student);
                            }

                        }
                    })(j, student));
                    if(student.checkeddayes[j]===true)
                        {
                            checkbox.checked=true;
                        }
                    td.appendChild(checkbox);
                    tr.appendChild(td);
                }
                var tdMissdCalls = document.createElement('td');
                tdMissdCalls.className = "missed-col";
                tdMissdCalls.innerHTML = student.daysMissd;
                tr.appendChild(tdMissdCalls);
                this.tableBody.appendChild(tr);

            }

        }
    }
    var octopus = {
        init: function () {
            var students = octopus.getStudents();
            tableHeaderView.init();
            studentsView.init();

        },
        getDayes: function () {
            return model.numOfDayes;
        },
        getStudents: function () {
            return model.getStudentList();
        },
        getRandom: function () {
            return (Math.random() >= 0.5);
        },
        upadteDayMissed: function (dayNo, _student) {
            debugger;
            _student.daysMissd -= 1;
            _student.checkeddayes[dayNo]=true;
            var index = model.students.findIndex(s => s.name == _student.name);
            model.students[index] = _student;
            localStorage.students = JSON.stringify(model.students);
            studentsView.render();
        }

    }
    octopus.init();
});
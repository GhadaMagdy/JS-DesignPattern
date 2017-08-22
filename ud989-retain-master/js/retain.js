$(function(){

    var model = {// call or interact with data 
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function(obj) {// add date in model 
            var data = JSON.parse(localStorage.notes);
            // we parse data from local storage because 
            //When receiving data from a web server, the data is always a string.
            //Parse the data with JSON.parse(), and the data becomes a JavaScript object
            data.push(obj);
            localStorage.notes = JSON.stringify(data);// then I return the object to string again to save it in my local storage
        },
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };


    var octopus = {// deal with model to add data and call view to render the returned data
        addNewNote: function(noteStr) { // store n model data new content then render the new view
            model.add({
                content: noteStr,
                date:Date.now()
            });
            view.render();
        },

        getNotes: function() {
            return model.getAllNotes().reverse();
        },

        init: function() { 
            model.init();//octopus init calls model intit to intiate data and retreive data from localstorge
            view.init();// then call view init to start render data and bind it in view
        }
    };


    var view = {
        init: function() {
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){// put event submit function to add new note --> call octopus add new note
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function(){
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note"> <span class="note-date">'+ new Date(note.date).toString() +'</span>'
                       + note.content +
                    '</li>';
                    
            });
            this.noteList.html( htmlStr );
        }
    };

    octopus.init();// app start from here
});
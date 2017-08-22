
var catArray = [
    {
        name: 'bosy',
        img: 'cat.jpg',
        count: 0
    },
    {
        name: 'kity',
        img: 'home.jpg',
        count: 0
    },
    {
        name: 'bsbs',
        img: 'mockup.jpg',
        count: 0
    },
    {
        name: 'ghada',
        img: 'mockup.jpg',
        count: 0
    }

];
for (var i = 0; i < catArray.length; i++) {
    var catElem = catArray[i];

    //create dom;

    var li = document.createElement("li");
    var h2 = document.createElement("h2");
    h2.innerHTML = catElem.name;
    li.appendChild(h2);
    li.addEventListener('click', (function (cat) {
       
        return function () {
            var catArea=document.getElementById('catArea');
            catArea.innerHTML='';
             var catname = document.createElement("h2");
            catname.innerHTML = cat.name;
            var catimg = document.createElement('img');
            catimg.src = cat.img;
            var catcount =document.createElement("p");
            catcount.innerHTML = cat.count;

            catimg.addEventListener('click', (function () {
                  cat.count = ++cat.count; 
                  catcount.innerHTML = cat.count;
            }));

            // catimg.addEventListener('click', (function (_cat) {//I didn't need this closure the first one is good
            //     return function () {
                    
            //         _cat.count = ++_cat.count; 
            //           catcount.innerHTML = _cat.count;
            //     };
            // })(cat));

            catArea.appendChild(catname);
            catArea.appendChild(catimg);
            catArea.appendChild(catcount);
            // var catname = document.getElementById('catName');
            // catname.innerHTML = cat.name;
            // var catimg = document.getElementById('catImg');
            // catimg.src = cat.img;
            // var catcount = document.getElementById('catCount');
            // catcount.innerHTML = cat.count;
            // catimg.addEventListener('click', (function (_cat) {
            //     return function () {
            //         debugger;
            //         _cat.count = ++_cat.count; 
            //           catcount.innerHTML = _cat.count;
            //     };
            // })(catCopy));
           


        };

    })(catElem));
    document.getElementById('catList').appendChild(li);
}
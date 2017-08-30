$(function () {

    var model = {
        currentCat: null,
        catList: [
            {
                name: "cat1",
                count: 0,
                img: 'cat1.jpg'
            },
            {
                name: "cat2",
                count: 0,
                img: 'cat2.jpg'
            },
            {
                name: "cat3",
                count: 0,
                img: 'cat3.jpg'
            }

        ],
        init: function () {
            if(!localStorage.catList)
                {
                    localStorage.catList=this.catList;

                    return localStorage.catList;
                }
            else{
                return localStorage.catList;
            }
        }

    };
    var catListView = {
        init: function () {
            this.catListelem = document.getElementsByClassName('catNamesList')[0];
            this.render();
        },
        render: function () {
            this.catListelem.innerHTML = '';
            var cats = octopus.getCats();

            for (var i = 0; i < cats.length; i++) {
                var currentCat = cats[i];
                var li = document.createElement("li");
                var h2 = document.createElement("h2");
                h2.innerHTML = currentCat.name;
                li.appendChild(h2);
                li.addEventListener('click', (function (Cat) {
                    return function () {
                        octopus.setCurrentCat(Cat);
                        catAreaView.render();

                    }
                }
                )(currentCat));
                this.catListelem.appendChild(li);
            }

        }

    };
    var catAreaView = {
        init: function () {

            this.catname = document.getElementById('catName');
            this.catimg = document.getElementById('catImg');
            this.catcount = document.getElementById('catCount');
            console.log(this.catimg);
            this.catimg.addEventListener('click', (function () {
                octopus.incrementCounter();
            }));
            this.render();

        },
        render: function () {
            var cat = octopus.getCurrentCat();
            this.catname.textContent = cat.name;
            this.catimg.src = cat.img;
            this.catcount.textContent = cat.count;




        }

    };
    var catFormView = {
        init: function () {
            this.catNametxt = document.getElementsByName('catName')[0];
            this.catImgtxt = document.getElementsByName('catURL')[0];
            this.catCountertxt = document.getElementsByName('catCounter')[0];
            this.currentCat = octopus.getCurrentCat();
            this.render();
        },
        render: function () {
            this.catNametxt.value = this.currentCat.name;
            this.catImgtxt.value = this.currentCat.img;
            this.catCountertxt.value = this.currentCat.count;
        }
    }
    var octopus = {
        init: function () {
            model.currentCat = model.catList[0];
            catListView.init();
            catAreaView.init();
            var adminBtn = document.getElementsByClassName('btnAdmin')[0];
            adminBtn.addEventListener('click', function () {
                octopus.showupdateForm();
            });
            var cancelBtn = document.getElementsByClassName('btnCancel')[0];
            cancelBtn.addEventListener('click', function () {
                octopus.hideUpdateform();
            });
            var btnSave=document.getElementsByClassName('btnSave')[0];
            btnSave.addEventListener('click',function(){
                octopus.update();

            })


        },
        setCurrentCat: function (cat) {
            console.log(cat);
            model.currentCat = cat;
            catFormView.init();
        },
        getCurrentCat: function () {
            return model.currentCat;
        },
        getCats: function () {
            return model.catList;
        },
        incrementCounter: function () {
            console.log("currentCount ", model.currentCat.count);
            model.currentCat.count++;
            catAreaView.render();
        },
        showupdateForm: function () {
            var catForm = document.getElementsByClassName('catForm')[0];
            catForm.style.display = "block";
            catFormView.init();

        },
        hideUpdateform: function () {
            var catForm = document.getElementsByClassName('catForm')[0];
            catForm.style.display = "none";
        },
        update:function(){
            var catNameValue = document.getElementsByName('catName')[0].value;
            var catImgValue = document.getElementsByName('catURL')[0].value;
            var catCounterVlaue = document.getElementsByName('catCounter')[0].value;
            var index=model.catList.indexOf(model.currentCat.name);
            model.currentCat.name=catNameValue;
            model.currentCat.img=catImgValue;
            model.currentCat.count=catCounterVlaue;
            model.catList[index]=model.currentCat;
            localStorage.catList=model.catList;

            catListView.render();
            catAreaView.render();
            octopus.hideUpdateform();

        }




    };
   
    octopus.init();

});
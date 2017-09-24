$(function () {

    var initecatList = [
        {
            name: "cat1",
            count: 0,
            img: './images/cat1.jpg',
            nicknames: ["posy", "losy", "lolo"]

        },
        {
            name: "cat2",
            count: 0,
            img: './images/cat2.jpg',
            nicknames: ["tigger", "losy", "lolo"]

        },
        {
            name: "cat3",
            count: 0,
            img: './images/cat3.jpg',
            nicknames: ["nona", "losy", "lolo"]

        }

    ];
    var Cat = function (data) {
        this.name = ko.observable(data.name);
        this.img = ko.observable(data.img);
        this.count = ko.observable(data.count);
        this.nickNames = ko.observableArray(data.nicknames);


        this.title = ko.computed(function () {
            var counter = this.count();
            var title;
            if (counter < 10)
                title = "newBorn";
            else if (counter < 50)
                title = "In fat";
            else if (counter < 100)
                title = "child";
            return title;
        }, this);


    };
    var viewModel = function () {
        var self = this;
        this.catList = ko.observableArray([]);
        initecatList.forEach(function (cat) {
            self.catList.push(new Cat(cat));
        })
        this.currentCat = ko.observable(this.catList()[0]);
        
        this.incrementCount = function () {
            self.currentCat().count(self.currentCat().count() + 1);
        }
        this.changeCat = function (clickedCat) {
            
            self.currentCat(clickedCat);
            
        }

    }
    ko.applyBindings(new viewModel());
});


// var catImg1 = document.getElementById('CatImg1');
// var count1 = document.getElementById('counter1');
// countClick(catImg1, count1);

// var catImg2 = document.getElementById('CatImg2');
// var count2 = document.getElementById('counter2');
// countClick(catImg2, count2);
function countClick(cat, count) {
        var counter = count.text();
        cat.on('click', function () {
            counter++;
            count.text(counter) ;
        }, false);


    }
$(function () {
    var prev=null;
 $('h2').on('click',function(){

  
        debugger;
        var catid = this.id;
        var catContainer = $(`#cat${catid}`);
        var catimg = $(`#CatImg${catid}`);
        var catCount = $(`#counter${catid}`);
        var counter=catCount.text();
        if(prev!=null)
        prev.removeClass("active");
        console.log(prev);
        catContainer.addClass("active");
        prev=catContainer;
        console.log(prev);
        console.log($(catimg));
        var catImageId=`CatImg${catid}`;
       document.getElementById(catImageId).onclick= function () {
             debugger
            counter++;
            catCount.text(counter) ;
        };
       

})
   

});


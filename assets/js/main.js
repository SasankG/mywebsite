$(document).ready(function () {

    //fade in text
    $('.hsText').css({opacity: 1});

    //smooth scroll 
    $("#nav ul li a[href^='#']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();
     
        // store hash for use later to add in url
        // this.hash = id of slide
        var hash = this.hash;
        console.log(hash);

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
     
            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
          });
     
     });

    //Dropdown Menus
    if ($(window).width() > 980) {
        $('ul.nav li.dropdown').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).slideDown();
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).slideUp();
        });
    }

    //shorten navbar scroll
    $(document).on("scroll", function () {

        if ($(document).scrollTop() > 50) {
            $(".navbar").removeClass("large").addClass("small");
            $("#logo").css({ opacity: 0 });

        } else {
            $(".navbar").removeClass("small").addClass("large");
            $("#logo").css({ opacity: 0.8 });
        }
    });

    //chart
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["HTML", "CSS", "JS", "React", "React-Native","Node.js","Express.js","MySql", "MongoDB", "Django"],
            datasets: [
                {
                    label: "Current Skill Roster",
                    backgroundColor: ["#e6f2ff", "#e6f2ff", "#e6f2ff", "#e6f2ff", "#e6f2ff","#e6f2ff","#e6f2ff","#e6f2ff","#e6f2ff","#e6f2ff"],
                    data: [40, 38, 38, 36, 35, 34, 35, 34, 33, 28]
                }
            ]
        },
        options: {
            maintainAspectRatio: true,
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 12,
                    },
                    gridLines:{
                        display: false
                    },
                }],
                xAxes: [{
                    display: false,
                    gridLines:{
                        display: false
                    },
                }]
            },
            legend: { 
                
                labels: {
                    fontColor: 'white',
                    fontSize: 18,
                } 
            },
            title: {
                text: 'Current Skill Roster'
            }
        }
    });
})

// labels: ["HTML", "CSS", "JS", "React", "React-Native","Node.js","Express.js","MySql", "MongoDB"],
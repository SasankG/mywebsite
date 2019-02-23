$(document).ready(function () {

    //fade in text
    $('.hsText').css({ opacity: 1 });

    //smooth scroll 
    $("#nav ul li a[href^='#']").on('click', function (e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash for use later to add in url
        // this.hash = id of slide
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
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
            $('#homeSlide').css({ opacity: 0.4});
            $('#navName').css({fontSize: "12pt"})

        } else {
            $(".navbar").removeClass("small").addClass("large");
            $("#logo").css({ opacity: 0.8 });
            $('#homeSlide').css({ opacity: 0.9});
            $('#navName').css({fontSize: "16pt"})
        }
    });

    //chart
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["HTML", "CSS", "JS", "Java", "React", "React-Native", "Node.js", "Express.js", "MySql", "MongoDB", "Django"],
            datasets: [
                {
                    label: "Current Skill Roster",
                    backgroundColor: ["#e6f2ff", "#e6f2ff", "#e6f2ff", "#e6f2ff", "#e6f2ff", "#e6f2ff", "#e6f2ff", "#e6f2ff", "#e6f2ff", "#e6f2ff","#e6f2ff"],
                    data: [40, 38, 38, 30, 36, 35, 34, 35, 34, 33, 28,]
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
                    gridLines: {
                        display: false
                    },
                }],
                xAxes: [{
                    display: false,
                    gridLines: {
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
    //scroll animations
    $(window).scroll(function () {
        $('.meText').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this)
                    .animate({ 'opacity': '1' }, 600)
            }
        });
        $('#mePic').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this)
                    .animate({ 'opacity': '1' }, 600)
            }
        });

        $('.skillText').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this)
                    .animate({ 'opacity': '1' }, 600)
            }
        });
        $('.skillText2').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this)
                    .animate({ 'opacity': '1' }, 600)
            }
        });
        $('.skillText3').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this)
                    .animate({ 'opacity': '1' }, 600)
            }
        });
        $('.proText').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this)
                    .animate({ 'opacity': '1' }, 600)
            }
        });
        $('.resText').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this)
                    .animate({ 'opacity': '1' }, 600)
            }
        });
    });
})

// labels: ["HTML", "CSS", "JS", "React", "React-Native","Node.js","Express.js","MySql", "MongoDB"],
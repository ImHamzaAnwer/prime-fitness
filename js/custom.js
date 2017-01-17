$(document).ready(function(){
            // NAV
            $('#ham').click(function(){
                $('.header-2-slide').slideToggle();
            });

            // ACCORDION
            $('.accordion').click(function(){
                $(this).next('.panel').slideToggle();
            });

            $('.panel').click(function(){
                $(this).slideToggle("slow");
            });

            $('.expand-link').mouseover(function(){
                $('.expand').slideDown();
            });

            // $('.expand-link').mouseout(function(){
            //     $('.expand').slideUp();
            // });

        });
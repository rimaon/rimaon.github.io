(function ($) {
    $.fn.categoryFilter = function (selector) {
        this.click(function () {
            var categoryValue = $(this).attr('data-filter');
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
            if (categoryValue == "all") {
                $('.filter').show(0);
            } else {
                $(".filter")
                    .not('.' + categoryValue)
                    .hide('0');
                $('.filter')
                    .filter('.' + categoryValue)
                    .show('0');
            }
        });
    }
}(jQuery));

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);


$('.category-filter .category-button').categoryFilter();
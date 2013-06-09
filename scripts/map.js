jQuery('.map').each(function() {
    var map = jQuery(this);
    var getCountry = function(area) {
        return jQuery(jQuery(area).attr('href').replace(/#/, '.'));
    };

    map.find('area').on({
        'mouseenter': function() {
            getCountry(this).addClass('hover');
        },
        'mouseleave': function() {
            getCountry(this).removeClass('hover');
        },
        'click': function(e) {
            e.preventDefault();
            location.href = getCountry(this).find('a').attr('href');
        }
    });
});

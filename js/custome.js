jQuery(document).ready(function() {
    jQuery("ul.navbar-nav-new  li").addClass(function(index) {
        return "item-" + index;
    });
})
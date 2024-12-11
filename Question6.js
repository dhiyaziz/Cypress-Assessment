/*
Question 6
Go to https://www.joget.com/, use Javascript to make the nav bar disappear. Send us the code.
*/

/*Select the navigation bar element by its class, and hide it
<div class="primary-menu-top" bis_skin_checked="1"><ul id="menu-top-menu-1" class="menu-wrapper-top"><li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-29 top-nav--li"><a target="_blank" href="http://joget.com" aria-current="page">Joget.com</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1498 top-nav--li"><a target="_blank" href="https://www.jogetcloud.com/">Cloud</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1499 top-nav--li"><a target="_blank" href="https://marketplace.joget.org/jw/web/userview/mp/mpp/_/aa">Marketplace</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1500 top-nav--li"><a target="_blank" href="https://www.joget.org/">Product Central</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1501 top-nav--li"><a target="_blank" href="https://www.joget.org/community/">Community</a></li>
</ul></div>
*/

document.querySelector('.primary-menu-top').style.display = 'none'; //.primary-menu-top is the class from HTML

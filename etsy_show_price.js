// ==UserScript==
// @name       Etsy Sold Price Revealer
// @namespace  http://zetaphor.net/
// @version    0.1
// @description  Reveals the price of sold Etsy listings.
// @match      http://www.etsy.com/listing/*
// @match      https://www.etsy.com/listing/*
// @copyright  2014+, Zetaphor
// @require http://code.jquery.com/jquery-latest.js
// @updateURL https://raw.githubusercontent.com/Zetaphor/etsy-price-revealer/master/etsy_show_price.js
// ==/UserScript==

if ($('.shop-bin-header')[0]) {
    var price = $('meta[property="etsymarketplace:price"]').attr("content");
    $('#listing-page-cart-inner').prepend("<h1>Sold for "+ price +"</h1>");
}

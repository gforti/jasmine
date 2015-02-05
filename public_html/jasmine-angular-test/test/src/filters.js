'use strict';

/* Filters */

var planFilters = angular.module('planFilters', []);

planFilters.filter('truncate', function () {
    return function (text, length, end) {
        if (isNaN(length))
            length = 10;

        if (end === undefined)
            end = "...";

        if (text.length <= length || text.length - end.length <= length) {
            return text;
        } else {
            return String(text).substring(0, length-end.length) + end;
        }

    };
});
     
    
planFilters.filter('filterToCents', function () {
        return function (amt) {
            amt =  amt.toString().split('.').pop();
            return ( amt.length === 1 ? amt.charAt(0)+'0' : amt.charAt(0)+amt.charAt(1));
        };
    });
    
planFilters.filter('filterToDollar', function () {
        return function (amt) {
            return amt >> 0;
        };
    });
    
planFilters.filter('filterToPercentage', function () {
        return function (amt) {
            return parseFloat(amt)*100+'%';
        };
    });
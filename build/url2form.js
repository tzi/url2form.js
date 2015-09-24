(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.url2form = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = url2form();

function url2form() {
    'use strict';

    function getQueryList() {
        var queryObjectList = [];
        var href = window.location.href;
        var queryString = href.slice(href.indexOf('?') + 1);
        queryString = decodeURIComponent(queryString.replace(/\+/g, ' '));
        var queryList = queryString.split('&');
        var queryItem;
        for (var i = 0; i < queryList.length; i++) {
            if (queryList[i]) {
                queryItem = queryList[i].split('=');
                queryObjectList.push({name: queryItem[0], value: queryItem[1]});
            }
        }
        return queryObjectList;
    }

    function init(formName) {
        var form = document.forms[formName];
        if (!form) {
            throw new DOMException('Unexisting form: ' + formName);
        }
        var queryList = getQueryList();
        var query;
        for (var j = 0; j < queryList.length; j++) {
            query = queryList[j];
            var inputList = form.querySelectorAll('[name="' + query.name + '"]');
            for (var i = 0; i < inputList.length; i++) {
                var input = inputList[i];
                if (input.tagName == "TEXTAREA") {
                    input.innerHTML = query.value;
                    break;
                } else if (input.tagName == "INPUT") {
                    if (
                        input.type == "checkbox" ||
                        input.type == "radio"
                    ) {
                        if (input.value == query.value) {
                            input.setAttribute('checked', 'checked');
                            break;
                        }
                    } else if (
                        input.type !== "hidden" &&
                        input.type !== "button" &&
                        input.type !== "image"
                    ) {
                        input.value = query.value;
                        break;
                    }
                }
            }
        }
    }

    return {
        init: init
    };
}
},{}]},{},[1])(1)
});
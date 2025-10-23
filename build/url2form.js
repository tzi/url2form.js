(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.url2form = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
                } else if (input.tagName == "SELECT") {
                    input.value = query.value;
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

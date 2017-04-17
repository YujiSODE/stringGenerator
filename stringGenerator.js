/*stringGenerator
* stringGenerator.js
*
*    Copyright (c) 2017 Yuji SODE <yuji.sode@gmail.com>
*
*    This software is released under the MIT License.
*    See LICENSE or http://opensource.org/licenses/mit-license.php
*/
//A string generator.
/*
* This function returns function that loads the Unicode codepoint in decimal,
* and generates a text of given Unicode characters.
* === Methods ===
* returned function has two methods as follows:
* 1) txt(); it returns a generated text.
* 2) reset([v]); it resets a generating text;
* optionally it can reset the text with value v.
*/
function stringGen(){
    var slf=window,txt='',f;
    f=function(N){
        //N: number in decimal
        txt+=slf.String.fromCodePoint(+N);
    };
    //method that returns generated string
    f.txt=function(){return txt;};
    //method that resets generating string
    f.reset=function(v){
        v=!(v!==undefined)?'':v+'';
        txt=v;
    };
    return f;
}

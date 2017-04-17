# stringGenerator
A string generator.  
https://github.com/YujiSODE/stringGenerator

>Copyright (c) 2017 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE or http://opensource.org/licenses/mit-license.php
______

## Script
* `stringGenerator.js`

## How to use
This function returns function that loads the Unicode codepoint in decimal, and generates a text of given Unicode characters.  
### Methods
returned function has two methods as follows:
1. `txt()`; it returns a generated text.
2. `reset([v])`; it resets a generating text; optionally it can reset the text with value v.

## Examples
1. `var y=stringGen();`  
2. `y.reset();`  
3. `y(65);`  
4. `y.txt(); //"A"`  
5. `y(66); //"AB"`  
6. `y.reset("Hello:"),y.txt(); //"Hello:"`   
7. `y(66),y(67),y(68),y.txt(); //"Hello:BCD"`

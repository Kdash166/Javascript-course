/* strings */
// a string reprosents text lets learn the syntax rules for text surround the tex with
// single quotes you can add strings toghet as you can see below:
// you can add more than one string together aswell

console.log('some'+'text')
console.log('some'+'more'+'text')
// this is call concatination where two strings are combined together.
// you can check what type of data type a value is by using the:
console.log(typeof 2)
console.log(typeof 'num')
console.log(typeof true)
console.log(typeof null)
console.log(typeof NaN)
console.log(typeof 2.4) 
console.log(typeof undefined)
// an important feature to know about JS is if you add a string to a number it will
// automatically converted into a string.
console.log(('hello'+ 3))
console.log(typeof ('hello'+ 3))
// this is called Type Coercion or (automatic type conversion)
console.log('$' + 20.95 + 7.99)
// this doesnt look right because of type Coercion you can see the numbers havent
// added together properly you could use brackets to overcome this. it happens
// because addition occurs form left to right 
console.log('$' + (20.95 + 7.99))
// this also doesnt work due to floating point imprisision so you can do this instead
console.log('$' + (2095 + 799)/100)
// strings also follow order of operations so you can use brackets to add strings.
console.log('Items(' + (1+1)+ '): $'+ (2095 + 799)/100 )
//break up the string going from left to right remember to calculate numbers
// in brackets remember what you want to be strings and what you want to be
//numbers
//alert('Items(' + (1+1)+ '): $'+ (2095 + 799)/100);
// in javascript there are three ways to create a script you can use single quotes 
// double quotes in javascript the default is to use single quotes however 
// if there is a single quote in the string like 'I'm here this will end the string early
console.log("I'm learning Javascript")
// one way around this is to use double quotes when you are creating a string that contains an apostrophie
// another solution is by using an escape character. a letter number or symbol are all characters
// we can also use escape characters for example you can use \' 
console.log('I\'m learning Javascript')
// you can also use \" this allows you to create quotes in javacript.

console.log('I\'m learning \"Javascript\"')
// another useful escape character is \n this creates a newline.
console.log('hello\nworld\nhow are you\n\"today!\"')
// the third way of creating a string is by using backticks ``
// strings created with back ticks have some special qualities one of these qualities is called 
// interpolation. this is where you can insert a value directly into a string. 
// concatination is where you break something into parts and add it back togehter. 
//interpolation is often an easier way to do this the string is contained within the backticks
// the dollar sign and curly braces allow you to add together values inside the brackets of the item. 
// the example below is a much easier way to insert values into the template. interpolation is a much cleaner
// way of inserting a values into a string.
console.log(`Items(${1+1}): $${(2095 + 799)/100}`)
console.log(`some
text`)
// template strings also allow you to create multiline strings where the string is \n onto another line

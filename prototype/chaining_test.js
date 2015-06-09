/**
 * Created by ri on 2015/06/09.
 */

//■オブジェクトリテラル方式で生成された場合のchaining検証■
var myObject = {
    name: 'rikon',
    'sayName': function() {
        console.log(this.name);
    }
}

console.dir(myObject);     //prototypeプロパティ＝Object
myObject.sayName();         //thisは呼び元オブジェクトであるmyObjectにバインディングされる。

console.log(myObject.hasOwnProperty('name'));           //Objectにchainingされる。true。
console.log(myObject.hasOwnProperty('nickname'));       //Objectにchainingされる。false。
console.log(myObject.hasOwnProperty('nickname'));       //Objectにchainingされる。false。
myObject.nickname = "nickname";
console.log(myObject.hasOwnProperty('nickname'));       //Objectにchainingされる。true。
myObject.sayNickName = function() {
    console.log(this.nickname);
}
myObject.sayNickName();     //nickname



//■コンストラクターで生成された場合のchaining検証■
var Person = function (name, age, address) {
    this.name = name;
    this.age  = age;
    this.address = address;
}
var p = new Person('rikon', '38', 'Tokyo');

console.dir(Person);    //prototypeオブジェクトはPerson
console.dir(p);         //prototypeリンク＝Person
console.dir(Person.prototype);  //prototypeプロパティ

console.log(p.hasOwnProperty('name'));  //Prototypeリンク（Person）⇒Objectへchaining。true
console.log(p.hasOwnProperty('sex'));   //Prototypeリンク（Person）⇒Objectへchaining。false
p.sex = 'male';
console.log(p.hasOwnProperty('sex'));   //Prototypeリンク（Person）⇒Objectへchaining。false

Person.prototype.testMethod = function() {
    console.log("Created a test method!");
}
p.testMethod();


//■基本タイプの拡張
String.prototype.sayHello = function(str) {
    console.log("Hello, string! - " + str);
}
"aaa".sayHello("gogogo");

//TODO:thisバインディングの挙動検証、および、prototype（親）の動的切り替えの検証


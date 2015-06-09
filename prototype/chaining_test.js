/**
 * Created by ri on 2015/06/09.
 */

//���I�u�W�F�N�g���e���������Ő������ꂽ�ꍇ��chaining���؁�
var myObject = {
    name: 'rikon',
    'sayName': function() {
        console.log(this.name);
    }
}

console.dir(myObject);     //prototype�v���p�e�B��Object
myObject.sayName();         //this�͌Ăь��I�u�W�F�N�g�ł���myObject�Ƀo�C���f�B���O�����B

console.log(myObject.hasOwnProperty('name'));           //Object��chaining�����Btrue�B
console.log(myObject.hasOwnProperty('nickname'));       //Object��chaining�����Bfalse�B
console.log(myObject.hasOwnProperty('nickname'));       //Object��chaining�����Bfalse�B
myObject.nickname = "nickname";
console.log(myObject.hasOwnProperty('nickname'));       //Object��chaining�����Btrue�B
myObject.sayNickName = function() {
    console.log(this.nickname);
}
myObject.sayNickName();     //nickname



//���R���X�g���N�^�[�Ő������ꂽ�ꍇ��chaining���؁�
var Person = function (name, age, address) {
    this.name = name;
    this.age  = age;
    this.address = address;
}
var p = new Person('rikon', '38', 'Tokyo');

console.dir(Person);    //prototype�I�u�W�F�N�g��Person
console.dir(p);         //prototype�����N��Person
console.dir(Person.prototype);  //prototype�v���p�e�B

console.log(p.hasOwnProperty('name'));  //Prototype�����N�iPerson�j��Object��chaining�Btrue
console.log(p.hasOwnProperty('sex'));   //Prototype�����N�iPerson�j��Object��chaining�Bfalse
p.sex = 'male';
console.log(p.hasOwnProperty('sex'));   //Prototype�����N�iPerson�j��Object��chaining�Bfalse

Person.prototype.testMethod = function() {
    console.log("Created a test method!");
}
p.testMethod();


//����{�^�C�v�̊g��
String.prototype.sayHello = function(str) {
    console.log("Hello, string! - " + str);
}
"aaa".sayHello("gogogo");

//TODO:this�o�C���f�B���O�̋������؁A����сAprototype�i�e�j�̓��I�؂�ւ��̌���


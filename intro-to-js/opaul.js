function askMyName() {
    const name = prompt("Please enter your name");
    if(name != null){
        document.getElementById("my-name").innerHTML = "My name is " + name;    
    }
}
function helloWorld() {
    const h1message =  document.getElementById ("my-name").innerHTML ;
       alert(h1message + ' "วันนี้ไม่มีแรง อนุญาตให้แซงไปก่อน !" ');
    }
function calAge(){
    const yearOfBirth = prompt("Please enter your  year of birth");
    const date = new Date()
    let year = date.getFullYear()
    const age = year - yearOfBirth;
    alert("ยินดีด้วย นายอยู่ในประเทศนี้มา " + age +" ปีแล้ว")
}
function loadProfile() {
    const myName = prompt("Please enter your name");
    const province = prompt("Please enter your province")
    document.getElementById("my-name-part2").innerHTML = myName;
    document.getElementById("my-province").innerHTML = province;
}

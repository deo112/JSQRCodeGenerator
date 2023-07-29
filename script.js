function showIt()
{
    var message = document.getElementById("atext").value;
    var paragraph = document.getElementById("par").innerHTML;
    var selectValue = document.getElementById("sel").value;
    var qr = document.getElementById("qr").src
    alert("Hello " + message + "!\n" + paragraph + "\n" + "You choose option " + selectValue + "!\n" + "Here is your QRCode" + qr  ) ;
    document.getElementById("par").innerHTML = "Bye World!"
    //alert("Hello World!");
}
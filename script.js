function showIt()
{
    var message = document.getElementById("atext").value;
    var paragraph = document.getElementById("par").innerHTML;
    var selectValue = document.getElementById("sel").value;
    var qr = document.getElementById("qr").src;
    var mimg = document.getElementById("qr");
    alert("Hello " + message + "!\n" + paragraph + "\n" + "You choose option " + selectValue + "!\n" + "Here is your QRCode: " + qr  ) ;
    document.getElementById("par").innerHTML = "Bye World!";
    if (selectValue=="One")
    {
        mimg.src = "https://pbs.twimg.com/media/F2INQhQW0AAyfCK?format=webp&name=small";
    }
    
    else if (selectValue=="Two")
    {
        mimg.src = "https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=dupa";
    }
    else 
    {
        alert("Picture not available");
    }
    //alert("Hello World!");
}
function genQR()
{
    //cutted full https: https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=welcome
    //chf=bg,s,65432100 means that background is transparent
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    //var assigned to img
    var qr = document.getElementById("img");
    //var cutted from https assigned to wanted text
    var txt = document.getElementById("qrtext").value;
    //var cutted from https assigned to wanted size
    var size = document.getElementById("size").value;

    if (txt!=="") 
    {
        qr.src = gapi + size + "x" +size+"&chl="+txt;

    }

    else
    {
        alert("Please enter any text")
    }

}
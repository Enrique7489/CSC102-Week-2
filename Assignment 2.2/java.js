function first()
{
    var corgiImage = document.getElementById("CorgiIdle");
    var firstFuncOut = Math.ceil(Math.random()*2);
    document.getElementById("firstFuncOut").innerHTML = firstFuncOut;

    if(firstFuncOut == 1)
        {
            document.getElementById("firstFuncOut").innerHTML = "You found a biscuit!";
            corgiImage.src = "images/CorgiWin.png";
        }
        
        else if(firstFuncOut == 2)
            {
                document.getElementById("firstFuncOut").innerHTML = "Oof, no biscuits :("
                corgiImage.src = "images/CorgiFail.png";
            }


   

}
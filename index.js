function applyStyles()
{
    console.log("pressed");
    let buttonprop=document.getElementById("customButton");
    buttonprop.style.backgroundColor=document.getElementById("bgColorInput").value;
    buttonprop.style.color=document.getElementById("fontColorInput").value;
    buttonprop.style.fontSize=document.getElementById("fontSizeInput").value;
    buttonprop.style.fontWeight=document.getElementById("fontWeightInput").value;
    buttonprop.style.padding=document.getElementById("paddingInput").value;
    buttonprop.style.borderRadius=document.getElementById("borderRadiusInput").value;
}
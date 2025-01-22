function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6g633mQrlWw":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var total = player.GetVar("total");
var total2 = player.GetVar("total2");

var totalakhir = total + total2;
player.SetVar("totalakhir", totalakhir);
}


document.normalize();
$("link[rel=stylesheet], script:lt(2)").attr("crossorigin", "anonymous");
$("head").append($("<style></style>").text(".mt-5{margin-top:3rem!important}.pt-1{padding-top:.25rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}"));
$("select#ibo").on("click", function prikazi(a) {
    var a = $("#ibo").val();

    if (a == 1) {
        return $("#text").text("Zagušljivač ili gas bez dodatne opasnosti.");
    } else if (a == 2) {
        return $("#text").text("Pothlađeni ukapljeni gas, zagušljivač.");
    } else if (a == 3) {
        return $("#text").text("Pothlađeni ukapljeni gas, zapaljiv.");
    } else if (a == 4) {
        return $("#text").text("Pothlađeni ukapljeni gas, oksidirajući (pojačava vatru).");
    } else if (a == 5) {
        return $("#text").text("Zapaljivi gas.");
    } else if (a == 6) {
        return $("#text").text("Zapaljivi gas, koji može spontano dovesti do burne reakcije.");
    } else if (a == 7) {
        return $("#text").text("Oksidirajući (pojačava vatru).");
    } else if (a == 8) {
        return $("#text").text("Otrovni gas.");
    } else if (a == 9) {
        return $("#text").text("Otrovni gas, zapaljiv.");
    } else if (a == 10) {
        return $("#text").text("Otrovni gas, oksidirajući (pojačava vatru).");
    } else if (a == 11) {
        return $("#text").text("Otrovni gas, korozivni.");
    } else if (a == 12) {
        return $("#text").html("Zapaljiva tečnost (tačka paljenja između 23 i 60 &#8451;, uključivo), ili zapaljiva tečnost ili čvrsta materija u otopljenom stanju sa tačkom paljenja iznad 60 &#8451;, zagrijana do temperature jednake ili iznad njene tačke paljenja, ili samozagrijavajuća tečnost.");
    } else if (a == 13) {
        return $("#text").text("Zapaljiva tečnost koja reaguje s vodom, ispuštajući zapaljive gasove.");
    } else if (a == 14) {
        return $("#text").text("Zapaljiva tečnost koja reaguje opasno s vodom, ispuštajući zapaljive gasove.");
    } else if (a == 15) {
        return $("#text").html("Jako zapaljiva tečnost (tačka paljenja ispod 23 &#8451;).");
    } else if (a == 16) {
        return $("#text").text("Piroforna tečnost.");
    } else if (a == 17) {
        return $("#text").text("Piroforna tečnost koja reaguje opasno sa vodom. *");
    } else if (a == 18) {
        return $("#text").text("Jako zapaljiva tečnost, otrovna.");
    } else if (a == 19) {
        return $("#text").text("Jako zapaljiva tečnost, korozivna.");
    } else if (a == 20) {
        return $("#text").text("Jako zapaljiva tečnost, korozivna, koja reaguje opasno sa vodom. *");
    } else if (a == 21) {
        return $("#text").text("Jako zapaljiva tečnost koja može spontano dovesti do burne reakcije.");
    } else if (a == 22) {
        return $("#text").html("Zapaljiva tečnost (tačka paljenja između 23 i 60 &#8451;, uključivo), slabo otrovna ili samozagrijavajuća tečnost, otrovna.");
    } else if (a == 23) {
        return $("#text").text("Zapaljiva tečnost, otrovna, reaguje sa vodom, ispuštajući zapaljive gasove.");
    } else if (a == 24) {
        return $("#text").text("Zapaljiva tečnost, otrovna, reagujući sa vodom, stvara zapaljive gasove. *");
    } else if (a == 25) {
        return $("#text").text("Zapaljiva tečnost, otrovna, korozivna.");
    } else if (a == 26) {
        return $("#text").html("Zapaljiva tečnost (tačka paljenja između 23 i 60 &#8451;, uključivo), slabo korozivna ili samozagrijavajuća tečnost, korozivna.");
    } else if (a == 27) {
        return $("#text").text("Zapaljiva tečnost, korozivna, reaguje sa vodom, ispuštajući zapaljive gasove.");
    } else if (a == 28) {
        return $("#text").text("Zapaljiva tečnost, korozivna, reagujući sa vodom, stvara zapaljive gasove. *");
    } else if (a == 29) {
        return $("#text").text("Zapaljiva tečnost, može spontano dovesti do burne reakcije.");
    } else if (a == 30) {
        return $("#text").text("Zapaljiva čvrsta ili samoreaktivna materija, ili samozagrijavajuća materija.");
    } else if (a == 31) {
        return $("#text").text("Čvrsta materija koja reaguje sa vodom, ispuštajući zapaljive gasove.");
    } else if (a == 32) {
        return $("#text").text("Zapaljiva čvrsta materija koja reaguje opasno s vodom, ispuštajući zapaljive gasove. *");
    } else if (a == 33) {
        return $("#text").text("Spontano zapaljiva (piroforna) čvrsta materija.");
    } else if (a == 34) {
        return $("#text").text("Zapaljiva čvrsta materija, u otopljenom stanju pri povišenoj temperaturi.");
    } else if (a == 35) {
        return $("#text").text("Zapaljiva čvrsta materija, otrovna, u otopljenom stanju, pri povišenoj temperaturi.");
    } else if (a == 36) {
        return $("#text").text("Zapaljiva ili samozagrijavajuća čvrsta materija, otrovna.");
    } else if (a == 37) {
        return $("#text").text("Otrovna čvrsta materija koja reaguje sa vodom, ispuštajući zapaljive gasove.");
    } else if (a == 38) {
        return $("#text").text("Čvrsta materija koja reaguje opasno sa vodom, stvara otrovne gasove. *");
    } else if (a == 39) {
        return $("#text").text("Zapaljiva ili samozagrijavajuća čvrsta materija, korozivna.");
    } else if (a == 40) {
        return $("#text").text("Korozivna čvrsta materija koja reaguje sa vodom, stvara zapaljive gasove.");
    } else if (a == 41) {
        return $("#text").text("Korozivna materija koja reaguje opasno sa vodom, stvara korozivne gasove. *");
    } else if (a == 42) {
        return $("#text").text("Oksidirajuća materija (pojačava vatru).");
    } else if (a == 43) {
        return $("#text").text("Zapaljivi organski peroksid.");
    } else if (a == 44) {
        return $("#text").text("Jako oksidirajuća materija (pojačava vatru).");
    } else if (a == 45) {
        return $("#text").text("Jako oksidirajuća materija, otrovna (pojačava vatru).");
    } else if (a == 46) {
        return $("#text").text("Jako oksidirajuća materija, korozivna (pojačava vatru).");
    } else if (a == 47) {
        return $("#text").text("Jako oksidirajuća materija, može spontano burno reagovati (pojačava vatru).");
    } else if (a == 48) {
        return $("#text").text("Oksidirajuća materija, otrovna (pojačava vatru).");
    } else if (a == 49) {
        return $("#text").text("Oksidirajuća materija, otrovna, korozivna (pojačava vatru).");
    } else if (a == 50) {
        return $("#text").text("Oksidirajuća materija, korozivna (pojačava vatru).");
    } else if (a == 51) {
        return $("#text").text("Oksidirajuća materija, može spontano dovesti do burne reakcije (pojačava vatru).");
    } else if (a == 52) {
        return $("#text").text("Otrovna ili slabo otrovna materija.");
    } else if (a == 53) {
        return $("#text").text("Zarazna materija.");
    } else if (a == 54) {
        return $("#text").text("Otrovna tečnost, reaguje sa vodom, stvara zapaljive gasove.");
    } else if (a == 55) {
        return $("#text").html("Otrovna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo).");
    } else if (a == 56) {
        return $("#text").html("Otrovna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo), korozivna.");
    } else if (a == 57) {
        return $("#text").html("Otrovna materija, zapaljiva (tačka paljenja ne iznad 60 &#8451;, uključivo), može spontano dovesti do burne reaklcije.");
    } else if (a == 58) {
        return $("#text").html("Korozivna ili slabo korozivna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo), može spontano dovesti do burne reakcije.");
    } else if (a == 59) {
        return $("#text").html("Korozivna ili slabo korozivna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo), može spontano burno reagovati i koja reaguje opasno sa vodom. *");
    } else if (a == 60) {
        return $("#text").text("Korozivna čvrsta materija, zapaljiva ili samozagrijavajća.");
    } else if (a == 61) {
        return $("#text").text("Korozivna čvrsta materija, reaguje sa vodom, stvara zapaljive gasove.");
    } else if (a == 62) {
        return $("#text").text("Korozivna ili slabo korozivna materija, oksidirajuća (pojačava vatru).");
    } else if (a == 63) {
        return $("#text").text("Korozivna ili slabo korozivna materija, oksidirajuća (pojačava vatru), i otrovna.");
    } else if (a == 64) {
        return $("#text").text("Korozivna ili slabo korozivna materija, otrovna.");
    } else if (a == 65) {
        return $("#text").text("Jako korozivna materija.");
    } else if (a == 66) {
        return $("#text").text("Jako korozivna materija, reaguje opasno sa vodom. *");
    } else if (a == 67) {
        return $("#text").html("Jako korozivna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo).");
    } else if (a == 68) {
        return $("#text").text("Jako korozivna čvrsta materija, zapaljiva ili samozagrijavajuća.");
    } else if (a == 69) {
        return $("#text").text("Jako korozivna materija, oksidirajuća (pojačava vatru).");
    } else if (a == 70) {
        return $("#text").text("Jako korozivna materija, otrovna.");
    } else if (a == 71) {
        return $("#text").text("Jako korozivna materija, otrovna, reaguje opasno sa vodom. *");
    } else if (a == 72) {
        return $("#text").text("Korozivna ili slabo korozivna materija, može spontano dovesti do burne reakcije.");
    } else if (a == 73) {
        return $("#text").text("Materija opasna za okolinu; razne opasne materije.");
    } else if (a == 74) {
        return $("#text").text("Razne opasne materije, transportuju se na povišenoj temperaturi.");
    } else {
        return $("#text").text("");
    }
});
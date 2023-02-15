function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write(
  `<style> body {color: white; text-align: center; padding: 20px; font-size: 20px}</style>`
);

//Task 1
// 1. Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius.
// 2. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas.
//3 Suprogramuokite keturis skirtingus scenarijus, kai monetos metimą stabdome:
//         a) Iškritus herbui;
//         b) Tris kartus iškritus herbui;
//         c) Tris kartus iš eilės iškritus herbui;

document.write(`1 Užduotis<br>Monetos metimo užduotis<br><br>`);

document.write(`<br>Struktūra<br>`);
let result = rand(0, 1);
if (result === 0) {
  document.write(`<span style = 'font-size: 16px'>Iškrito herbas (H)</span>`);
} else {
  document.write(`<span style = 'font-size: 16px'>Iškrito skaičius (S)</span>`);
}

document.write(`<br><br>Pirmasis scenarijus<br>`);
let numbers = 0; //0 is false, other falsy: NaN, null, empty, undefined
do {
  numbers = rand(0, 1);
  document.write(
    `<span style='font-size: 16px'> ${numbers ? "S" : "H"}</span>`
  ); //condition, true (>0) : false (0 is false)
} while (numbers);
//sources: https://www.freecodecamp.org/news/the-ternary-operator-in-javascript/

document.write(`<br><br>Antrasis scenarijus<br>`);
let herb = 0;
while (herb < 3) {
  let number = rand(0, 1);
  if (number) {
    document.write(`<span style='font-size: 16px'>${"S"}</span>`);
  } else {
    document.write(`<span style='font-size: 16px'>${"H"}</span>`);
    herb++;
  }
}

document.write(`<br><br>Trečiasis scenarijus<br>`);
let side = "";
while (!side.includes("HHH")) {
  number = rand(0, 1);
  document.write(`<span style='font-size: 16px'> ${number ? "S" : "H"}</span>`);
  side += number ? "S" : "H";
}

//////////////////////////////////////////////////////////
//Sprendimas
//break and continue
document.write(`<hr> <br><br>Sprendimas (paskaita) <br>`);
let rezultatas = "";

while (true) {
  let skaicius = rand(0, 1);

  if (skaicius === 1) {
    rezultatas += "S";
  } else {
    rezultatas += "H";
    break;
  }
}
document.write(rezultatas);

///b
document.write(`<br> Sprendimas b)<br><br>`);
let counter = 0;
rezultatas = "";

while (true) {
  let skaicius = rand(0, 1);
  if (skaicius === 1) {
    rezultatas += "S";
  } else {
    rezultatas += "H";
    counter++;
  }
  if (counter > 2) break;
}
document.write(rezultatas);

///c
document.write(`<br> Sprendimas c)<br><br>`);
counter = 0;
rezultatas = "";

while (true) {
  let skaicius = rand(0, 1);
  if (skaicius === 1) {
    rezultatas += "S";
    counter = 0;
  } else {
    rezultatas += "H";
    counter++;
  }
  if (counter > 2) break;
}
document.write(rezultatas);

//2 užduotis
document.write(`<br><br><hr><br>`);
document.write(`2 Užduotis<br>Šaškių žaidimas<br><br>`);
// 1. Kazys ir Petras žaidžia šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25.
// 2. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​.
// 3. Žaidimą laimi tas, kas greičiau surenka 222 taškus.
// 4. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.

let kazys = 0;
let petras = 0;
let laimetojas = "";

while (kazys < 222 && petras < 222) {
  kazys += rand(5, 25);
  petras += rand(10, 20);
}
if (kazys > petras) {
  laimetojas = "Kazys";
} else if (petras > kazys) {
  laimetojas = "Petras";
}

document.write(
  `<span style='font-size: 16px'> Kazys surinko: ${kazys}, Petras surinko: ${petras}, taigi partiją laimėjo: ${laimetojas}.</span>`
);

document.write(`<br><br><hr><br>`);
document.write(`<hr><br>Sprendimas (paskaita)<br><br>`);

let petras2 = 0;
let kazys2 = 0;

while (true) {
  let p_taskai = rand(10, 20);
  let k_taskai = rand(5, 25);

  petras2 += p_taskai;
  kazys2 += k_taskai;

  if (p_taskai > k_taskai) {
    document.write(`<div>Partiją laimėjo Petras, surinko  ${p_taskai} </div>`);
  } else if (p_taskai === k_taskai) {
    document.write(`<div>Įvyko lygiosios!</div>`);
  } else {
    document.write(`<div>Partiją laimėjo Kazys, surinko ${k_taskai} </div>`);
  }

  if (petras2 >= 222 || kazys2 >= 222) {
    if (petras2 > kazys2) {
      document.write(`<h4> Laimėjo P <h4>`);
    } else if (petras2 === kazys2) {
      document.write(`<h4> Įvyko lygiosios <h4>`);
    } else {
      document.write(`<div>Partiją laimėjo Kazys, surinko ${k_taskai} </div>`);
    }
    break;
  }
  if (kazys2 >= 222) {
    document.write(`<h4> Laimėjo K <h4>`);
    break;
  }
}

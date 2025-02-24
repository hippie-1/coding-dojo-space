
import './util.css';

export const Algorithms = () => {
    //töltsünk fel egy array-t random számokkal 10 elem; -5 és +5 között
    const arr = Array(10);
    for (let i=0; i<10; i++) {
        arr[i] = Math.floor(Math.random()*10)-5;
    }

  //töltsünk fel egy array-t random számokkal és írassuk is ki valahová.
  
    //1.feladat: számlálás
    //számoljuk meg, hogy hány negatív szám van benne
    let counter = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            counter ++;
        }
    }

    //2.feladat: max/min keresés
    //keressük meg az array legnagyobb/legkisebb értékét
    let min = arr[0];
    let max = arr[0];
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    

//3.feladat: lineáris keresés 
//keressünk meg egy konkrét számot
//a konkrét elemet keressük
//ha van a tömbben, akkor
//-- tudjuk, hogy az értéke maga a korkrét szám, amit kerestünk
//-- kiírhatjuk inkább azt, hogy az hányadik eleme a tömbnek
//ha nincs benne, akkor olyan írjunk, ki, amiből kiderül, hogy nincs benne, lehet azt is, hogy az index ilyenkor -1
    let index = -1;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 1) {
            index = i;
        }
    }

    return (
        <div>
            <div className="display-linebreak">Array of 10 elements between -5 and 5 is: {arr.join(", ")}</div>
            <div className="display-linebreak">Number of NEGATIVE array elements: {counter}</div>
            <div className="display-linebreak">Lowest number of the array is: {min}</div>
            <div className="display-linebreak">Highest number of the array is: {max}</div>
            <div className="display-linebreak">Index of number 1 is: {index}</div>
        </div>
    )
}

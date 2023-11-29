let radius=parseFloat(prompt('Enter radius of circle: '));
let $2ndsquare=parseFloat(prompt('Enter height of square: '));
let $2ndsquare2=parseFloat(prompt('Enter width of square: '));
let reactangle1=parseFloat(prompt('Enter lenth of reactangle: '));
let reactangle2=parseFloat(prompt('Enter width of reactangle: '));
let pantagone1=parseFloat(prompt('Enter perimeter of pantagone'));
let pantagone2=parseFloat(prompt('Enter apothem of pantagone'));
let triangle1=parseFloat(prompt('Enter base of triangle: '));
let triangle2=parseFloat(prompt('Enter height of triangle: '));
let hexagon=parseFloat(prompt('Enter side lenth of hexagon: '))

let circle=3.1416*radius**2;
let square=$2ndsquare*$2ndsquare2;
let reactangle=reactangle1*reactangle2;
let pantagone=0.5*pantagone1*pantagone2;
let triangle=0.5*triangle1*triangle2;
let hexagone=3*Math.sqrt(3)*Math.pow(hexagon,2)/2;


document.write('Area of circle is ',circle,'</br>');
document.write('Area of square is ',square,'</br>');
document.write('Area of reactangle is ',reactangle,'</br>');
document.write('Area of pantagone is ',pantagone,'</br>');
document.write('Area of triangle is ',triangle,'</br>');
document.write('Aria of hexagone is ',hexagone,'</br>');
// let nomberInput;
// do{
//     nomberInput = prompt('Ecrivez un nombre entier');
// }while(isNaN(nomberInput) || nomberInput % 1 !== 0);

// document.write("<h4>La table de multiplication du nombre: "+nomberInput+"</h4>");
// document.write("<table>");

// for(let i=1;i<=10;i++){
//    document.write("<tr>");
//    document.write("<td>"+nomberInput+" x "+i+" =</td>");
//    document.write("<td>"+nomberInput*i+"</td>");
//    document.write("</tr>");
// }
// document.write("</table>");
let newArr = [1,2,3,4,5,6,7,8,9,10];

newArr.forEach(element => {
    document.write("<h4>La table de multiplication du nombre: "+element+"</h4>");
    for(let i=1; i<=10; i++) {
        document.write("<table>");
        document.write("<tr>");
        document.write("<td>"+i+" x "+element+" =</td>");
        document.write("<td>"+i*element+"</td>");
        document.write("</tr>");
        document.write("</table>");
    }
});

// for(let i=1; i<=10; i++) {
//     let input = 1;
//     document.write("<table>");
//     document.write("<tr>");
//     document.write("<td>"+i+" x "+input+" =</td>");
//     document.write("<td>"+i*input+"</td>");
//     document.write("</tr>");
//     document.write("</table>");
// }

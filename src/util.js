export default function Formatecurrency(num) {

     return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}
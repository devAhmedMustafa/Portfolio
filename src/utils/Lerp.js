export default function Lerp(v1, v2, amount){
    return v1 + (v2 - v1) * amount;
}
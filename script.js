Возьмите 2 строки s1 и s2, включающие только буквы от a до z.
Возвращает новую отсортированную строку, максимально длинную,
    содержащую различные буквы - каждая из которых берется только
один раз - исходящие из s1 или s2.

    Примеры:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
самый длинный(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
самый длинный(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    return (s1 + s2).split('').filter(onlyUnique).sort().join('')
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

































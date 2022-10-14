function romanToInt(s: string): number {
    let myMap = new Map<string, number>();
    let prev = 0;
    myMap.set("I", 1);
    myMap.set("V", 5);
    myMap.set("X", 10);
    myMap.set("L", 50);
    myMap.set("C", 100);
    myMap.set("D", 500);
    myMap.set("M", 1000);

    let res = 0;
    for(let i = 0; i < s.length; i++){

        if( prev < myMap.get(s.charAt(i))! ) res -= prev*2
        
        prev = myMap.get(s.charAt(i))!;

        res += prev 
        
    }
    return res
};
function soln(p,c) {
    const maxNumberGames= (p-(p%2))/2;
    if (maxNumberGames<=c) {
        return maxNumberGames;
    }
    else {
        return c;
    }
}
console.log(soln(4, 2)); 
console.log(soln(4, 1)); 
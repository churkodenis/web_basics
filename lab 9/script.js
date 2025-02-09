for(let i = 1; i<= 9; i++){
    let count = i <= 5 ? i : 10 -i;
    console.log('*'.repeat (9 *(count - 1)));
}
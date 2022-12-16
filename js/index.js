function solucion(num) {
    for(i=1; i<=num; i++){
        if(i%5==0 || i%3==0){
            console.log(i)
        }
    }
    console.log(`El resultado es: Hay wuey`)
}

solucion(15)
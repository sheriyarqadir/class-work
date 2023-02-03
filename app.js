
let sheriyarkarishta = (sheriyarkaapnaghar,sheriyarkibike,sheriyarkisalary)=>{
    return new Promise((han, na) => {
        if(sheriyarkaapnaghar == true &&
            sheriyarkibike == true &&
            sheriyarkisalary > 50)
            {
                han("RishtaPakka");
            }else{
                na("Istikhara Main Na")
            }
             });
};

sheriyarkarishta(true,true,60)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
})
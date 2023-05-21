// asssychorns
// set times

// let time=()=>{

//     setTimeout(()=>{
//         console.log('Its exectude');
//     },4000);
// }
// time()

// ============================================
let MSD = () => {
    return " MSD is Here"
}

let Virat = async() => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(" EE sala cup namde")
        }, 3000);
    })
}


let ABD = () => {
    return " MR. 360 Degree is here"
}

let result = async() => {

    console.log(MSD());
    console.log(await Virat());
    console.log(ABD());

}
result()

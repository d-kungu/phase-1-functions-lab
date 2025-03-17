const distanceFromHqInBlocks = function(someValue){
    let result
    
    result = someValue - 42
    return Math.abs(result)
}
distanceFromHqInBlocks(43)

function distanceFromHqInFeet(feetDistance){
   let result
   result = (feetDistance-42)*264
   return Math.abs(result)

}
function  distanceTravelledInFeet ( Begin , end){
    let result
    result = (end- Begin)*264
    return Math.abs(result)
}

function calculatesFarePrice(start, destination){
    let result
    let fee 
    result = Math.abs((destination-start)*264)
    if (result <= 400){
        fee = 0;
    }
    else if (result <= 2000){
        fee = (result-400)*0.02;
        return fee;
    }
    else if (result <= 2500){
        fee = 25;

    }
    else {
        return 'cannot travel that far';
    }
return fee;


}
const canDol = 0.91;

//hidden function
function roundTwo(amount){
    return Math.round(amount * 100) / 100;
}

exports.canDolToUS = function(canadian){
    return roundTwo(canadian * canDol);
}
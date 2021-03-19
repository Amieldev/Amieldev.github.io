function density(mass,volume){
    console.log(parseFloat(mass)/parseFloat(volume));
}
function speed(distance,time){
    console.log(parseFloat(distance)/parseFloat(time));
}
function force(mass,acceleration){
    console.log(parseFloat(mass)*parseFloat(acceleration));
}
function acceleration(vf,vi,time){
    console.log((parseFloat(vf)-parseFloat(vi))/parseFloat(time));
}
function gravity(m1,m2,r){
    var result=((parseFloat(m1)*parseFloat(m2))/parseFloat(r*r))*(6.67*(10**-11));
    console.log(result);
}
function hypotenuse(a,b){
    console.log(Math.sqrt(parseFloat(a*a)+parseFloat(b*b)));
}
function e_mc2(mass){
    var c=299792458;
    console.log(parseFloat(mass)*(c*c));
}
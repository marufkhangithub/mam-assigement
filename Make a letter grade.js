let mark=parseFloat(prompt('Enter your  mark: '));

if(mark>=80 && mark<=100){
    document.write('congratulation Your grade is A')
}
else if(mark>=70 && mark<=89){
    document.write('congratulation Your grade is B')
}
else if(mark>=60 && mark<=79){
    document.write('congratulation Your grade is C')
}
else if(mark>=50 && mark<=69){
    document.write('congratulation Your grade is D')
}
else if(mark>=0 && mark<=49){
    document.write('You fail in exam')
}
else{
    document.write('Enter valid number')
}
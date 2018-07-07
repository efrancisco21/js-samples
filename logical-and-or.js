let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Vegan');
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer vegan options');
} else {
    console.log('Offer anything');
}
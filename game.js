const currentBal = window.prompt("How much money do you currently have?");

const familyMembers = window.prompt("How many people will give you Eidi?");

const avgEidi = window.prompt("How much do you think they will give you?");

eidiTotal = Number(avgEidi) * Number(familyMembers);

const finalBal = Number(eidiTotal) + Number(currentBal);

alert(`If you are correct, you will have $${finalBal}`);

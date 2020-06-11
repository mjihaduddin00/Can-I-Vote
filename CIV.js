function canIVote (age) {
  if (age >= 18) {
    return 'You can vote!';
  } else {
    return 'You need to meet the age requirements in order to vote.';
  }
};

console.log(canIVote(20));

// Below is another method I had used to make the function work in terms of determining if the age provided allowed for the ability to vote

const canIVote = age => {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(canIVote(10));
/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]
Exam.every_third = function (Arr){
    return Arr.filter((ArrItem, Index) => Index % 3 === 0);
};


// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (Sentence1, Sentence2) {
    //Shall consider parameters as constants.
    const ArrSentence1 = Sentence1.split(" ");
    const ArrSentence2 = Sentence2.split(" ");

    if (ArrSentence1.length !== ArrSentence2.length) {
        return Error; // didn't see anything like value-error in JS
    }

    const ArrWords = ArrSentence1.concat(ArrSentence2);

    const ArrMergedWords = ArrWords.reduce(
        function (ArrOut, CurrentWord, CurrentIndex, ArrReference) {
            if (CurrentIndex < ArrReference.length / 2) {
                ArrOut[CurrentIndex * 2] = CurrentWord;
            } else if (CurrentIndex >= ArrReference.length / 2) {
                ArrOut[(CurrentIndex - ArrReference.length/2)*2+1] = CurrentWord;
            }
            return ArrOut;
    }, new Array(ArrWords.length));

    const SentenceOut = ArrMergedWords.reduce(
        (Sentence, CurrentWord) => Sentence.concat(" "+CurrentWord));

    return SentenceOut;
};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (Str) {
    Str = Str.split("");  // THIS CONVERTS Str TO ARRAY

    const LowerCaseCount = Str.reduce(
        function(LowerCaseAccumulated, Currentletter){
            const LowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
            if (LowercaseLetters.search(Currentletter) !== -1){
                LowerCaseAccumulated += 1;
            }
            return LowerCaseAccumulated;
        }, 0);

    return LowerCaseCount;
};


// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = function (ObjInput) {
    const Keys = Object.keys(ObjInput); // 这是什么鬼畜语法？？？
    const LongestKey = Keys.reduce(function(LongKey, CurrentKey){
        if (CurrentKey.length > LongKey.length){
            LongKey = CurrentKey;
        }
        return LongKey;
    });
    return LongestKey;
};

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (ObjInput) {
    const Values = Object.values(ObjInput);

    let GreatestValue = Values.reduce(function(GreaterValue, CurrentValue){
        if (GreaterValue%2 !== 0){
            GreaterValue = CurrentValue;
        }

        if (CurrentValue > GreaterValue && CurrentValue%2 === 0){
            GreaterValue = CurrentValue;
        }
        return GreaterValue;
    });

    if (GreatestValue%2 !== 0){ // 哼，哼，啊啊啊啊啊啊
        GreatestValue = 0;
    }

    return GreatestValue;
};


// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (Username, Location="London") {
    const greeting = "Hello, "+Username.toString() +
    ", how is "+Location.toString()+"?";
    return greeting;
};


// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function (x, scalar=1, offset=0) {
    const Result = x * scalar + offset;
    if (Result > 0){
        return Result;
    }
    return 0;
};

export default Object.freeze(Exam);

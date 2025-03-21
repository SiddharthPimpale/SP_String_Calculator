function add(numbers) {
    if (!numbers) return 0;
    let numberList = numbers.split(/,|\n/).map((num) => parseInt(num));
    let total = 0;

    numberList.forEach((num) => {
        total += num;
    });
    return total;
}

module.exports = add;

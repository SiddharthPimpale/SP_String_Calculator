function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
        const sections = numbers.split("\n");
        delimiter = new RegExp(sections[0].substring(2));
        numbers = sections[1];
    }

    let numberList = numbers
        .split(delimiter)
        .map((num) => parseInt(num))
        .filter((num) => num <= 1000);

    const negativeNumbers = numberList.filter((num) => num < 0);

    if (negativeNumbers.length > 0)
        throw new Error(
            `negative numbers are not allowed: ${negativeNumbers.join(",")}`
        );

    let total = 0;

    numberList.forEach((num) => {
        total += num;
    });
    return total;
}

module.exports = add;

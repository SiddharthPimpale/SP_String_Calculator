function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
        const sections = numbers.split("\n");
        let delimiterString = sections[0].substring(2);
        if (delimiterString.includes("[")) {
            delimiter = new RegExp(
                delimiterString
                    .match(/\[(.*?)\]/g)
                    .map((delim) => escapeRegExp(delim.slice(1, -1)))
                    .join("|")
            );
        } else {
            delimiter = new RegExp(escapeRegExp(delimiterString));
        }
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

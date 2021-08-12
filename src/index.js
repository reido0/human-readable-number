module.exports = function toReadable(number) {
    const nums = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tenths = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let string = number.toString();

    if (string == 0) {
        return 'zero';
    };

    if (string < 20) {
        return nums[string];
    };

    if (string.length === 2) {
        return (tenths[string[0]] + ' ' + nums[string[1]]).trim();
    };

    if (string.length === 3) {

        if (string[1] === '0' && string[2] === '0')
            return nums[string[0]] + ' ' + 'hundred';

        else {
            return nums[string[0]] + ' ' + 'hundred' + ' ' + toReadable(+(string[1] + string[2]));
        };
    };
};

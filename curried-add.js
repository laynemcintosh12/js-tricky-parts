function curriedAdd(total) {
    if (total === undefined) {
        return 0;
    }
    return function (number) {
        if (number) {
            return curriedAdd(total + number);
        } else {
            return total;
        }
    }
}

module.exports = { curriedAdd };

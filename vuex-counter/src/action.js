var incrementCounter = function (store) {
    store.dispatch('INCREMENT', 1)
};

module.exports = {
    incrementCounter:incrementCounter
}

const storageController = (function () {

})()

const itemController = (function() {

    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
        items: [
            {id: 0, name: 'Chocolate', calories: 200},
            {id: 1, name: 'Cookie', calories: 300},
            {id: 2, name: 'Steak Meal', calories: 600}
        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        getData: function() {
            return data;
        }
    }
})();

const UIController = (function () {

})()

const appController = (function (itemController, UIController, storageController) {
    return {
        init: function() {
            console.log('Initializing application')
        }
    }
})()

appController.init();

const itemController = (function () {

    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
        items: storageController.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    }

    return {
        getDataItems: function () {
            return data.items;
        },
        addItem: function (name, calories) {
            let ID;
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1
            } else {
                ID = 0;
            }
            
            newItem = new Item(ID, name, parseInt(calories));
            data.items.push(newItem);
            return newItem;
        },
        getItemById: function (id) {
            let foundItem = null;

            data.items.forEach(item => {
                if(item.id === id){
                    foundItem = item;
                }
            })
            return foundItem;
        },
        addUpdatedItem: function(name, calories) {
            calories = parseInt(calories);

            let foundItem = null;

            data.items.forEach(item => {
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = calories;
                    foundItem = item;
                }
            })

            return foundItem;
        },
        deleteItem: function (id) {
            const ids = data.items.map(item => {
                return item.id;
            })

            const index = ids.indexOf(id);

            data.items.splice(index, 1);
        },
        setCurrentItem: function (item) {
            data.currentItem = item;
        },
        getCurrentItem: function () {
            return data.currentItem;
        },
        getData: function () {
            return data;
        },
        getTotalCalories: function () {
            let calories = 0;

            data.items.forEach(item => {
                calories += item.calories;
            })

            
            data.totalCalories = calories;

            return data.totalCalories;
        },
        clearData: function () {
            data.items = [];
            data.totalCalories = 0;
            data.currentItem = null;
        }    
    }
})();
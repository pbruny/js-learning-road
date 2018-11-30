const storageController = (function () {

})();

const itemController = (function () {

    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
        items: [
            { id: 0, name: 'Chocolate', calories: 200 },
            { id: 1, name: 'Cookie', calories: 300 },
            { id: 2, name: 'Steak Meal', calories: 600 }
        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        getDataItems: function () {
            return data.items;
        },
        getData: function () {
            return data;
        }
    }
})();

const UIController = (function () {
    const UISelectors = {
        itemList: '#item-list'
    }
    return{
        populateItems: function(items){
            let html = '';
            items.forEach(item => {
                html += `
                <li class="collection-item" id="item-${item.id}"><strong>${item.name}:</strong> <em>${item.calories} calories</em><a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a></li>
                `;
            })

            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    }

})();

const appController = (function (itemController, UIController, storageController) {
    return {
        init: function () {
            const items = itemController.getDataItems();
            UIController.populateItems(items);
        }
    }
})(itemController, UIController);

appController.init();

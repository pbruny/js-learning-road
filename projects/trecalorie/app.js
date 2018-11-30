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
        addItem: function (name, calories) {
            let ID;
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1
            } else {
                ID = 0;
            }
            
            newItem = new Item(ID, name, parseInt(calories));
            data.items.push(newItem);
        },
        getData: function () {
            return data;
        }        
    }
})();

const UIController = (function () {
    const UISelectors = {
        itemList: '#item-list',
        addBtn : '.add-btn',
        itemName: '#item-name',
        itemCalories: '#item-calories'
    }
    return {
        populateItems: function (items) {
            let html = '';
            items.forEach(item => {
                html += `
                <li class="collection-item" id="item-${item.id}"><strong>${item.name}:</strong> <em>${item.calories} calories</em><a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a></li>
                `;
            })

            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getSelectors: function () {
            return UISelectors;
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemName).value,
                calories: document.querySelector(UISelectors.itemCalories).value
            }
        }
    }

})();

const appController = (function (itemController, UIController, storageController) {

    const loadEventListeners = function () {
        const UISelectors = UIController.getSelectors();
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    }

    const itemAddSubmit = function (e) {
        const input = UIController.getItemInput();

        if(input.name && input.calories){
            const newItem = itemController.addItem(input.name, input.calories);
            
        }
        
        e.preventDefault();
    }


    return {
        init: function () {
            const items = itemController.getDataItems();
            UIController.populateItems(items);
            loadEventListeners();
        }
    }
})(itemController, UIController);

appController.init();

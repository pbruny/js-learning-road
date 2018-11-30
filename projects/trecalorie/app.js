const storageController = (function () {

})();

const itemController = (function () {

    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
        items: [],
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
        }    
    }
})();

const UIController = (function () {
    const UISelectors = {
        itemList: '#item-list',
        addBtn : '.add-btn',
        itemName: '#item-name',
        itemCalories: '#item-calories',
        totalCalories: '.total-calories'
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
        },
        addListItem: function (item){
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;
            li.innerHTML = `<strong>${item.name}:</strong> <em>${item.calories} calories</em><a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        clearInputFields: function () {
            document.querySelector(UISelectors.itemName).value = '';
            document.querySelector(UISelectors.itemCalories).value = '';
        },
        showTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
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
            UIController.addListItem(newItem);
        }

        const totalCalories = itemController.getTotalCalories();
        UIController.showTotalCalories(totalCalories);

        UIController.clearInputFields();
        
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

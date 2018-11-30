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
        getItemById: function (id) {
            let foundItem;

            data.items.forEach(item => {
                if(item.id === id){
                    foundItem = item;
                }
            })
            return foundItem;
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
        }    
    }
})();

const UIController = (function () {
    const UISelectors = {
        itemList: '#item-list',
        addBtn : '.add-btn',
        updateBtn : '.update-btn',
        deleteBtn : '.delete-btn',
        backBtn: '.back-btn',   
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
        addItemToEdit: function () {
            document.querySelector(UISelectors.itemName).value = itemController.getCurrentItem().name;
            document.querySelector(UISelectors.itemCalories).value = itemController.getCurrentItem().calories;
            UIController.showEditState();
        },
        showTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function () {
            UIController.clearInputFields();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function () {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        }
    }

})();

const appController = (function (itemController, UIController, storageController) {

    const loadEventListeners = function () {
        const UISelectors = UIController.getSelectors();
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
        document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateClick);
        document.querySelector(UISelectors.backBtn).addEventListener('click', UIController.clearEditState)
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

    const itemUpdateClick = function (e) {
        
        if(e.target.classList.contains('edit-item')){
            const itemID = e.target.parentNode.parentNode.id;
            const itemIDArr = itemID.split('-');
            const id = parseInt(itemIDArr[1]);
            const itemToEdit = itemController.getItemById(id);
            itemController.setCurrentItem(itemToEdit);
            UIController.addItemToEdit();
        }
            
        e.preventDefault();
    }


    return {
        init: function () {
            UIController.clearEditState();
            const items = itemController.getDataItems();
            UIController.populateItems(items);
            loadEventListeners();
        }
    }
})(itemController, UIController);

appController.init();

const appController = (function (itemController, UIController, storageController) {

    const loadEventListeners = function () {
        const UISelectors = UIController.getSelectors();
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
        document.addEventListener('keypress', e => {
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        })
        document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateClick);
        document.querySelector(UISelectors.backBtn).addEventListener('click', UIController.clearEditState);
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearListItems);
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
    }

    const calculateAndShowCalories = function () {
        UIController.showTotalCalories(itemController.getTotalCalories());
    }

    const itemAddSubmit = function (e) {
        const input = UIController.getItemInput();

        if(input.name && input.calories){
            const newItem = itemController.addItem(input.name, input.calories);
            UIController.addListItem(newItem);
            storageController.storeItem(newItem);
        }

        calculateAndShowCalories();

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

    const itemUpdateSubmit = function (e) {
        const input = UIController.getItemInput();
        
        const editedItem = itemController.addUpdatedItem(input.name, input.calories);
        UIController.updateItem(editedItem);
        calculateAndShowCalories();
        storageController.updateItemStorage(editedItem);
        UIController.clearEditState();
        e.preventDefault();
    }

    const itemDeleteSubmit = function (e) {
        
        const currentItem = itemController.getCurrentItem();

        itemController.deleteItem(currentItem.id);
        UIController.deleteListItem(currentItem.id);
        calculateAndShowCalories();
        storageController.deleteItemFromStorage(currentItem.id);
        UIController.clearEditState();

        e.preventDefault();
    }

    const clearListItems = function (e) {
        
        UIController.clearUIList();
        itemController.clearData();
        calculateAndShowCalories();
        storageController.clearItemsFromStorage();
        e.preventDefault();
    }


    return {
        init: function () {
            UIController.clearEditState();
            const items = itemController.getDataItems();
            calculateAndShowCalories();
            UIController.populateItems(items);
            loadEventListeners();
        }
    }
})(itemController, UIController, storageController);

appController.init();

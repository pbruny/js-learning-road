const storageController = (function () {
    return {
        storeItem: function (item) {
            let items;
            
            if(localStorage.getItem('items') === null){
                items = [];
                items.push(item);
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                items = JSON.parse(localStorage.getItem('items'));
                items.push(item);
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemsFromStorage: function () {
            let items;
            if(localStorage.getItem('items') === null){
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }

            return items;
        },
        updateItemStorage: function (updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach((item, index) => {
                if(updatedItem.id === item.id){
                    items.splice(index, 1, updatedItem);
                }
            });

            localStorage.setItem('items', JSON.stringify(items));
        }, 
        deleteItemFromStorage: function(id) {
            items = JSON.parse(localStorage.getItem('items'));

            items.forEach((item, index) => {
                if(item.id === id){
                    items.splice(index, 1);
                }
            })

            localStorage.setItem('items', JSON.stringify(items));
        }, 
        clearItemsFromStorage: function () {
            localStorage.removeItem('items');
        }
    }
})();

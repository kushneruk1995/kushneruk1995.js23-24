define('controller',['jquery'],function($){

	function Controller(model, view) {
		var self = this;
		view.elements.addBtn.on('click', addItem);
		view.elements.listContainer.on('click', '.item-delete', removeItem);
		view.elements.listContainer.on('click','.item-show', editItem);


		function addItem() {
			var newItem = view.elements.input.val();
			model.addItem(newItem);
			view.renderList(model.data);
			view.elements.input.val('');
		};

		function removeItem() {
			var item = $(this).attr('data-value');
			model.removeItem(item);
			view.renderList(model.data);
		};

		function editItem() {
			var item = $(this).attr('data-show');
			$(this).hide();
			var index = $('.item-show').index(this);
			var editItem = $('.item-show').eq(index);
			var editInput = $('.item-edit').eq(index);
			$(editInput).val(item).show();
			editInput.select();

			editInput.focusout(function(){
				newItem = editInput.val();
				editInput.hide();
				editItem.show();
				model.editItem(item, newItem);
				view.renderList(model.data);
			});
		}
	}

	return Controller;
})
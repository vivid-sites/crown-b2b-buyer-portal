export const getShoppingListItemQuantity = (shoppingListId: string |number, itemId: string | number) => {
	const quantities = JSON.parse(sessionStorage.getItem(`quantities_${shoppingListId}`) || '{}');
	return quantities[itemId] || 0;
};

export const setShoppingListItemQuantity = (shoppingListId: string |number, itemId: string | number, quantity: number) => {
	var quantities = JSON.parse(sessionStorage.getItem(`quantities_${shoppingListId}`) || '{}');
	quantities[itemId] = quantity;
	sessionStorage.setItem(`quantities_${shoppingListId}`, JSON.stringify(quantities));
};
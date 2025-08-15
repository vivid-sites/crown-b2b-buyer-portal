import { ListItemProps } from '@/utils/b3Product/shared/config';

export const getShoppingListItemQuantities = (shoppingListId: string |number) => {
	return JSON.parse(sessionStorage.getItem(`quantities_${shoppingListId}`) || '[]');
};

export const setShoppingListItemQuantities = (shoppingListId: string |number, items: ListItemProps[]) => {
	sessionStorage.setItem(`quantities_${shoppingListId}`, JSON.stringify(items));
};

export const clearShoppingListItemQuantities = () => {
	for(let i = 0; i < sessionStorage.length; i++) {
		const key = sessionStorage.key(i);
		if(key && key.startsWith('quantities_')) {
			sessionStorage.removeItem(key);
		}
	}
}
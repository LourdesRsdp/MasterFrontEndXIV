import { act, renderHook } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('confirmation-dialog hook specs', () => {

    it('should return isOpen as false when onClose button is clicked', () => {

        //Arrange
        const { result } = renderHook(() => useConfirmationDialog(), {});

        //Act
        act(() => {
            result.current.onClose();
        });

        //Assert
        expect(result.current.isOpen).toEqual(false);

    });

    it('should return empty item when onAccept is clicked', () => {

        //Arrange
        const deletedItem = { id: '', name: '' };

        //Act
        const { result } = renderHook(() => useConfirmationDialog());
        result.current.onAccept();

        //Assert
        expect(result.current.itemToDelete).toEqual(deletedItem);

    });

    it('should close the confirmation dialog and set isOpen to false when onClose is called', () => {

        //Arrange
        const newItemToDelete = { id: "1", name: "1" };

        //Act
        const { result } = renderHook(() => useConfirmationDialog());

        act(() => {
            result.current.onOpenDialog(newItemToDelete);
        });

        act(() => {
            result.current.onClose();
        });

        //Assert
        expect(result.current.isOpen).toBe(false);

    });

    it('should update itemToDelete when it calls setItemToDelete using onAccept', async () => {

        // Arrange
        const newItemToDelete = { id: '1', name: '2' };

        // Act
        const { result } = renderHook(() => useConfirmationDialog());

        act(() => {
            result.current.onOpenDialog(newItemToDelete);
        });

        await Promise.resolve();

        // Assert
        expect(result.current.itemToDelete).toEqual(newItemToDelete);

        act(() => {
            result.current.onAccept();
        });

        await Promise.resolve();

        expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
    });

    it('should update itemToDelete when it calls setItemToDelete using onClose', async () => {

        // Arrange
        const newItemToDelete = { id: '1', name: '2' };

        // Act
        const { result } = renderHook(() => useConfirmationDialog());

        act(() => {
            result.current.onOpenDialog(newItemToDelete);
        });

        await Promise.resolve();

        // Assert
        

        act(() => {
            result.current.onClose();
        });

        await Promise.resolve();

        expect(result.current.itemToDelete).toEqual({ id: '1', name: '2' });
    });

    it('should open the confirmation dialog and set isOpen to true and itemToDelete to the provided item when onOpenDialog is called', () => {
        // Arrange
        const newItemToDelete = { id: '1', name: 'Test' };
    
        // Act
        const { result } = renderHook(() => useConfirmationDialog());
    
        act(() => {
            result.current.onOpenDialog(newItemToDelete);
        });
    
        // Assert
        expect(result.current.isOpen).toBe(true);
        expect(result.current.itemToDelete).toEqual(newItemToDelete);
    });
});

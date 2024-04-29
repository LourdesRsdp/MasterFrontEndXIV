import React from "react";
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";
import { fireEvent, getByRole, render } from "@testing-library/react";

describe('confirmation dialog component specs', () => {
    it('renders dialog with correct title and buttons', () => {

        // Arrange
        const isOpen = true;
        const title = "Confirmation Dialog";
        const labels = {
            closeButton: 'Close',
            acceptButton: 'Accept',
        }

        // Act
        const { getByText } = render(
            <ConfirmationDialogComponent
                isOpen={isOpen}
                onAccept={() => { }}
                onClose={() => { }}
                title={title}
                labels={labels}
            >
                <div></div>
            </ConfirmationDialogComponent>
        );

        // Assert
        expect(getByText(title)).toBeInTheDocument();
        expect(getByText(labels.acceptButton)).toBeInTheDocument();
        expect(getByText(labels.closeButton)).toBeInTheDocument();
    });

    it('should not render dialog when isOpen is false', () => {

        // Arrange
        const isOpen = false;
        const title = "Confirmation Dialog";
        const labels = {
            closeButton: 'Close',
            acceptButton: 'Accept',
        }

        // Act
        const { queryByText } = render(
            <ConfirmationDialogComponent
                isOpen={isOpen}
                onAccept={() => { }}
                onClose={() => { }}
                title={title}
                labels={labels}
                children={''}
            >


            </ConfirmationDialogComponent>
        )

        // Assert
        expect(queryByText(title)).toBeNull();
        expect(queryByText(labels.acceptButton)).toBeNull();
        expect(queryByText(labels.closeButton)).toBeNull();

    });

    it('should call onAccept when using acceptButton', () => {

        // Arrange
        const isOpen = true;
        const title = "Confirmation Dialog";
        const labels = {
            closeButton: 'Close',
            acceptButton: 'Accept',
        }
        const handleAccept = jest.fn();

        // Act
        const { getByRole } = render(<ConfirmationDialogComponent
            isOpen={isOpen}
            onAccept={handleAccept}
            onClose={() => { }}
            title={title}
            labels={labels}
            children={''}
        />)

        const acceptButton = getByRole('button', { name: labels.acceptButton });
        fireEvent.click(acceptButton);

        // Assert
        expect(handleAccept).toHaveBeenCalled();

    });

    it('should call onClose when using closetButton', () => {

        // Arrange
        const isOpen = true;
        const title = "Confirmation Dialog";
        const labels = {
            closeButton: 'Close',
            acceptButton: 'Accept',
        }
        const handleClose = jest.fn();

        // Act
        const { getByRole } = render(
            <ConfirmationDialogComponent
                isOpen={isOpen}
                onAccept={() => { }}
                onClose={handleClose}
                title={title}
                labels={labels}
                children={''}
            />
        );

        const closeButton = getByRole('button', { name: labels.closeButton });
        fireEvent.click(closeButton);

        // Assert
        expect(handleClose).toHaveBeenCalled();

    });
});

import { Component } from '@angular/core';

@Component({
  selector: 'app-my-spaces',
  templateUrl: './my-spaces.component.html',
  styleUrls: ['./my-spaces.component.scss']
})
export class MySpacesComponent {
  visible: boolean = false;
  deleteModalVisible: boolean = false;
  isEditMode: boolean = false;
  spaces = [
    { id: 1, name: 'Meeting Room', description: 'A room for meetings' },
    { id: 2, name: 'HR Office', description: 'Human Resources department' },
    { id: 3, name: 'Marketing Office', description: 'Marketing team workspace' }
  ];
  selectedSpace: any;

  changeVisibility(value: boolean) {
    this.visible = value;
  }

  addSpaces() {
    this.visible = true;
  }

  onAddRoom(spaceData: { spaceName: string, spaceDescription: string }) {
    if (this.selectedSpace) {
      this.selectedSpace.name = spaceData.spaceName;
      this.selectedSpace.description = spaceData.spaceDescription;
    } else {
      if (spaceData.spaceName) {
        const newSpace = { id: this.spaces.length + 1, name: spaceData.spaceName, description: spaceData.spaceDescription };
        this.spaces.unshift(newSpace);
      }
    }
    this.selectedSpace = null;
    this.visible = false;
    this.isEditMode = false;
  }

  editSpace(space: any) {
    this.selectedSpace = space;
    this.visible = true;
    this.isEditMode = true; 
  }

  showDeleteConfirmationModal(space: any) {
    this.selectedSpace = space;
    this.deleteModalVisible = true;
  }

  deleteSpaceConfirmed() {
    const index = this.spaces.findIndex(s => s.id === this.selectedSpace.id);
    if (index !== -1) {
      this.spaces.splice(index, 1);
    }
    this.deleteModalVisible = false;
  }

  cancelDelete() {
    this.deleteModalVisible = false;
    this.isEditMode = false;
  }
}

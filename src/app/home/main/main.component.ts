
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  // Declare search binding variable
  txtsearch = '';

  // Declare flag
  index = -1;
  // Edit flag
  isEdit = -1;
  // Delete flag
  isDelete = -1;
  // Add flag
  isAdd = false;



  // Declare variable for binding add resource data
  resourceName = '';
  resourceType = '';
  colorHex = '#000000';
  // Error for add form
  isValidName = false;
  isValidType = false;
  // Default resource
  defaultResName;
  defaultResType;
  defaultColorHex;
  // Declare resource array
  arrResources = [
    { id: 1, resourceName: 'Executive Conference Room', resourceType: 'Room', colorHex: '#FF0000' },
    { id: 2, resourceName: 'Board Room', resourceType: 'Room', colorHex: '#FF7F00' },
    { id: 3, resourceName: 'Projector 1', resourceType: 'Projector', colorHex: '#FFFF00' },
    { id: 4, resourceName: 'Projector 2', resourceType: 'Projector', colorHex: '#00FF00' },
    { id: 5, resourceName: 'Space Phone', resourceType: 'Phone', colorHex: '#90C3D4' },
    { id: 6, resourceName: 'LiveCam', resourceType: 'Phone', colorHex: '#0000FF' },
  ];

  constructor() { }
  ngOnInit() {
  }
  // Reset button state
  ResetButtonState() {
    this.isDelete = -1;
    this.isEdit = -1;
    this.isAdd = false;
  }

  // Default resource storing
  DefaultResource() {
    this.index = this.arrResources.findIndex(resource => resource.id === this.isEdit);
    this.defaultResName = this.arrResources[this.index].resourceName;
    this.defaultResType = this.arrResources[this.index].resourceType;
    this.defaultColorHex = this.arrResources[this.index].colorHex;
  }

  // Add method
  AddResource() {
    console.log(this.resourceName, this.resourceType);
    // Add resource when input is valid
    if (this.resourceName !== '' && this.resourceType !== '') {
      this.arrResources.unshift({
        id: this.arrResources.length + 1,
        resourceName: this.resourceName,
        resourceType: this.resourceType,
        colorHex: this.colorHex
      });
      this.isAdd = false;
    } else {
      if (this.resourceName === '') {
        this.isValidName = true;
      } else {
        this.isValidName = false;
      }
      if (this.resourceType === '') {
        this.isValidType = true;
      } else {
        this.isValidType = false;
      }
    }
  }

  // Show add form
  ShowAddForm() {
    this.isAdd = true;
  }

  // Close add form
  CloseAddForm() {
    // Clear input data
    this.resourceName = '';
    this.resourceType = '';
    this.isAdd = false;
  }

  // Edit method
  EditResource(resourceId) {
    this.index = this.arrResources.findIndex(resource => resource.id === resourceId);
    this.isEdit = resourceId;
    // Store default resource info
    this.DefaultResource();
  }

  // Cancel edit method
  Cancel(resourceId) {
    if (this.isEdit !== -1) {
      this.arrResources[this.index].resourceName = this.defaultResName;
      this.arrResources[this.index].resourceType = this.defaultResType;
      this.arrResources[this.index].colorHex = this.defaultColorHex;
    }
    if (this.isAdd) { this.arrResources.splice(this.index, 1); }
    this.ResetButtonState();
  }

  // Delete method
  DeleteResource(resourceId) {
    // Delete row at resourceId position
    this.isDelete = resourceId;
  }

  ConfirmDeleteResource(id: number) {
    const resourceId = this.arrResources.findIndex(x => x.id === id);
    this.arrResources.splice(resourceId, 1);
    this.ResetButtonState();
  }

  // Save method
  SaveResource() {
    this.ResetButtonState();
  }
}


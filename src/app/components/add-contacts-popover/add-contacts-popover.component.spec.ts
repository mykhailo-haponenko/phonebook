import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactsPopoverComponent } from './add-contacts-popover.component';

describe('AddContactsPopoverComponent', () => {
  let component: AddContactsPopoverComponent;
  let fixture: ComponentFixture<AddContactsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContactsPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactsPopoverComponent } from './edit-contacts-popover.component';

describe('EditContactsPopoverComponent', () => {
  let component: EditContactsPopoverComponent;
  let fixture: ComponentFixture<EditContactsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContactsPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

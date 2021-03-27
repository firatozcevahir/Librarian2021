import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookHolderComponent } from './edit-book-holder.component';

describe('EditBookHolderComponent', () => {
  let component: EditBookHolderComponent;
  let fixture: ComponentFixture<EditBookHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveStudentsComponent } from './remove-students.component';

describe('RemoveStudentsComponent', () => {
  let component: RemoveStudentsComponent;
  let fixture: ComponentFixture<RemoveStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

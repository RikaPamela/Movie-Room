import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToWatchComponent } from './add-to-watch.component';

describe('AddToWatchComponent', () => {
  let component: AddToWatchComponent;
  let fixture: ComponentFixture<AddToWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

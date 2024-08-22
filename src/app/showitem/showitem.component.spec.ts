import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowitemComponent } from './showitem.component';

describe('ShowitemComponent', () => {
  let component: ShowitemComponent;
  let fixture: ComponentFixture<ShowitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowitemComponent]
    });
    fixture = TestBed.createComponent(ShowitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

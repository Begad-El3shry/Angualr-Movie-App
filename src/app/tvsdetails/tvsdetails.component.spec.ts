import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsdetailsComponent } from './tvsdetails.component';

describe('TvsdetailsComponent', () => {
  let component: TvsdetailsComponent;
  let fixture: ComponentFixture<TvsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvsdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

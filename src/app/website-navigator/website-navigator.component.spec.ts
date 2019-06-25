import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteNavigatorComponent } from './website-navigator.component';

describe('WebsiteNavigatorComponent', () => {
  let component: WebsiteNavigatorComponent;
  let fixture: ComponentFixture<WebsiteNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

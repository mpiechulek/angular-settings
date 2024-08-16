import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should sum 2 numbers', () => {
    expect(component.onSum(2, 2)).toEqual(4);
    expect(component.onSum(2, 2)).not.toEqual(5);
  });

  it('should subtract 2 numbers', () => {
    expect(component.onSubtract(4, 2)).toEqual(2);
    expect(component.onSubtract(2, 2)).not.toEqual(1);
  });
});

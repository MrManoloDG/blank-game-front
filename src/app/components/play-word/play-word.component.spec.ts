import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayWordComponent } from './play-word.component';

describe('PlayWordComponent', () => {
  let component: PlayWordComponent;
  let fixture: ComponentFixture<PlayWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

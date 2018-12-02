import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectSpotifyAccountComponent } from './connect-spotify-account.component';

describe('ConnectSpotifyAccountComponent', () => {
  let component: ConnectSpotifyAccountComponent;
  let fixture: ComponentFixture<ConnectSpotifyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectSpotifyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectSpotifyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

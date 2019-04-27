import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CmspageModule } from './cmspage/cmspage.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatCardModule, MatListModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel/public_api';
import { RoutingModule } from './routing/routing.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IssueListComponent,
        IssueFormComponent,
        IssueDetailComponent,
        MainPageComponent
      ],
      imports: [
        CmspageModule,
        BrowserModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        AgmCoreModule.forRoot({
          apiKey: 'YOUR_KEY'
        }),
        CarouselModule.forRoot(),
        MatCardModule,
        MatListModule,
        RoutingModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'frontend'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('frontend');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to frontend!');
  }));
});

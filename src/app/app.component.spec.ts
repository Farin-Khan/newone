import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'yellow'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('yellow');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('yellow app is running!');
  });
});
//
// <div>
//   <div class="container">
//     <h2...........</h2>  
//     <div id="myCarousel" class="carousel slide" data-ride="carousel">
//       <!-- Indicators -->
//       <ol class="carousel-indicators">
//         <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//         <li data-target="#myCarousel" data-slide-to="1"></li>
//         <li data-target="#myCarousel" data-slide-to="2"></li>
//       </ol>
  
//       <!-- Wrapper for slides -->
//       <div class="carousel-inner">
//         <div class="item active">
//           <img src="assets/one.jpg" alt="Los Angeles" style="width:100%;">
//         </div>
  
//         <div class="item">
//           <img src="assets/two.jpg" alt="Chicago" style="width:100%;">
//         </div>
      
//         <div class="item">
//           <img src="assets/three.jpg" alt="New york" style="width:100%;">
//         </div>
//       </div>
  
//       <!-- Left and right controls -->
//       <a class="left carousel-control" href="#myCarousel" data-slide="prev">
//         <span class="glyphicon glyphicon-chevron-left"></span>
//         <span class="sr-only">Previous</span>
//       </a>
//       <a class="right carousel-control" href="#myCarousel" data-slide="next">
//         <span class="glyphicon glyphicon-chevron-right"></span>
//         <span class="sr-only">Next</span>
//       </a>
//     </div>
//   </div>
// </div>

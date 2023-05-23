import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-route',
  templateUrl: './sub-route.component.html',
  styleUrls: ['./sub-route.component.css']
})
export class SubRouteComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInitit(): void { }

  GoToPag1() {
    this.router.navigate(['page1'], { relativeTo: this.route })
  }
  GoToPag2() {
    this.router.navigate(['page2'], { relativeTo: this.route })
  }
}

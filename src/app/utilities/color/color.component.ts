import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  type: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.type = this.route.snapshot.params['type'];

    // this.type = this.route.snapshot.paramMap.get('type');
    // this.type = this.route.snapshot.queryParamMap.get('type');

    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.get('type')) {
        this.type = paramMap.get('type');
      }
    });

    this.route.queryParamMap.subscribe(paramMap => {
      if (paramMap.get('type')) {
        this.type = paramMap.get('type');
      }
    });

  }

}

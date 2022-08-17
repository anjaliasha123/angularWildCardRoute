import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-productid",
  templateUrl: "./productid.component.html",
  styleUrls: ["./productid.component.css"]
})
export class ProductidComponent implements OnInit {
  paramQuery1 = "";
  paramQuery2 = "";
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((data) => {
      this.paramQuery2 = data.id2;
      this.paramQuery1 = data.id;
    });
  }

  ngOnInit() {}
}
